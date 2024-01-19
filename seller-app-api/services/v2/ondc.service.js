import { v4 as uuidv4 } from 'uuid';
import config from "../../lib/config";
import HttpRequest from "../../utils/HttpRequest";
import { InitRequest, ConfirmRequest, SelectRequest } from '../../models'
import { getProductUpdate } from "../../utils/v2/schemaMapping";
import { domainNameSpace } from "../../utils/constants";
import ProductService from './product.service'
import LogisticsService from './logistics.service'
const productService = new ProductService();
const logisticsService = new LogisticsService();
import logger from '../../lib/logger'
const BPP_ID = config.get("sellerConfig").BPP_ID
const BPP_URI = config.get("sellerConfig").BPP_URI


class OndcService {

    async productSearch(payload = {}, req = {}) {
        try {
            // const {criteria = {}, payment = {}} = req || {};

            logger.log('info', `[Ondc Service] search logistics payload : param >>:`, payload);

            const order = payload;
            const selectMessageId = payload.context.message_id;

            this.postSearchRequest(order, selectMessageId)

            return {}   
        } catch (err) {
            logger.error('error', `[Ondc Service] search logistics payload - search logistics payload : param :`, err);
            throw err;
        }
    }

    async orderSelect(payload = {}, req = {}) {
        try {
            const items = payload.message.order.items
            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4();
            let storeLocationEnd = {}
            let resultData = {}
            let totalProductValue = 0

            for (let item of items) {
                resultData = await productService.getForOndc(item.id)
                if (Object.keys(resultData).length > 0) {
                    if (resultData?.commonDetails) {
                        let price = resultData?.commonDetails?.MRP * item.quantity.count
                        totalProductValue += price
                    }else{
                        let price = resultData?.MRP * item.quantity.count
                        totalProductValue += price
                    }
                }
            }

            let org = await productService.getOrgForOndc(payload.message.order.provider.id);

            if (org.providerDetail.storeDetails) {
                storeLocationEnd = {
                    gps: `${org.providerDetail.storeDetails.latitude},${org.providerDetail.storeDetails.longitude}`,
                    address: {
                        area_code: org.providerDetail.storeDetails.pincode
                    }
                }
            }
            const searchRequest = {
                "context":
                {
                    "domain": "nic2004:60232",
                    "country": payload.context.country,
                    "city": payload.context.city,
                    "action": "search",
                    "core_version": payload.context.core_version,
                    "bap_id": config.get("sellerConfig").BPP_ID,
                    "bap_uri": config.get("sellerConfig").BPP_URI,
                    "transaction_id": payload.context.transaction_id,
                    "message_id": logisticsMessageId,
                    "timestamp": new Date(),
                    "ttl": payload.context.ttl
                },
                "message":
                {
                    "intent":
                    {
                        "category":
                        {
                            "id": config.get("sellerConfig").LOGISTICS_DELIVERY_TYPE
                        },
                        "provider":
                        {
                            "time":
                            {
                                "days": "1,2,3,4,5,6,7",
                                "range":
                                {
                                    "end": "2359",
                                    "start": "0000"
                                }
                            }
                        },
                        "fulfillment":
                        {
                            "type": "Prepaid",
                            "start":
                            {
                                "location": storeLocationEnd
                            },
                            "end": payload.message.order.fulfillments[0].end
                        },
                        "@ondc/org/payload_details":
                        {
                            "weight":
                            {
                                "unit": "Kilogram",
                                "value": 10
                            },
                            "category": "Grocery",
                            "value":
                            {
                                "currency": "INR",
                                "value": `${totalProductValue}`
                            }
                        }
                    }
                }
            }

            logger.log('info', `[Ondc Service] search logistics payload : param :`, payload);

            setTimeout(() => {
                this.postSelectRequest(searchRequest, logisticsMessageId, selectMessageId)
            }, 10000);
            return searchRequest
        } catch (err) {
            logger.error('error', `[Ondc Service] search logistics payload - search logistics payload : param :`, err);
            throw err;
        }
    }

    async orderSelectWithoutlogistic(payload = {}, req = {}) {
        try {
            const items = payload.message.order.items
            logger.log('info', `[Ondc Service] search logistics payload : param :`, payload);
            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4();
            const searchRequest = await productService.selectV2(payload);
            //process select request and send it to protocol layer
            this.postSelectRequestV2(searchRequest, logisticsMessageId, selectMessageId)

            return searchRequest
        } catch (err) {
            logger.error('error', `[Ondc Service] search logistics payload - search logistics payload : param :`, err);
            throw err;
        }
    }
    async postSelectRequestV2(searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            try {
                let headers = {};
                let httpRequest = new HttpRequest(
                    config.get("sellerConfig").BPP_URI,
                    `/protocol/v1/on_select`,
                    'POST',
                    searchRequest,
                    headers
                );
                console.error("Here  -- 3")


                await httpRequest.send();

                console.error("Here  -- 4")


            } catch (e) {
                logger.error('error', `[Ondc Service] post http select response : `, e);
                return e
            }
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }

    async postSelectRequest(searchRequest, logisticsMessageId, selectMessageId) {

        try {

            await logisticsService.postSelectRequest(searchRequest, selectMessageId, logisticsMessageId)
            setTimeout(() => {
                logger.log('info', `[Logistics Service] search logistics payload - timeout : param :`, searchRequest);
                this.buildSelectRequest(logisticsMessageId, selectMessageId)
            }, 20000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Logistics Service] post http select response : `, e);
            return e
        }
    }

    async buildSelectRequest(logisticsMessageId, selectMessageId) {

        try {
            logger.log('info', `[Ondc Service] search logistics payload - build select request : param :`, { logisticsMessageId, selectMessageId });
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, selectMessageId, 'select')
            //2. if data present then build select response
            let selectResponse = await productService.productSelect(logisticsResponse)
            //3. post to protocol layer
            await this.postSelectResponse(selectResponse);

        } catch (e) {
            logger.error('error', `[Ondc Service] search logistics payload - build select request : param :`, e);
            return e
        }
    }

    async postSearchRequest(searchRequest, selectMessageId) {
        try {
            this.buildSearchRequest(searchRequest, selectMessageId)
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e;
        }
    }

    async buildSearchRequest(searchRequest, searchMessageId) {

        try {
            // let org = await productService.getOrgForOndc(payload.message.order.provider.id);
            let searchResponse = await productService.search(searchRequest, searchMessageId)
            if (searchResponse.length > 0) {
                for (let onsearch of searchResponse) {
                    await this.postSearchResponse(onsearch);
                }
            }

        } catch (e) {
            logger.error('error', `[Ondc Service] search logistics payload - build select request : param :`, e);
            return e
        }
    }

    //get all logistics response from protocol layer

    //return select response to protocol layer
    async postSelectResponse(selectResponse) {
        try {
            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_select`,
                'POST',
                selectResponse,
                headers
            );

            let result = await httpRequest.send();
            return result.data

        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }

    //return select response to protocol layer
    async postSearchResponse(searchResponse) {
        try {

            logger.info('info', `[Ondc Service] post http select response : `, searchResponse);

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_search`,
                'POST',
                searchResponse,
                headers
            );

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            logger.error('error', `[Ondc Service] post http search response : `, e);
            return e
        }

    }

    async orderInit(payload = {}, req = {}) {
        try {
            logger.log('info', `[Ondc Service] init logistics payload : param :`, payload.message.order);

            let logisticsStatus = true;
            let responseForSelect = {};

            if (payload.message.order.fulfillments[0].type === 'Self-Pickup') {
                responseForSelect = payload;
                logisticsStatus = false
            } else {
                const selectRequest = await SelectRequest.findOne({
                    where: {
                        transactionId: payload.context.transaction_id,
                        providerId: payload.message.order.provider.id
                    },
                    order: [
                        ['createdAt', 'DESC']
                    ]
                })

                let org = await productService.getOrgForOndc(payload.message.order.provider.id);
                const logistics = selectRequest.selectedLogistics;

                let storeLocationEnd = {}
                if (org.providerDetail.storeDetails) {
                    storeLocationEnd = {
                        location: {
                            gps: `${org.providerDetail.storeDetails.latitude},${org.providerDetail.storeDetails.longitude}`,
                            address: {
                                area_code: org.providerDetail.storeDetails.pincode,
                                name: org.providerDetail.name,
                                building: org.providerDetail.storeDetails?.building,
                                locality: org.providerDetail.storeDetails?.locality,
                                city: org.providerDetail.storeDetails.city,
                                state: org.providerDetail.storeDetails.state,
                                country: org.providerDetail.storeDetails.country
                            }
                        },
                        contact:
                        {
                            phone: org.providerDetail.storeDetails.mobile,
                            email: org.providerDetail.storeDetails.email
                        }
                    }
                }

                //logger.log('info', `[Ondc Service] old selected logistics :`,logistics);

                const order = payload.message.order;
                const initMessageId = payload.context.message_id;
                const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one
                const contextTimeStamp = new Date()


                let deliveryType = logistics.message.catalog["bpp/providers"][0].items.find((element) => { return element.category_id === config.get("sellerConfig").LOGISTICS_DELIVERY_TYPE });
                // let deliveryType = payload.message.order.items
                const initRequest = {
                    "context": {
                        "domain": "nic2004:60232",
                        "country": payload.context.country,
                        "city": payload.context.city,
                        "action": "init",
                        "core_version": payload.context.core_version,
                        "bap_id": config.get("sellerConfig").BPP_ID,
                        "bap_uri": config.get("sellerConfig").BPP_URI,
                        "bpp_id": logistics.context.bpp_id, //STORED OBJECT
                        "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                        "transaction_id": logistics.context.transaction_id,
                        "message_id": logisticsMessageId,
                        "timestamp": contextTimeStamp,
                        "ttl": "PT30S"
                    },
                    "message": {
                        "order": {
                            "provider": {
                                "id": logistics.message.catalog["bpp/providers"][0].id
                            },
                            "items": [deliveryType],
                            "fulfillments": [{
                                "id": logistics.message.catalog["bpp/fulfillments"][0].id,
                                "type": logistics.message.catalog["bpp/fulfillments"][0].type,
                                "start": storeLocationEnd,
                                "end": order.fulfillments[0].end
                            }],
                            "billing": { //TODO: discuss whos details should go here buyer or seller
                                "name": order.billing.name,
                                "address": {
                                    "name": order.billing.address.name,
                                    "building": order.billing.address.building,
                                    "locality": order.billing.address.locality,
                                    "city": order.billing.address.city,
                                    "state": order.billing.address.state,
                                    "country": order.billing.address.country,
                                    "area_code": order.billing.address.area_code
                                },
                                "tax_number": org.providerDetail.GSTN, //FIXME: take GSTN no
                                "phone": org.providerDetail.storeDetails.mobile, //FIXME: take provider details
                                "email": org.providerDetail.storeDetails.email, //FIXME: take provider details
                                "created_at": contextTimeStamp,
                                "updated_at": contextTimeStamp
                            },
                            "payment": {
                                "@ondc/org/settlement_details": []//order.payment['@ondc/org/settlement_details'] //TODO: need details of prepaid transactions to be settle for seller
                            }
                        }
                    }
                }
                //logger.log('info', `[Ondc Service] build init request :`, {logisticsMessageId,initMessageId: initMessageId});

                responseForSelect = await this.postInitRequest(initRequest, logisticsMessageId, initMessageId)
                logisticsStatus = true
            }

            let selectResponse = await productService.productInit(responseForSelect, logisticsStatus)
            //3. post to protocol layer
            await this.postInitResponse(selectResponse);

            return { 'status': 'ACK' }
        } catch (err) {
            logger.error('error', `[Ondc Service] build init request :`, { error: err.stack, message: err.message });
            console.log(err)
            return err
        }
    }

    async postInitRequest(searchRequest, logisticsMessageId, selectMessageId) {
        try {
            await logisticsService.postInitRequest(searchRequest, logisticsMessageId, selectMessageId)
            return await Promise.all([
                this.buildInitRequest(logisticsMessageId, selectMessageId),
                this.timeout(5000)
            ]);

        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }

    async buildInitRequest(logisticsMessageId, initMessageId) {

        try {
            logger.log('info', `[Ondc Service] build init request :`, { logisticsMessageId, initMessageId });

            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'init')
            return logisticsResponse;

        } catch (err) {
            logger.error('error', `[Ondc Service] build init request :`, { error: err.stack, message: err.message });
            return err
        }
    }


    //return init response to protocol layer
    async postInitResponse(initResponse) {
        try {

            logger.info('info', `[Ondc Service] post init request :`, initResponse);

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_init`,
                'POST',
                initResponse,
                headers
            );

            let result = await httpRequest.send();

            return result.data

        } catch (err) {
            logger.error('error', `[Ondc Service] post init request :`, { error: err.stack, message: err.message });
            return err
        }

    }

    async orderConfirm(payload = {}, req = {}) {
        try {
            //const {criteria = {}, payment = {}} = req || {};
            let logisticsStatus = true;
            let postConfirmRequest = {};

            if (payload.message.order.fulfillments[0].type === 'Self-Pickup') {
                postConfirmRequest = payload;
                logisticsStatus = false
            } else {

                const selectRequest = await SelectRequest.findOne({
                    where: {
                        transactionId: payload.context.transaction_id,
                        providerId: payload.message.order.provider.id
                    },
                    order: [
                        ['createdAt', 'DESC'],
                    ]
                })
                const initRequest = await InitRequest.findOne({
                    where: {
                        transactionId: payload.context.transaction_id,
                        providerId: payload.message.order.provider.id
                    },
                    order: [
                        ['createdAt', 'DESC'],
                    ]
                })

                const logistics = selectRequest?.selectedLogistics;
                const order = payload.message.order;
                const selectMessageId = payload.context.message_id;
                const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

                let org = await productService.getOrgForOndc(payload.message.order.provider.id);

                let storeLocationEnd = {}
                if (org.providerDetail.storeDetails) {
                    storeLocationEnd = {
                        location: {
                            gps: `${org.providerDetail.storeDetails.latitude},${org.providerDetail.storeDetails.longitude}`,
                            address: {
                                area_code: org.providerDetail.storeDetails.pincode,
                                name: org.providerDetail.name,
                                building: org.providerDetail.storeDetails?.building,
                                locality: org.providerDetail.storeDetails?.locality,
                                city: org.providerDetail.storeDetails.city,
                                state: org.providerDetail.storeDetails.state,
                                country: org.providerDetail.storeDetails.country
                            }
                        },
                        contact:
                        {
                            phone: org.providerDetail.storeDetails.mobile,
                            email: org.providerDetail.storeDetails.email
                        },
                        person: {
                            name: org.providerDetail.name //TODO: missing from curent impl
                        }
                    }
                }

                let end = { ...order.fulfillments[0].end }

                end.location.address.locality = end.location.address.locality ?? end.location.address.street
                end.person = { name: end.location.address.name }

                //const isInvalidItem =false
                let itemDetails = []
                for (const items of payload.message.order.items) {
                    let item = await productService.getForOndc(items.id)
                    let details = {
                        "descriptor": {
                            "name": item.commonDetails.productName
                        },
                        "price": {
                            "currency": "INR",
                            "value": "" + item.commonDetails.MRP
                        },
                        "category_id": item.commonDetails.productCategory,
                        "quantity": {
                            "count": items.quantity.count,
                            "measure": { //TODO: hard coded
                                "unit": "Kilogram",
                                "value": 1
                            }
                        }
                    }
                    itemDetails.push(details)
                }


                let deliveryType = selectRequest.selectedLogistics.message.catalog['bpp/providers'][0].items.find((element) => { return element.category_id === config.get("sellerConfig").LOGISTICS_DELIVERY_TYPE });// let deliveryType = logistics.message.catalog["bpp/providers"][0].items.find((element)=>{return element.category_id === config.get("sellerConfig").LOGISTICS_DELIVERY_TYPE}); TODO commented for now for logistic
                // let deliveryType = payload.message.order.items //TODO commented above for now
                const contextTimestamp = new Date()
                const confirmRequest = {
                    "context": {
                        "domain": "nic2004:60232",
                        "action": "confirm",
                        "core_version": payload.context.core_version,
                        "bap_id": config.get("sellerConfig").BPP_ID,
                        "bap_uri": config.get("sellerConfig").BPP_URI,
                        "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                        "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                        "transaction_id": initRequest.logisticsTransactionId,
                        "message_id": logisticsMessageId,
                        "city": payload.context.city,
                        "country": payload.context.country,
                        "timestamp": contextTimestamp
                    },
                    "message": {
                        "order": {
                            "@ondc/org/linked_order": {
                                "items": itemDetails,
                                "provider": {
                                    "descriptor": {
                                        name: org.providerDetail.name
                                    },
                                    "address": {
                                        area_code: org.providerDetail.storeDetails.pincode,
                                        name: org.providerDetail.name,
                                        building: org.providerDetail.storeDetails?.building,
                                        locality: org.providerDetail.storeDetails?.locality,
                                        city: org.providerDetail.storeDetails.city,
                                        state: org.providerDetail.storeDetails.state,
                                        country: org.providerDetail.storeDetails.country
                                    }
                                },
                                "order": {
                                    "id": order.id,
                                    "weight": {//TODO: hard coded
                                        "unit": "Kilogram",
                                        "value": 10
                                    }
                                }
                            },
                            "id": order.id,
                            "items": [deliveryType], //TODO: fix this map to right item id from select request
                            "provider": initRequest.selectedLogistics.message.order.provider,
                            "fulfillments": [{
                                "id": order.fulfillments[0].id,
                                "type": "Prepaid",
                                "start": storeLocationEnd,
                                "end": end,
                                "tags": {
                                    "@ondc/org/order_ready_to_ship": "no" //TODO: hard coded
                                }
                            }],
                            "quote": initRequest.selectedLogistics.message.order.quote,
                            "payment": { //TODO: hard coded
                                "type": "POST-FULFILLMENT",
                                "collected_by": order.payment.collected_by,
                                "@ondc/org/settlement_details": []
                            },
                            "billing": {
                                ...payload.message.order.billing,
                                "tax_number": org.providerDetail.GSTN, //FIXME: take GSTN no
                                "phone": org.providerDetail.storeDetails.mobile, //FIXME: take provider details
                                "email": org.providerDetail.storeDetails.email, //FIXME: take provider details
                                "created_at": contextTimestamp,
                                "updated_at": contextTimestamp
                            }, //TODO: pass valid GST number from seller
                            state: order.state,
                            created_at: contextTimestamp,
                            updated_at: contextTimestamp
                        }
                    }

                }
                postConfirmRequest = await this.postConfirmRequest(confirmRequest, logisticsMessageId, selectMessageId)
                logisticsStatus = true;
            }
            //}, 10000); //TODO move to config
            let selectResponse = await productService.productConfirm(postConfirmRequest, logisticsStatus)

            //3. post to protocol layer
            await this.postConfirmResponse(selectResponse);

            return { status: "ACK" }
        } catch (err) {
            throw err;
        }
    }
    async orderConfirmWithOutLogistic(payload = {}, req = {}) {
        try {
            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one
            const searchRequest = await productService.confirmV2(payload);
            this.postConfirmRequestV2(searchRequest, logisticsMessageId, selectMessageId)
            //}, 10000); //TODO move to config

            return { status: "ACK" }
        } catch (err) {
            throw err;
        }
    }

    async postConfirmRequestV2(searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            try {

                let headers = {};
                let httpRequest = new HttpRequest(
                    config.get("sellerConfig").BPP_URI,
                    `/protocol/v1/on_confirm`,
                    'POST',
                    searchRequest,
                    headers
                );

                await httpRequest.send();

            } catch (e) {
                logger.error('error', `[Ondc Service] post http select response : `, e);
                return e
            }

            //2. wait async to fetch logistics responses

            // //async post request
            // setTimeout(() => {
            //     logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
            //     this.buildConfirmRequest(logisticsMessageId, selectMessageId)
            // }, 10000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }

    async postConfirmRequest(searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            await logisticsService.postConfirmRequest(searchRequest, logisticsMessageId, selectMessageId)
            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
                return this.buildConfirmRequest(logisticsMessageId, selectMessageId)
            }, 10000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }


    async buildConfirmRequest(logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            return await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'confirm')


        } catch (e) {
            console.log(e)
            return e
        }
    }

    async triggerOnStatus(context, orderId) {

        console.log("context", context)
        console.log("orderId", orderId)
        let status = {
            "context": context,
            "message": {
                "order_id": orderId
            }
        }

        await this.orderStatus(status, {}, true)
    }


    //return confirm response to protocol layer
    async postConfirmResponse(confirmResponse) {
        try {

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_confirm`,
                'POST',
                confirmResponse,
                headers
            );

            console.log(httpRequest)

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            return e
        }

    }
    async orderTrack(payload = {}, req = {}) {
        try {
            //const {criteria = {}, payment = {}} = req || {};

            const confirmRequest = await ConfirmRequest.findOne({
                where: {
                    transactionId: payload.context.transaction_id,
                    retailOrderId: payload.message.order_id
                }
            })

            const logistics = confirmRequest.selectedLogistics;

            //const order = payload.message.order;
            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

            const trackRequest = {
                "context": {
                    "domain": "nic2004:60232",
                    "action": "track",
                    "core_version": "1.1.0",
                    "bap_id": config.get("sellerConfig").BPP_ID,
                    "bap_uri": config.get("sellerConfig").BPP_URI,
                    "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                    "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                    "transaction_id": confirmRequest.logisticsTransactionId,
                    "message_id": logisticsMessageId,
                    "city": "std:080",
                    "country": "IND",
                    "timestamp": new Date()
                },
                "message":
                {
                    "order_id": confirmRequest.orderId,//payload.message.order_id,
                }

            }


            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            //setTimeout(() => {
            this.postTrackRequest(trackRequest, logisticsMessageId, selectMessageId)
            // }, 5000); //TODO move to config

            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }


    async postTrackRequest(searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            try {

                let headers = {};
                let httpRequest = new HttpRequest(
                    config.get("sellerConfig").BPP_URI,
                    `/protocol/logistics/v1/track`,
                    'POST',
                    searchRequest,
                    headers
                );


                await httpRequest.send();

            } catch (e) {
                logger.error('error', `[Ondc Service] post http select response : `, e);
                return e
            }

            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
                this.buildTrackRequest(logisticsMessageId, selectMessageId)
            }, 10000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }

    async buildTrackRequest(logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'track')
            //2. if data present then build select response

            let selectResponse = await productService.productTrack(logisticsResponse)

            //3. post to protocol layer
            await this.postTrackResponse(selectResponse);

        } catch (e) {
            console.log(e)
            return e
        }
    }


    //return track response to protocol layer
    async postTrackResponse(trackResponse) {
        try {

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_track`,
                'POST',
                trackResponse,
                headers
            );

            console.log(httpRequest)

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            return e
        }

    }

    async orderStatus(payload = {}, req = {}, unsoliciated = false) {
        try {
            //const {criteria = {}, payment = {}} = req || {};

            const confirmRequest = await ConfirmRequest.findOne({
                where: {
                    transactionId: payload.context.transaction_id,
                    retailOrderId: payload.message.order_id
                }
            })
            const logistics = confirmRequest.selectedLogistics;
            const orderId = confirmRequest.orderId;
            //const order = payload.message.order;
            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

            const statusRequest = {
                "context": {
                    "domain": "nic2004:60232",
                    "action": "status",
                    "core_version": "1.1.0",
                    "bap_id": config.get("sellerConfig").BPP_ID,
                    "bap_uri": config.get("sellerConfig").BPP_URI,
                    "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                    "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                    "transaction_id": confirmRequest.logisticsTransactionId,
                    "message_id": logisticsMessageId,
                    "city": "std:080",
                    "country": "IND",
                    "timestamp": new Date()
                },
                "message":
                {
                    "order_id": orderId,
                }

            }


            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            // setTimeout(() => {
            this.postStatusRequest(statusRequest, logisticsMessageId, selectMessageId, unsoliciated, payload)
            //}, 5000); //TODO move to config

            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }

    async orderStatusWithoutLogistics(payload = {}, req = {}, unsoliciated = false) {
        try {
            //const {criteria = {}, payment = {}} = req || {};


            //const order = payload.message.order;
            const selectMessageId = payload.context.message_id;

            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            //setTimeout(() => {
            let statusResponse = await productService.productStatusWithoutLogistics(payload)

            //3. post to protocol layer
            this.postStatusResponse(statusResponse);


            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }
    async orderStatusUpdate(payload = {}, req = {}) {
        try {
            // const {criteria = {}, payment = {}} = req || {};

            const confirmRequest = await ConfirmRequest.findOne({
                where: {
                    retailOrderId: payload.data.orderId
                }
            })

            const logistics = confirmRequest.selectedLogistics;

            const order = payload.data;
            const selectMessageId = uuidv4();
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

            const trackRequest = {
                "context": {
                    "domain": "nic2004:60232",
                    "action": "update",
                    "core_version": "1.1.0",
                    "bap_id": config.get("sellerConfig").BPP_ID,
                    "bap_uri": config.get("sellerConfig").BPP_URI,
                    "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                    "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                    "transaction_id": confirmRequest.logisticsTransactionId,
                    "message_id": logisticsMessageId,
                    "city": "std:080", //TODO: take it from request
                    "country": "IND",
                    "timestamp": new Date()
                },
                "message": {
                    "order": {
                        "id": order.orderId,
                        "state": "Accepted",
                        "items": logistics.items,
                        "@ondc/org/linked_order": {
                            "items": [{
                                "descriptor": {
                                    "name": "KIT KAT"
                                },
                                "quantity": {
                                    "count": 2,
                                    "measure": {
                                        "value": 200,
                                        "unit": "Gram"
                                    }
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "200.00"
                                },
                                "category_id": "Grocery"
                            }]
                        },
                        "fulfillments": [{
                            "id": logistics.message.order.fulfillments[0].id,
                            "type": logistics.message.order.fulfillments[0].type,
                            "tracking": logistics.message.order.fulfillments[0].tracking,
                            "tags": {
                                "@ondc/org/order_ready_to_ship": "yes"
                            }
                        }],
                        "updated_at": new Date()
                    },
                    "update_target": "fulfillment"
                }

            }


            payload = { message: { order: order }, context: confirmRequest.confirmRequest.context }
            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            //setTimeout(() => {
            this.postUpdateOrderStatusRequest(payload, trackRequest, logisticsMessageId, selectMessageId)
            //}, 5000); //TODO move to config

            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }
    async orderCancelFromSeller(payload = {}, req = {}) {
        try {
            const order = payload.data;
            //const {criteria = {}, payment = {}} = req || {};
            let logistic = false;
            let postCancelRequest = {}

            const confirmRequest = await ConfirmRequest.findOne({
                where: {
                    retailOrderId: payload.data.orderId
                }
            })
            if (confirmRequest) {
                logistic = true;
            }
            const logistics = (logistic) ? confirmRequest.selectedLogistics : payload;

            let context = (logistic) ? confirmRequest.confirmRequest.context : {}
            order.context = context
            if (logistic) {
                const selectMessageId = uuidv4();
                const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one         
                const trackRequest = {
                    "context": {
                        "domain": "nic2004:60232",
                        "action": "cancel",
                        "core_version": "1.1.0",
                        "bap_id": config.get("sellerConfig").BPP_ID,
                        "bap_uri": config.get("sellerConfig").BPP_URI,
                        "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                        "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                        "transaction_id": confirmRequest.logisticsTransactionId,
                        "message_id": logisticsMessageId,
                        "city": "std:080", //TODO: take it from request
                        "country": "IND",
                        "timestamp": new Date()
                    },
                    "message": {
                        "order_id": order.orderId,
                        "cancellation_reason_id": order.cancellation_reason_id
                    }
                }
                payload = { message: { order: order }, context: context }

                postCancelRequest = this.postSellerCancelRequest(payload, trackRequest, logisticsMessageId, selectMessageId, logistic)
            }
            let cancelResponse = await productService.productSellerCancel(postCancelRequest, logistics, logistic)
            //3. post to protocol layer
            if (logistic) {
                await this.postSellerCancelResponse(cancelResponse);
            }
            return { status: 'ACK' }
        } catch (err) {

            console.log("err--->", err);
            throw err;
        }
    }
    async orderUpdate(payload = {}, req = {}) {
        try {
            //const {criteria = {}, payment = {}} = req || {};

            const confirmRequest = await ConfirmRequest.findOne({
                where: {
                    retailOrderId: payload.message.order.id
                }
            })

            const logistics = confirmRequest.selectedLogistics;

            const order = payload.message.order
            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

            const trackRequest = {
                "context": {
                    "domain": "nic2004:60232",
                    "action": "update",
                    "core_version": "1.1.0",
                    "bap_id": config.get("sellerConfig").BPP_ID,
                    "bap_uri": config.get("sellerConfig").BPP_URI,
                    "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                    "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                    "transaction_id": confirmRequest.logisticsTransactionId,
                    "message_id": logisticsMessageId,
                    "city": "std:080", //TODO: take it from request
                    "country": "IND",
                    "timestamp": new Date()
                },
                "message": {
                    "order": {
                        "id": order.orderId,
                        "state": "Accepted",
                        "items": logistics.items,
                        "@ondc/org/linked_order": {
                            "items": [{ //TODO: get valid item from list and update the fields
                                "descriptor": {
                                    "name": "KIT KAT"
                                },
                                "quantity": {
                                    "count": 2,
                                    "measure": {
                                        "value": 200,
                                        "unit": "Gram"
                                    }
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "200.00"
                                },
                                "category_id": "Grocery"
                            }]
                        },
                        "fulfillments": [{
                            "id": logistics.message.order.fulfillments[0].id,
                            "type": logistics.message.order.fulfillments[0].type,
                            "tracking": logistics.message.order.fulfillments[0].tracking,
                            "tags": {
                                "@ondc/org/order_ready_to_ship": "yes" //TBD: passing this value for update triggers logistics workflow
                            }
                        }],
                        "updated_at": new Date()
                    },
                    "update_target": "fulfillment"
                }

            }


            payload = { message: { order: order }, context: confirmRequest.confirmRequest.context }
            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            //setTimeout(() => {
            this.postUpdateRequest(payload, trackRequest, logisticsMessageId, selectMessageId)
            //}, 5000); //TODO move to config

            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }

    async orderStatusUpdateItems(payload = {}, req = {}) {
        try {
            //const {criteria = {}, payment = {}} = req || {};

            const confirmRequest = await ConfirmRequest.findOne({
                where: {
                    retailOrderId: payload.data.orderId
                }
            })

            // const logistics = confirmRequest.selectedLogistics;

            const order = payload.data;
            const selectMessageId = uuidv4();//payload.context.message_id;
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

            // const trackRequest = {
            //     "context": {
            //         "domain": "nic2004:60232",
            //         "action": "update",
            //         "core_version": "1.1.0",
            //         "bap_id": config.get("sellerConfig").BPP_ID,
            //         "bap_uri": config.get("sellerConfig").BPP_URI,
            //         "bpp_id": logistics.context.bpp_id,//STORED OBJECT
            //         "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
            //         "transaction_id": confirmRequest.logisticsTransactionId,
            //         "message_id": logisticsMessageId,
            //         "city": "std:080", //TODO: take it from request
            //         "country": "IND",
            //         "timestamp": new Date()
            //     },
            //     "message": {
            //         "order": {
            //             "id": order.orderId,
            //             "state": "Accepted",
            //             "items": logistics.items,
            //             "@ondc/org/linked_order": {
            //                 "items": [{ //TODO: get valid item from list and update the fields
            //                     "descriptor": {
            //                         "name": "KIT KAT"
            //                     },
            //                     "quantity": {
            //                         "count": 2,
            //                         "measure": {
            //                             "value": 200,
            //                             "unit": "Gram"
            //                         }
            //                     },
            //                     "price": {
            //                         "currency": "INR",
            //                         "value": "200.00"
            //                     },
            //                     "category_id": "Grocery"
            //                 }]
            //             },
            //             "fulfillments": [{
            //                 "id": logistics.message.order.fulfillments[0].id,
            //                 "type": logistics.message.order.fulfillments[0].type,
            //                 "tracking": logistics.message.order.fulfillments[0].tracking,
            //                 "tags": {
            //                     "@ondc/org/order_ready_to_ship": "yes" //TBD: passing this value for update triggers logistics workflow
            //                 }
            //             }],
            //             "updated_at": new Date()
            //         },
            //         "update_target": "fulfillment"
            //     }

            // }


            payload = {
                message: { order: order },
                context: { ...confirmRequest?.confirmRequest?.context, message_id: uuidv4() }
            };
            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            //setTimeout(() => {
            this.postUpdateItemRequest(payload, {}, logisticsMessageId, selectMessageId);
            //}, 5000); //TODO move to config

            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }

    async notifyItemUpdate(data = {}, req = {}) {
        try {

            const result = await productService.ondcGetForUpdate(data.itemId)
            if (Object.keys(result).length > 0) {
                this.postItemUpdate(result);
            }
            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }
    async postStatusRequest(statusRequest, logisticsMessageId, selectMessageId, unsoliciated, payload) {

        try {
            //1. post http to protocol/logistics/v1/search
            logisticsService.postStatusRequest(statusRequest, logisticsMessageId, selectMessageId, unsoliciated, payload);
            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, statusRequest);
                this.buildStatusRequest(statusRequest, logisticsMessageId, selectMessageId, unsoliciated, payload)
            }, 10000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }
    async postUpdateRequest(orderData, searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            // try { //TODO: post this request for update items
            //
            //     console.log("------->>>",searchRequest,selectMessageId,logisticsMessageId)
            //     console.log("------result ->>>",config.get("sellerConfig").BPP_URI )
            //     let headers = {};
            //     let httpRequest = new HttpRequest(
            //         config.get("sellerConfig").BPP_URI,
            //         `/protocol/logistics/v1/update`,
            //         'POST',
            //         searchRequest,
            //         headers
            //     );
            //
            //
            //     let result = await httpRequest.send();
            //     console.log("------result ->>>",result )
            //
            // } catch (e) {
            //     logger.error('error', `[Ondc Service] post http select response : `, e);
            //     return e
            // }

            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
                this.buildUpdateRequest(orderData, logisticsMessageId, selectMessageId)
            }, 5000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }
    // async postUpdateItemRequest(orderData,searchRequest,logisticsMessageId,selectMessageId){
    //
    //     try{
    //         //1. post http to protocol/logistics/v1/search
    //
    //         // try { //TODO: post this request for update items
    //         //
    //         //     console.log("------->>>",searchRequest,selectMessageId,logisticsMessageId)
    //         //     console.log("------result ->>>",config.get("sellerConfig").BPP_URI )
    //         //     let headers = {};
    //         //     let httpRequest = new HttpRequest(
    //         //         config.get("sellerConfig").BPP_URI,
    //         //         `/protocol/logistics/v1/update`,
    //         //         'POST',
    //         //         searchRequest,
    //         //         headers
    //         //     );
    //         //
    //         //
    //         //     let result = await httpRequest.send();
    //         //     console.log("------result ->>>",result )
    //         //
    //         // } catch (e) {
    //         //     logger.error('error', `[Ondc Service] post http select response : `, e);
    //         //     return e
    //         // }
    //
    //         //2. wait async to fetch logistics responses
    //
    //         //async post request
    //         setTimeout(() => {
    //             logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`,searchRequest);
    //            this.buildUpdateRequest(orderData,logisticsMessageId, selectMessageId)
    //         }, 5000); //TODO move to config
    //     }catch (e){
    //         logger.error('error', `[Ondc Service] post http select response : `, e);
    //         return e
    //     }
    // }
    async postUpdateItemRequest(orderData, searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            // try { //TODO: post this request for update items
            //
            //     console.log("------->>>",searchRequest,selectMessageId,logisticsMessageId)
            //     console.log("------result ->>>",config.get("sellerConfig").BPP_URI )
            //     let headers = {};
            //     let httpRequest = new HttpRequest(
            //         config.get("sellerConfig").BPP_URI,
            //         `/protocol/logistics/v1/update`,
            //         'POST',
            //         searchRequest,
            //         headers
            //     );
            //
            //
            //     let result = await httpRequest.send();
            //     console.log("------result ->>>",result )
            //
            // } catch (e) {
            //     logger.error('error', `[Ondc Service] post http select response : `, e);
            //     return e
            // }

            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
                this.buildUpdateItemRequest(orderData, logisticsMessageId, selectMessageId)
            }, 5000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }
    async postItemUpdate(itemData) {

        try {
            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, itemData);
                this.buildItemUpdate(itemData)
            }, 1000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }
    async postUpdateOrderStatusRequest(orderData, searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            try { //TODO: post this request for update items

                let headers = {};
                let httpRequest = new HttpRequest(
                    config.get("sellerConfig").BPP_URI,
                    `/protocol/logistics/v1/update`,
                    'POST',
                    searchRequest,
                    headers
                );


                await httpRequest.send();

            } catch (e) {
                logger.error('error', `[Ondc Service] post http select response : `, e);
                return e
            }

            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
                this.buildOrderStatusRequest(orderData, logisticsMessageId, selectMessageId)
            }, 5000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }

    async orderCancel(payload = {}, req = {}) {
        try {
            //const {criteria = {}, payment = {}} = req || {};

            const confirmRequest = await ConfirmRequest.findOne({
                where: {
                    transactionId: payload.context.transaction_id,
                    retailOrderId: payload.message.order_id
                }
            })

            const logistics = confirmRequest.selectedLogistics;

            //const order = payload.message.order;
            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

            const trackRequest = {
                "context": {
                    "domain": "nic2004:60232",
                    "action": "cancel",
                    "core_version": "1.1.0",
                    "bap_id": config.get("sellerConfig").BPP_ID,
                    "bap_uri": config.get("sellerConfig").BPP_URI,
                    "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                    "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                    "transaction_id": confirmRequest.logisticsTransactionId,
                    "message_id": logisticsMessageId,
                    "city": "std:080",
                    "country": "IND",
                    "timestamp": new Date()
                },
                "message":
                {
                    "order_id": confirmRequest.orderId,
                    "cancellation_reason_id": payload.message.cancellation_reason_id
                }

            }


            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            //setTimeout(() => {
            this.postCancelRequest(trackRequest, logisticsMessageId, selectMessageId)
            //}, 5000); //TODO move to config

            return { status: 'ACK' }
        } catch (err) {
            throw err;
        }
    }

    async postCancelRequest(searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            try {

                let headers = {};
                let httpRequest = new HttpRequest(
                    config.get("sellerConfig").BPP_URI,
                    `/protocol/logistics/v1/cancel`,
                    'POST',
                    searchRequest,
                    headers
                );


                await httpRequest.send();

            } catch (e) {
                logger.error('error', `[Ondc Service] post http select response : `, e);
                return e
            }

            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
                this.buildCancelRequest(logisticsMessageId, selectMessageId)
            }, 10000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }
    async postSellerCancelRequest(cancelData, cancelRequest, logisticsMessageId, selectMessageId, logistic = false) {

        try {
            await logisticsService.postCancelRequest(searchRequest, logisticsMessageId, selectMessageId)
            return await Promise.all([
                this.buildSellerCancelRequest(logisticsMessageId, selectMessageId),
                this.timeout(5000)
            ]);
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }
    async buildStatusRequest(statusRequest, logisticsMessageId, initMessageId, unsoliciated, payload) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'status')

            //2. if data present then build select response

            console.log("statusRequest-----build>", statusRequest);
            let statusResponse = await productService.productStatus(logisticsResponse, statusRequest, unsoliciated, payload)

            //3. post to protocol layer
            await this.postStatusResponse(statusResponse);

        } catch (e) {
            console.log(e)
            return e
        }
    }
    async buildUpdateRequest(statusRequest, logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'update')

            //2. if data present then build select response

            let statusResponse = await productService.productUpdate(logisticsResponse)

            //3. post to protocol layer
            await this.postUpdateResponse(statusResponse);

        } catch (e) {
            console.log(e)
            return e
        }
    }

    async buildUpdateItemRequest(statusRequest, logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'update')

            //2. if data present then build select response

            let statusResponse = await productService.productUpdateItem(statusRequest, logisticsResponse)

            //3. post to protocol layer
            await this.postUpdateResponse(statusResponse);

        } catch (e) {
            console.log(e)
            return e
        }
    }

    async buildItemUpdate(statusRequest) {

        try {
            const org = await productService.getOrgForOndc(statusRequest.organization)

            let category = domainNameSpace.find((cat) => {
                return cat.name === statusRequest.productCategory
            })
            let context = {
                "domain": category.domain,
                "country": "IND",
                "city": "std:080",
                "action": "on_search",
                "core_version": "1.2.0",
                "bap_id": "ref-app-buyer-dev-internal.ondc.org",
                "bap_uri": "https://ref-app-buyer-dev-internal.ondc.org/protocol/v1",
                "bpp_uri": "https://ref-app-seller-dev-internal.ondc.org",
                "transaction_id": "323e2894-82b9-4577-bf7a-19bd85a5dcdf",
                "message_id": "bf1104c9-0ad3-4bcf-b45d-d74c38ea4764",
                "timestamp": new Date(),
                "bpp_id": "ref-app-seller-dev-internal.ondc.org",
                "ttl": "PT30S"
            }
            let data = {
                products: [{ ...org.providerDetail, items: [statusRequest] }],
                customMenu: [],
            }
            let productSchema = await getProductUpdate({ data, context });
            await this.postItemUpdateRequest(productSchema);

        } catch (e) {
            console.log(e)
            return e
        }
    }

    async buildOrderStatusRequest(statusRequest, logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'update')
            //2. if data present then build select response

            let statusResponse = await productService.productOrderStatus(logisticsResponse, statusRequest)

            //3. post to protocol layer
            await this.postStatusResponse(statusResponse);

        } catch (e) {
            console.log(e)
            return e
        }
    }


    async buildCancelRequest(logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'cancel')
            //2. if data present then build select response

            let statusResponse = await productService.productCancel(logisticsResponse)

            //3. post to protocol layer
            await this.postCancelResponse(statusResponse);

        } catch (e) {
            console.log(e)
            return e
        }
    }

    async buildSellerCancelRequest(cancelData, logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'cancel')
            //2. if data present then build select response
            return logisticsResponse;

        } catch (e) {
            console.log(e)
            return e
        }
    }


    //return track response to protocol layer
    async postStatusResponse(statusResponse) {
        try {

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_status`,
                'POST',
                statusResponse,
                headers
            );

            console.log(httpRequest)

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            return e
        }

    }

    //return track response to protocol layer
    async postUpdateResponse(statusResponse) {
        try {

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_update`,
                'POST',
                statusResponse,
                headers
            );

            console.log(httpRequest)

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            return e
        }

    }

    //return track response to protocol layer
    async postItemUpdateRequest(statusResponse) {
        try {
            console.log('itemdata------------------------------------------>')
            console.log({ itemdata: statusResponse })
            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_search`,
                'POST',
                statusResponse,
                headers
            );

            console.log(httpRequest)

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            return e
        }

    }

    //return track response to protocol layer
    async postCancelResponse(statusResponse) {
        try {

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_cancel`,
                'POST',
                statusResponse,
                headers
            );

            console.log(httpRequest)

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            return e
        }

    }


    //return track response to protocol layer
    async postSellerCancelResponse(statusResponse) {
        try {

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_cancel`,
                'POST',
                statusResponse,
                headers
            );

            let result = await httpRequest.send();
            return result.data

        } catch (e) {
            return e
        }

    }

    async orderSupport(payload = {}, req = {}) {
        try {
            //const {criteria = {}, payment = {}} = req || {};

            const selectRequest = await ConfirmRequest.findOne({
                where: {
                    transactionId: payload.message.ref_id
                }
            })

            const logistics = selectRequest.selectedLogistics;

            const selectMessageId = payload.context.message_id;
            const logisticsMessageId = uuidv4(); //TODO: in future this is going to be array as packaging for single select request can be more than one

            const trackRequest = {
                "context": {
                    "domain": "nic2004:60232",
                    "action": "support",
                    "core_version": "1.1.0",
                    "bap_id": config.get("sellerConfig").BPP_ID,
                    "bap_uri": config.get("sellerConfig").BPP_URI,
                    "bpp_id": logistics.context.bpp_id,//STORED OBJECT
                    "bpp_uri": logistics.context.bpp_uri, //STORED OBJECT
                    "transaction_id": selectRequest.logisticsTransactionId,
                    "message_id": logisticsMessageId,
                    "city": "std:080",
                    "country": "IND",
                    "timestamp": new Date()
                },
                "message":
                {
                    "ref_id": selectRequest.transactionId,
                }

            }


            // setTimeout(logisticsService.getLogistics(logisticsMessageId,selectMessageId),3000)
            //setTimeout(() => {
            this.postSupportRequest(trackRequest, logisticsMessageId, selectMessageId)
            //}, 5000); //TODO move to config

            return trackRequest
        } catch (err) {
            throw err;
        }
    }



    async postSupportRequest(searchRequest, logisticsMessageId, selectMessageId) {

        try {
            //1. post http to protocol/logistics/v1/search

            try {

                let headers = {};
                let httpRequest = new HttpRequest(
                    config.get("sellerConfig").BPP_URI,
                    `/protocol/logistics/v1/support`,
                    'POST',
                    searchRequest,
                    headers
                );


                await httpRequest.send();

            } catch (e) {
                logger.error('error', `[Ondc Service] post http select response : `, e);
                return e
            }

            //2. wait async to fetch logistics responses

            //async post request
            setTimeout(() => {
                logger.log('info', `[Ondc Service] search logistics payload - timeout : param :`, searchRequest);
                this.buildSupportRequest(logisticsMessageId, selectMessageId)
            }, 10000); //TODO move to config
        } catch (e) {
            logger.error('error', `[Ondc Service] post http select response : `, e);
            return e
        }
    }
    async buildSupportRequest(logisticsMessageId, initMessageId) {

        try {
            //1. look up for logistics
            let logisticsResponse = await logisticsService.getLogistics(logisticsMessageId, initMessageId, 'support')
            //2. if data present then build select response

            let selectResponse = await productService.productSupport(logisticsResponse)

            //3. post to protocol layer
            await this.postSupportResponse(selectResponse);

        } catch (e) {
            console.log(e)
            return e
        }
    }



    //return track response to protocol layer
    async postSupportResponse(trackResponse) {
        try {

            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/on_support`,
                'POST',
                trackResponse,
                headers
            );

            console.log(httpRequest)

            let result = await httpRequest.send();

            return result.data

        } catch (e) {
            return e
        }

    }


    async notifyStoreUpdate(data) {
        if (data?.storeTiming?.status === 'closed' || data?.storeTiming?.status === 'disabled') {
            let category = domainNameSpace.find((cat) => {
                return cat.name === data.category
            })
            let time = {}
            if (data.updateType === 'closed') {
                time = {
                    "label": "close",
                    "timestamp": new Date(),
                    "range":
                    {
                        "start": data?.storeTiming?.colsed?.from,
                        "end": data?.storeTiming?.colsed?.to
                    }
                }
            } else if (data.updateType === 'disabled') {
                time = {
                    "label": "disable",
                    "timestamp": new Date()
                }
            }
            let payload = {
                "context":
                {
                    "domain": category.domain,
                    "action": "on_search",
                    "country": "IND",
                    "city": "std:080",
                    "core_version": "1.2.0",
                    "bap_id": "ref-app-buyer-dev-internal.ondc.org",
                    "bap_uri": "https://ref-app-buyer-dev-internal.ondc.org/protocol/v1",
                    "bpp_uri": "https://ref-app-seller-dev-internal.ondc.org",
                    "transaction_id": "323e2894-82b9-4577-bf7a-19bd85a5dcdf",
                    "message_id": "bf1104c9-0ad3-4bcf-b45d-d74c38ea4764",
                    "timestamp": new Date(),
                    "ttl": "PT30S"
                },
                "message":
                {
                    "catalog":
                    {
                        "bpp/providers":
                            [
                                {
                                    "id": data.organization,
                                    "locations":
                                        [
                                            {
                                                "id": data.locationId,
                                                "time": time
                                            }
                                        ]
                                }
                            ]
                    }
                }
            }
            this.postItemUpdateRequest(payload);
        }
        return { success: true };
    }

    async notifyOrgUpdate(data) {
        let category = domainNameSpace.find((cat) => {
            return cat.name === data.category
        })
        let payload = {
            "context":
            {
                "domain": category.domain,
                "action": "on_search",
                "country": "IND",
                "city": "std:080",
                "core_version": "1.2.0",
                "bap_id": "ref-app-buyer-dev-internal.ondc.org",
                "bap_uri": "https://ref-app-buyer-dev-internal.ondc.org/protocol/v1",
                "bpp_uri": "https://ref-app-seller-dev-internal.ondc.org",
                "transaction_id": "323e2894-82b9-4577-bf7a-19bd85a5dcdf",
                "message_id": "bf1104c9-0ad3-4bcf-b45d-d74c38ea4764",
                "timestamp": new Date(),
                "ttl": "PT30S"
            },
            "message":
            {
                "catalog":
                {
                    "bpp/providers":
                        [
                            {
                                "id": data.organization,
                                "time":
                                {
                                    "label": "disable",
                                    "timestamp": new Date()
                                }
                            }
                        ]
                }
            }
        }
        this.postItemUpdateRequest(payload);
        return { success: true };
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default OndcService;
