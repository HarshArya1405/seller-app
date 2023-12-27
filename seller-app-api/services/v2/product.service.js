import { v4 as uuidv4 } from 'uuid';
import HttpRequest from '../../utils/HttpRequest';
import { getProducts, getUpdate, getProductUpdate, getSelect, getInit, getConfirm, getTrack, getSupport, getStatus, getCancel } from "../../utils/v2/schemaMapping";
import { domainNameSpace } from "../../utils/constants";
import { ConfirmRequest, InitRequest, SelectRequest, SearchRequest } from "../../models";
import logger from "../../lib/logger";

var config = require('../../lib/config');
const serverUrl = config.get("seller").serverUrl
const BPP_ID = config.get("sellerConfig").BPP_ID
const BPP_URI = config.get("sellerConfig").BPP_URI

class ProductService {

    async list() {

        let headers = {};
        let httpRequest = new HttpRequest(
            serverUrl,
            '/api/v1/products/search',
            'get',
            {},
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }

    async search(requestQuery) {

        try {
            // const catalogIncTags = requestQuery?.message.intent;
            // let catalogInc;
            // console.log({catalogIncTags})

            // if(catalogIncTags && catalogIncTags.length  > 0){
            //     catalogInc = catalogIncTags.map((catalogIncTag)=>{
            //         if(catalogIncTag.code === 'catalog_inc'){
            //             return catalogIncTag;
            //         }
            //     })
            // } 
            // console.log({catalogInc})
            // if(catalogInc){
            //     let searchRequest = new SearchRequest()
            //     searchRequest.transactionId = requestQuery.context.transaction_id;
            //     searchRequest.messageId = requestQuery.context.message_id;
            //     searchRequest.domain = requestQuery.context.domain;
            //     searchRequest.bapId = requestQuery.context.bap_id;
            //     searchRequest.onSearchResponse = requestQuery;
            //     await searchRequest.save();
            //     console.log({searchRequest})
            // }



            //get search criteria
            const searchProduct = requestQuery.message.intent.item?.descriptor?.name ?? "";
            const searchCategory = requestQuery.message.intent.category?.descriptor?.id ?? ""

            let headers = {};

            /*TODO:
            1. Get product based on category and subcategory
            2. Maintain context for v1.2.0
            3. handle heavy responses for catalog  - Paginated on_search responses
            4. Check if request is coming for catalogue pull if yes maintain message id and request -
            if we get request for stop then discard further on_search
            5. provider specific multiple on_search
            * */

            console.log("Search Request Payload ---=============>", JSON.stringify(requestQuery));
            // requestQuery.context.domain = 'ONDC:RET12'; //FIXME: remove this once
            let category = domainNameSpace.find((cat) => {
                return cat.domain === requestQuery.context.domain
            })

            if (!category) {
                category = {
                    "name": "Electronics",
                    "domain": "ONDC:RET14"
                };
                requestQuery.context.domain = 'ONDC:RET14';
            }


            let httpRequest = new HttpRequest(
                serverUrl,
                `/api/v1/products/search/increamentalPull/${category.name}`, //TODO: allow $like query
                'get',
                headers
            );

            let result = await httpRequest.send();

            logger.log('info', `[Product Service] search product : result :`, result.data);

            const productData = {} = await getProducts({ data: result.data, context: requestQuery.context }); //should return org specific array of responses

            // logger.log('info', `[Product Service]0search product transformed: result :`, productData);

            console.log("On_Search Response Payload ---=============>", JSON.stringify(productData));

            return productData
        } catch (e) {
            console.log(e)
        }

    }



    async select(requestQuery) {

        logger.log('info', `[Product Service] product select :`, requestQuery);

        //get search criteria
        const selectData = requestQuery.retail_select
        const items = selectData.message.order.items
        const logisticData = requestQuery.logistics_on_search

        let qouteItems = []
        let detailedQoute = []
        let totalPrice = 0
        for (let item of items) {
            let headers = {};

            let qouteItemsDetails = {}
            let httpRequest = new HttpRequest(
                serverUrl,
                `/api/products/${item.id}`,
                'get',
                {},
                headers
            );

            let result = await httpRequest.send();

            if (result?.data?.data.attributes) {

                let price = result?.data?.data?.attributes?.price * item.quantity.count
                totalPrice += price
                item.price = { value: price, currency: "INR" }
            }

            //TODO: check if quantity is available

            qouteItemsDetails = {
                "@ondc/org/item_id": item.id,
                "@ondc/org/item_quantity": {
                    "count": item.quantity.count
                },
                "title": result?.data?.data?.attributes?.name,
                "@ondc/org/title_type": "item",
                "price": item.price
            }

            qouteItems.push(item)
            detailedQoute.push(qouteItemsDetails)
        }

        logger.log('info', `[Product Service] checking if logistics provider available from :`, logisticData);

        let logisticProvider = {}
        for (let logisticData1 of logisticData) { //check if any logistics available who is serviceable

            if (logisticData1.message) {
                logisticProvider = logisticData1
            }
        }

        if (Object.keys(logisticProvider).length === 0) {
            return {
                context: { ...selectData.context, action: 'on_select' }, message: {
                    "type": "CORE-ERROR",
                    "code": "60001",
                    "message": "Pickup not servicable"
                }
            }
        }

        logger.log('info', `[Product Service] logistics provider available  :`, logisticProvider);

        //select logistic based on criteria-> for now first one will be picked up
        let deliveryCharges = {
            "title": "Delivery charges",
            "@ondc/org/title_type": "delivery",
            "price": {
                "currency": '' + logisticProvider.message.catalog["bpp/providers"][0].items[0].price.currency,
                "value": '' + logisticProvider.message.catalog["bpp/providers"][0].items[0].price.value
            }
        }//TODO: need to map all items in the catalog to find out delivery charges

        //added delivery charges in total price
        totalPrice += logisticProvider.message.catalog["bpp/providers"][0].items[0].price.value

        let fulfillments = [
            {
                "id": "Fulfillment1", //TODO: check what needs to go here, ideally it should be item id
                "@ondc/org/provider_name": logisticProvider.message.catalog["bpp/descriptor"],
                "tracking": false,
                "@ondc/org/category": logisticProvider.message.catalog["bpp/providers"][0].category_id,
                "@ondc/org/TAT": "PT48H",
                "provider_id": logisticProvider.context.bpp_id,
                "state":
                {
                    "descriptor":
                    {
                        "name": logisticProvider.message.catalog["bpp/providers"][0].descriptor.name
                    }
                }, end: selectData.message.order.fulfillments[0].end
            }]

        //update fulfillment
        selectData.message.order.fulfillments = fulfillments

        let totalPriceObj = { value: totalPrice, currency: "INR" }

        detailedQoute.push(deliveryCharges);

        const productData = await getSelect({
            qouteItems: qouteItems,
            order: selectData.message.order,
            totalPrice: totalPriceObj,
            detailedQoute: detailedQoute,
            context: selectData.context
        });

        return productData
    }
    //30000	Seller App *  Invalid request error /	Generic invalid request error
    //30001	Seller App *  Provider not found	/ When Seller App is unable to find the provider id sent by the Buyer App
    //30002	Seller App *  Provider location not found /	When Seller App is unable to find the provider location id sent by the Buyer App
    //30004	Seller App *  Item not found /	When Seller App is unable to find the item id sent by the Buyer Ap

    async selectV2(requestQuery) {

        console.log("Select Request Payload ---=============>", JSON.stringify(requestQuery));


        logger.log('info', `[Product Service] product select :`, requestQuery);

        //get search criteria
        const items = requestQuery.message.order.items
        const logisticData = requestQuery?.logistics_on_search ?? []
        let isQtyAvailable = true;
        let isValidOrg = true;
        let isValidItem = true;
        let isServiceable = true;
        let qouteItems = []
        let detailedQoute = []
        let itemType = ''
        let totalPrice = 0
        let resultData;
        let itemData = {};
        let org = await this.getOrgForOndc(requestQuery.message.order.provider.id);

        if (!org) {
            isValidOrg = false;
        }
        for (let item of items) {
            let tags = item.tags;
            if (tags && tags.length > 0) {
                let tagData = tags.find((tag) => { return tag.code === 'type' })
                if (tagData?.list && tagData?.list.length > 0) {
                    let tagTypeData = tagData.list.find((tagType) => { return tagType.code === 'type' })
                    itemType = tagTypeData.value;
                    if (itemType === 'customization') {
                        resultData = itemData?.customizationDetails?.customizations.find((row) => {
                            return row._id === item.id
                        })
                        if (resultData) {
                            if (resultData.maximum < item.quantity.count) {
                                isQtyAvailable = false
                            }
                            let qouteItemsDetails = {
                                "@ondc/org/item_id": item.id,
                                "@ondc/org/item_quantity": {
                                    "count": item.quantity.count
                                },
                                "title": resultData?.name,
                                "@ondc/org/title_type": "item",
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.price}`
                                },
                                "item":
                                {
                                    "quantity":
                                    {
                                        "available":
                                        {
                                            "count": `${resultData?.available}`
                                        },
                                        "maximum":
                                        {
                                            "count": `${resultData?.available}`
                                        }
                                    },
                                    "price":
                                    {
                                        "currency": "INR",
                                        "value": `${resultData?.price}`
                                    },
                                    "tags": item.tags
                                }
                            }
                            if (item?.parent_item_id) {
                                qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                            }
                            detailedQoute.push(qouteItemsDetails)
                        } else {
                            isValidItem = false;
                        }
                    } else {
                        resultData = await this.getForOndc(item.id)
                        if (Object.keys(resultData).length > 0) {
                            if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                                isQtyAvailable = false
                            }
                            itemData = resultData;
                            if (resultData?.commonDetails) {
                                let price = resultData?.commonDetails?.MRP * item.quantity.count
                                totalPrice += price
                            }

                            //TODO: check if quantity is available

                            let qouteItemsDetails = {
                                "@ondc/org/item_id": item.id,
                                "@ondc/org/item_quantity": {
                                    "count": item.quantity.count
                                },
                                "title": resultData?.commonDetails?.productName,
                                "@ondc/org/title_type": "item",
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.commonDetails?.MRP}`
                                },
                                "item":
                                {
                                    "quantity":
                                    {
                                        "available":
                                        {
                                            "count": `${resultData?.commonDetails?.quantity}`
                                        },
                                        "maximum":
                                        {
                                            "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                        }
                                    },
                                    "price":
                                    {
                                        "currency": "INR",
                                        "value": `${resultData?.commonDetails?.MRP}`
                                    },
                                    "tags": item.tags
                                }
                            }
                            if (item?.parent_item_id) {
                                qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                            }
                            detailedQoute.push(qouteItemsDetails)
                        } else {
                            console.log({ item: item.id })
                            isValidItem = false;
                        }
                    }
                }
                else {
                    resultData = await this.getForOndc(item.id)
                    if (Object.keys(resultData).length > 0) {
                        if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        itemData = resultData;
                        if (resultData?.commonDetails) {
                            let price = resultData?.commonDetails?.MRP * item.quantity.count
                            totalPrice += price
                        }

                        //TODO: check if quantity is available

                        let qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.commonDetails?.productName,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.commonDetails?.quantity}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.commonDetails?.MRP}`
                                }
                            }
                        }
                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }
                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        console.log({ item: item.id })
                        isValidItem = false;
                    }
                }
            } else {
                resultData = await this.getForOndc(item.id)
                if (Object.keys(resultData).length > 0) {
                    if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                        isQtyAvailable = false
                    }
                    itemData = resultData;
                    if (resultData?.commonDetails) {
                        let price = resultData?.commonDetails?.MRP * item.quantity.count
                        totalPrice += price
                    }

                    //TODO: check if quantity is available

                    let qouteItemsDetails = {
                        "@ondc/org/item_id": item.id,
                        "@ondc/org/item_quantity": {
                            "count": item.quantity.count
                        },
                        "title": resultData?.commonDetails?.productName,
                        "@ondc/org/title_type": "item",
                        "price":
                        {
                            "currency": "INR",
                            "value": `${resultData?.commonDetails?.MRP}`
                        },
                        "item":
                        {
                            "quantity":
                            {
                                "available":
                                {
                                    "count": `${resultData?.commonDetails?.quantity}`
                                },
                                "maximum":
                                {
                                    "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                }
                            },
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            }
                        }
                    }
                    if (item?.parent_item_id) {
                        qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                    }
                    detailedQoute.push(qouteItemsDetails)
                } else {
                    isValidItem = false;
                    console.log({ item: item.id })
                }
            }
            item.fulfillment_id = "Fulfillment1" //TODO static for now
            delete item.location_id
            delete item.quantity
            qouteItems.push(item)
        }

        logger.log('info', `[Product Service] checking if logistics provider available from :`, logisticData);

        let logisticProvider = {}
        for (let logisticData1 of logisticData) { //check if any logistics available who is serviceable

            if (logisticData1.message) {
                logisticProvider = logisticData1
            }
        }

        // if (Object.keys(logisticProvider).length === 0  ) {
        //     return {context: {...requestQuery.context,action:'on_select'},message:{
        //         "type": "CORE-ERROR",
        //         "code": "60001",
        //         "message": "Pickup not servicable"
        //     }}
        // }

        logger.log('info', `[Product Service] logistics provider available  :`, logisticProvider);

        //select logistic based on criteria-> for now first one will be picked up
        let deliveryCharges = {
            "@ondc/org/item_id": "Fulfillment1",
            "title": "Delivery charges",
            "@ondc/org/title_type": "delivery",
            "price": {
                "currency": `${logisticProvider?.message?.catalog["bpp/providers"][0]?.items[0]?.price?.currency ?? 'INR'}`, //todo hardcoded,
                "value": `${logisticProvider?.message?.catalog["bpp/providers"][0]?.items[0]?.price?.value ?? '0'}` //todo hardcoded
            }
        }//TODO: need to map all items in the catalog to find out delivery charges

        //added delivery charges in total price
        totalPrice += logisticProvider?.message?.catalog["bpp/providers"][0]?.items[0]?.price?.value ?? 0 //todo hardcoded
        let fulfillments = [
            {
                "id": "Fulfillment1", //TODO: check what needs to go here, ideally it should be item id
                "@ondc/org/provider_name": logisticProvider?.message?.catalog["bpp/descriptor"] ?? org?.providerDetail?.name,
                "tracking": false,
                "@ondc/org/category": logisticProvider?.message?.catalog["bpp/providers"][0]?.category_id ?? 'Standard Delivery',
                "@ondc/org/TAT": "PT48H",
                "state":
                {
                    "descriptor":
                    {
                        "code": logisticProvider?.message?.catalog["bpp/providers"][0]?.descriptor?.name ?? 'Serviceable' //TODO static for now
                    }
                }
            }]

        //update fulfillment
        requestQuery.message.order.fulfillments = fulfillments

        let totalPriceObj = { value: "" + totalPrice, currency: "INR" }

        detailedQoute.push(deliveryCharges);

        const productData = await getSelect({
            qouteItems: qouteItems,
            order: requestQuery.message.order,
            totalPrice: totalPriceObj,
            detailedQoute: detailedQoute,
            context: requestQuery.context,
            isQtyAvailable,
            isServiceable,
            isValidItem,
            isValidOrg
        });

        console.log("On_Select Response Payload ---=============>", JSON.stringify(productData));

        return productData

    }

    async init(requestQuery) {

        //get search criteria
        const items = requestQuery.message.order.items

        let qouteItems = []
        let detailedQoute = []
        let totalPrice = 0
        for (let item of items) {
            let headers = {};

            let qouteItemsDetails = {}
            let httpRequest = new HttpRequest(
                serverUrl,
                `/api/products/${item.id}`,
                'get',
                {},
                headers
            );

            let result = await httpRequest.send();

            if (result?.data?.data.attributes) {

                let price = result?.data?.data?.attributes?.price * item.quantity.count
                totalPrice += price
                item.price = { value: price, currency: "INR" }
            }

            qouteItemsDetails = {
                "@ondc/org/item_id": item.id,
                "@ondc/org/item_quantity": {
                    "count": item.quantity.count
                },
                "title": result?.data?.data?.attributes?.name,
                "@ondc/org/title_type": "item",
                "price": item.price
            }

            qouteItems.push(item)
            detailedQoute.push(qouteItemsDetails)
        }

        let deliveryCharges = {
            "title": "Delivery charges",
            "@ondc/org/title_type": "delivery",
            "price": {
                "currency": "INR",
                "value": "0"
            }
        }

        let totalPriceObj = { value: totalPrice, currency: "INR" }

        detailedQoute.push(deliveryCharges);

        const productData = await getInit({
            qouteItems: qouteItems,
            totalPrice: totalPriceObj,
            detailedQoute: detailedQoute,
            context: requestQuery.context,
            message: requestQuery.message
        });


        return productData
    }

    async initV2(requestQuery) {

        console.log("Init Request Payload ---=============>", JSON.stringify(requestQuery));

        //get search criteria
        const items = requestQuery.message.order.items

        let qouteItems = []
        let itemType = ''
        let detailedQoute = []
        let totalPrice = 0
        let resultData = {}
        let itemData = {}
        let isQtyAvailable = true

        let org = await this.getOrgForOndc(requestQuery.message.order.provider.id);
        for (let item of items) {
            let tags = item.tags;
            if (tags && tags.length > 0) {
                let tagData = tags.find((tag) => { return tag.code === 'type' })
                let tagTypeData = tagData.list.find((tagType) => { return tagType.code === 'type' })
                itemType = tagTypeData.value;
                if (itemType === 'customization') {
                    resultData = itemData?.customizationDetails?.customizations.find((row) => {
                        return row._id === item.id
                    })
                    if (resultData) {
                        console.log({ custqty: resultData.maximum })
                        if (resultData.maximum < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        let qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.name,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.price}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.available}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.available}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.price}`
                                },
                                "tags": item.tags
                            }
                        }
                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }
                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        isValidItem = false;
                    }
                } else {
                    resultData = await this.getForOndc(item.id)
                    if (Object.keys(resultData).length > 0) {

                        if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        itemData = resultData;
                        if (resultData?.commonDetails) {
                            let price = resultData?.commonDetails?.MRP * item.quantity.count
                            totalPrice += price
                        }

                        //TODO: check if quantity is available

                        let qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.commonDetails?.productName,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.commonDetails?.quantity}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.commonDetails?.MRP}`
                                },
                                "tags": item.tags
                            }
                        }
                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }
                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        isValidItem = false;
                    }
                }
            }
            else {
                resultData = await this.getForOndc(item.id)
                if (Object.keys(resultData).length > 0) {
                    if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                        isQtyAvailable = false
                    }
                    itemData = resultData;
                    if (resultData?.commonDetails) {
                        let price = resultData?.commonDetails?.MRP * item.quantity.count
                        totalPrice += price
                    }

                    //TODO: check if quantity is available

                    let qouteItemsDetails = {
                        "@ondc/org/item_id": item.id,
                        "@ondc/org/item_quantity": {
                            "count": item.quantity.count
                        },
                        "title": resultData?.commonDetails?.productName,
                        "@ondc/org/title_type": "item",
                        "price":
                        {
                            "currency": "INR",
                            "value": `${resultData?.commonDetails?.MRP}`
                        },
                        "item":
                        {
                            "quantity":
                            {
                                "available":
                                {
                                    "count": `${resultData?.commonDetails?.quantity}`
                                },
                                "maximum":
                                {
                                    "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                }
                            },
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            }
                        }
                    }
                    if (item?.parent_item_id) {
                        qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                    }
                    detailedQoute.push(qouteItemsDetails)
                } else {
                    isValidItem = false;
                }
            }
            item.fulfillment_id = "Fulfillment1" //TODO static for now
            delete item.location_id
            item.quantity
            qouteItems.push(item)
        }


        let deliveryCharges = {
            "title": "Delivery charges",
            "@ondc/org/title_type": "delivery",
            "price": {
                "currency": "INR",
                "value": "0"
            }
        }

        let totalPriceObj = { value: `${totalPrice}`, currency: "INR" }

        detailedQoute.push(deliveryCharges);
        const paymentData = { //TODO static for now
            "type": "ON-ORDER",
            "collected_by": "BPP",
            "uri": "https://snp.com/pg",
            "status": "NOT-PAID",
            "@ondc/org/buyer_app_finder_fee_type": "percent",
            "@ondc/org/buyer_app_finder_fee_amount": "3",
            "@ondc/org/settlement_basis": "delivery",
            "@ondc/org/settlement_window": "P1D",
            "@ondc/org/withholding_amount": "10.00",
            "@ondc/org/settlement_details":
                [
                    {
                        "settlement_counterparty": "seller-app",
                        "settlement_phase": "sale-amount",
                        "settlement_type": "upi",
                        "beneficiary_name": "xxxxx",
                        "upi_address": "gft@oksbi",
                        "settlement_bank_account_no": "XXXXXXXXXX",
                        "settlement_ifsc_code": "XXXXXXXXX",
                        "bank_name": "xxxx",
                        "branch_name": "xxxx"
                    }
                ]
        };
        const tagData = [ //TODO static for now
            {
                "code": "bpp_terms",
                "list":
                    [
                        {
                            "code": "tax_number",
                            "value": `${org.providerDetail.GSTN.GSTN}`
                        }
                    ]
            }
        ];

        const productData = await getInit({
            qouteItems: qouteItems,
            totalPrice: totalPriceObj,
            detailedQoute: detailedQoute,
            context: requestQuery.context,
            message: requestQuery.message,
            payment: paymentData,
            tags: tagData
        });

        console.log("On_Init Response Payload ---=============>", JSON.stringify(productData));


        let fulfillments = requestQuery.message.order.fulfillments
        fulfillments = fulfillments.map((fulfillment) => {
            fulfillment.tracking = false  //TODO : static for now
        })

        return productData
    }

    async confirm(requestQuery) {

        const items = requestQuery.message.order.items

        let qouteItems = []
        let detailedQoute = []
        let totalPrice = 0
        for (let item of items) {
            let headers = {};

            let qouteItemsDetails = {}
            let httpRequest = new HttpRequest(
                serverUrl,
                `/api/products/${item.id}`,
                'get',
                {},
                headers
            );

            let result = await httpRequest.send();

            if (result?.data?.data.attributes) {

                let price = result?.data?.data?.attributes?.price * item.quantity.count
                totalPrice += price
                item.price = { value: price, currency: "INR" }
            }

            qouteItemsDetails = {
                "@ondc/org/item_id": item.id,
                "@ondc/org/item_quantity": {
                    "count": item.quantity.count
                },
                "title": result?.data?.data?.attributes?.name,
                "@ondc/org/title_type": "item",
                "price": item.price
            }

            qouteItems.push(item)
            detailedQoute.push(qouteItemsDetails)
        }

        let deliveryCharges = {
            "title": "Delivery charges",
            "@ondc/org/title_type": "delivery",
            "price": {
                "currency": "INR",
                "value": "0"
            }
        }

        let totalPriceObj = { value: totalPrice, currency: "INR" }

        detailedQoute.push(deliveryCharges);

        let headers = {};

        let confirmData = requestQuery.message.order

        let orderItems = []
        // let confirmData = requestQuery.message.order
        for (let item of confirmData.items) {

            let productItems = {
                product: item.id,
                status: 'Created',
                qty: item.quantity.count

            }
            let httpRequest = new HttpRequest(
                serverUrl,
                `/api/order-items`,
                'POST',
                { data: productItems },
                headers
            );
            let result = await httpRequest.send();
            orderItems.push(result.data.data.id);
        }


        confirmData["order_items"] = orderItems
        confirmData.order_id = confirmData.id
        delete confirmData.id


        let confirm = {}
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/orders`,
            'POST',
            { data: confirmData },
            headers
        );

        let result = await httpRequest.send();

        const productData = await getConfirm({
            qouteItems: qouteItems,
            totalPrice: totalPriceObj,
            detailedQoute: detailedQoute,
            context: requestQuery.context,
            message: requestQuery.message
        });

        return productData
    }

    async confirmV2(requestQuery) {

        console.log("Confirm Request Payload ---=============>", JSON.stringify(requestQuery));
        const items = requestQuery.message.order.items
        console.log("Confirm Request items ---=============>", JSON.stringify(items));


        let isQtyAvailable = true;
        let isValidOrg = true;
        let isValidItem = true;
        let isServiceable = true;
        let qouteItems = []
        let detailedQoute = []
        let itemType = ''
        let resultData;
        let itemData = {};
        let totalPrice = 0
        for (let item of items) {
            let tags = item.tags;
            if (tags && tags.length > 0) {
                let tagData = tags.find((tag) => { return tag.code === 'type' })
                let tagTypeData = tagData.list.find((tagType) => { return tagType.code === 'type' })
                itemType = tagTypeData.value;
                if (itemType === 'customization') {
                    resultData = itemData?.customizationDetails?.customizations.find((row) => {
                        return row._id === item.id
                    })
                    if (resultData) {
                        if (resultData.maximum < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        let qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.name,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.price}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.available}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.available}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.price}`
                                },
                                "tags": item.tags
                            }

                        }
                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }
                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        isValidItem = false;
                    }
                } else {
                    resultData = await this.getForOndc(item.id)
                    if (Object.keys(resultData).length > 0) {
                        if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        itemData = resultData;
                        if (resultData?.commonDetails) {
                            let price = resultData?.commonDetails?.MRP * item.quantity.count
                            totalPrice += price
                        }

                        //TODO: check if quantity is available

                        let qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.commonDetails?.productName,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.commonDetails?.quantity}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.commonDetails?.MRP}`
                                },
                                "tags": item.tags
                            }
                        }
                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }
                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        isValidItem = false;
                    }
                }
                item.fulfillment_id = "Fulfillment1" //TODO static for now
                delete item.location_id
                item.quantity
                qouteItems.push(item)
            } else {
                resultData = await this.getForOndc(item.id)
                if (Object.keys(resultData).length > 0) {
                    if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                        isQtyAvailable = false
                    }
                    itemData = resultData;
                    if (resultData?.commonDetails) {
                        let price = resultData?.commonDetails?.MRP * item.quantity.count
                        totalPrice += price
                    }

                    //TODO: check if quantity is available

                    let qouteItemsDetails = {
                        "@ondc/org/item_id": item.id,
                        "@ondc/org/item_quantity": {
                            "count": item.quantity.count
                        },
                        "title": resultData?.commonDetails?.productName,
                        "@ondc/org/title_type": "item",
                        "price":
                        {
                            "currency": "INR",
                            "value": `${resultData?.commonDetails?.MRP}`
                        },
                        "item":
                        {
                            "quantity":
                            {
                                "available":
                                {
                                    "count": `${resultData?.commonDetails?.quantity}`
                                },
                                "maximum":
                                {
                                    "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                }
                            },
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            }
                        }
                    }
                    if (item?.parent_item_id) {
                        qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                    }
                    item.fulfillment_id = "Fulfillment1" //TODO static for now
                    delete item.location_id
                    qouteItems.push(item)
                    detailedQoute.push(qouteItemsDetails)
                } else {
                    isValidItem = false;
                }
            }
        }

        let deliveryCharges = {
            "title": "Delivery charges",
            "@ondc/org/title_type": "delivery",
            "price": {
                "currency": "INR",
                "value": "0"
            }
        }

        let totalPriceObj = { value: totalPrice, currency: "INR" }

        detailedQoute.push(deliveryCharges);

        let headers = {};

        let confirmData = requestQuery.message.order

        let orderItems = []
        confirmData["order_items"] = orderItems
        confirmData.order_id = confirmData.id
        //delete confirmData.id
        let org = await this.getOrgForOndc(requestQuery.message.order.provider.id);
        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const fulfillments =
            [
                {
                    "id": requestQuery.message.order.fulfillments[0].id,
                    "@ondc/org/provider_name": org.providerDetail.name,
                    "state":
                    {
                        "descriptor":
                        {
                            "code": "Pending"
                        }
                    },
                    "type": "Delivery",
                    "tracking": false,
                    "start":
                    {
                        "location":
                        {
                            "id": org?.providerDetail?.storeDetails?._id ?? 'NA',
                            "descriptor":
                            {
                                "name": org.providerDetail.name
                            },
                            "gps": `${org?.providerDetail?.storeDetails?.latitude ?? 'NA'},${org?.providerDetail?.storeDetails?.longitude ?? 'NA'}`,
                            "address": org.providerDetail.storeDetails.address
                        },
                        "time":
                        {
                            "range":
                            {
                                "start": new Date(),
                                "end": new Date()
                            }
                        },
                        "instructions":
                        {
                            "code": "2",
                            "name": "ONDC order",
                            "short_desc": "value of PCC",
                            "long_desc": "additional instructions such as register or counter no for self-pickup"
                        },
                        "contact": requestQuery.message.order.fulfillments[0].end.contact
                    },
                    "end":
                    {
                        "person": requestQuery.message.order.fulfillments[0].end.person,
                        "contact": requestQuery.message.order.fulfillments[0].end.contact,
                        "location": requestQuery.message.order.fulfillments[0].end.location,
                        "time":
                        {
                            "range":
                            {
                                "start": today, //TODO : static data for now
                                "end": tomorrow//TODO : static data for now
                            }
                        },
                        "instructions"://TODO : static data for now
                        {
                            "name": "Status for drop",
                            "short_desc": "Delivery Confirmation Code"
                        },

                    },
                    "rateable": true
                }
            ];

        requestQuery.message.provider = { ...requestQuery.message.provider, "rateable": true }
        const orderData = {
            billing: requestQuery?.message?.order?.billing ?? {},
            items: requestQuery?.message?.order?.items ?? [],
            transactionId: requestQuery?.context?.transaction_id ?? '',
            quote: requestQuery?.message?.order?.quote ?? {},
            fulfillments: requestQuery?.message?.order?.fulfillments ?? [],
            payment: requestQuery?.message?.order?.payment ?? {},
            state: requestQuery?.message?.order?.state ?? '',
            orderId: requestQuery?.message?.order?.id ?? '',
            cancellation_reason_id: requestQuery?.message?.order?.cancellation_reason_id ?? '',
            organization: requestQuery?.message?.order?.provider?.id ?? '',
        };
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders`,
            'POST',
            { data: orderData },
            headers
        );
        await httpRequest.send();

        const productData = await getConfirm({
            qouteItems: qouteItems,
            totalPrice: totalPriceObj,
            detailedQoute: detailedQoute,
            context: requestQuery.context,
            message: requestQuery.message,
            fulfillments: fulfillments,
            tags: requestQuery.message.order.tags
        });

        console.log("On_Confirm Response Payload ---=============>", JSON.stringify(productData));


        return productData
    }

    async get(id) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        return 0 / 3;

        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/products/${id}`,
            'get',
            {},
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }

    async getForOndc(id) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/products/${id}/ondcGet`,
            'get',
            {},
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }

    async ondcGetForUpdate(id) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/products/${id}/ondcGetForUpdate`,
            'get',
            {},
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }
    async getOrgForOndc(id) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/organizations/${id}/ondcGet`,
            'get',
            {},
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }

    async orderList(id) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/orders?populate[0]=order_items&populate[1]=order_items.product`,
            'get',
            {},
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }

    async getOrderById(id) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/orders/${id}?populate[0]=order_items&populate[1]=order_items.product`,
            'get',
            {},
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }

    async update(data, id) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        console.log(data)
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/products/${id}`,
            'put',
            { data: data },
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }

    async create(data) {

        let headers = {};
        // headers['Authorization'] = `Bearer ${strapiAccessToken}`;

        console.log(data);

        let httpRequest = new HttpRequest(
            serverUrl,
            '/api/products',
            'post',
            { data },
            headers
        );

        let result = await httpRequest.send();

        return result.data
    }


    async productTrack(requestQuery) {

        const trackRequest = requestQuery.retail_track[0]//select first select request
        const logisticData = requestQuery.logistics_on_track[0]
        const productData = await getTrack({
            context: trackRequest.context,
            logisticData: logisticData
        });

        return productData
    }

    async productStatus(requestQuery, statusRequest = {}, unsoliciated, payload) {

        if (!unsoliciated) {
            console.log("in eif")
            statusRequest = requestQuery.retail_status[0];//select first select request
        } else {
            console.log("in else")
            statusRequest = payload;

        }

        console.log("statusRequest---->", statusRequest.context)

        const logisticData = requestQuery.logistics_on_status[0]

        let confirm = {}
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${statusRequest.message.order_id}/ondcGet`,
            'GET',
            {},
            {}
        );

        let result = await httpRequest.send();

        let updateOrder = result.data

        if (logisticData.message.order.fulfillments[0].state?.descriptor?.code === 'Pending') {
            updateOrder.state = 'Created'
        } else {
            updateOrder.state = logisticData.message.order.state
        }

        //updateOrder.state =logisticData.message.order.state

        updateOrder.fulfillments[0].state = logisticData.message.order.fulfillments[0].state

        //update order level state
        httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${result.data._id}/ondcUpdate`,
            'PUT',
            { data: updateOrder },
            {}
        );

        let updateResult = await httpRequest.send();

        //update item level fulfillment status
        let items = updateOrder.items.map((item) => {
            if (item.state == 'Cancelled') {
                item.tags = { status: 'Cancelled' };
            }
            // item.tags={status:logisticData.message.order.fulfillments[0].state?.descriptor?.code};
            item.fulfillment_id = logisticData.message.order.fulfillments[0].id
            delete item.state
            return item;
        });

        console.log("items----->", items);
        console.log("items----->", items);
        updateOrder.items = items;
        updateOrder.order_id = updateOrder.orderId;

        const productData = await getStatus({
            context: statusRequest.context,
            updateOrder: updateOrder
        });

        return productData
    }

    async productStatusWithoutLogistics(payload) {

        let statusRequest = payload;


        console.log("statusRequest---->", statusRequest.context)

        let confirm = {}
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${statusRequest.message.order_id}/ondcGet`,
            'GET',
            {},
            {}
        );

        let result = await httpRequest.send();

        let updateOrder = result.data

        updateOrder.state = 'Created'

        const productData = await getStatus({
            context: statusRequest.context,
            updateOrder: updateOrder
        });

        return productData
    }

    async productUpdate(requestQuery) {

        const statusRequest = requestQuery.retail_update[0]//select first select request
        const logisticData = requestQuery.logistics_on_update[0]

        let confirm = {}
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${statusRequest.message.order.id}/ondcGet`,
            'GET',
            {},
            {}
        );

        let result = await httpRequest.send();

        let updateOrder = result.data

        let updatedItems = []
        for (let item of updateOrder.items) {
            let updateItem = statusRequest.message.order.items.find((itemObj) => { return itemObj.id === item.id });

            if (updateItem?.tags?.update_type === 'cancel') {
                item.state = "Cancelled";
                item.reason_code = updateItem.tags.reason_code;
            }
            if (updateItem?.tags?.update_type === 'return') {
                item.state = "Return_Initiated";
                item.reason_code = updateItem.tags.reason_code;
                //item.quantity=updateItem.quantity.count
            }
            updatedItems.push(item);
        }

        updateOrder.items = updatedItems;

        console.log("updatedItems--->", updatedItems);

        //update order level state
        httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${result.data.orderId}/ondcUpdate`,
            'PUT',
            { data: updateOrder },
            {}
        );

        let updateResult = await httpRequest.send();

        //update item level fulfillment status
        let items = updateOrder.items.map((item) => {

            if (item.state == 'Cancelled') {
                item.tags = { status: 'Cancelled' };
            }
            if (item.state == 'Return_Initiated') {
                item.tags = { status: 'Return_Initiated' };
            }
            // item.tags={status:logisticData.message.order.fulfillments[0].state?.descriptor?.code};
            item.fulfillment_id = updateOrder.fulfillments[0].id
            delete item.state
            delete item.reason_code
            return item;
        });

        console.log("items--->", items);

        updateOrder.items = items;
        updateOrder.id = updateOrder.orderId;

        const productData = await getUpdate({
            context: statusRequest.context,
            updateOrder: updateOrder
        });

        return productData
    }
    async productUpdateItem(data, requestQuery) {

        const statusRequest = requestQuery.retail_update[0]//select first select request


        console.log("data-------->", data.items);
        console.log("data-------->", data);
        let updatedItems = []
        for (let item of data.message.order.items) {

            //let updateItem = statusRequest.message.order.items.find((itemObj) => {return itemObj.id === item.id});
            //
            //
            // if(item.state==='Cancelled'){
            //     item.state = "Cancelled";
            //     item.reason_code = updateItem.tags.reason_code;
            // }

            updatedItems.push(item);
        }

        data.items = updatedItems;

        //update order level state
        // httpRequest = new HttpRequest(
        //     serverUrl,
        //     `/api/v1/orders/${result.data.orderId}/ondcUpdate`,
        //     'PUT',
        //     {data:updateOrder},
        //     {}
        // );

        // let updateResult = await httpRequest.send();

        //update item level fulfillment status
        let items = data.message.order.items.map((item) => {

            console.log("item--->", item)
            if (item.state == 'Cancelled') {
                item.tags = { status: 'Cancelled' };
            }
            if (item.state == 'Liquidated') {
                item.tags = { status: 'Liquidated' };
            }
            if (item.state == 'Rejected') {
                item.tags = { status: 'Rejected' };
            }
            // item.tags={status:logisticData.message.order.fulfillments[0].state?.descriptor?.code};
            item.fulfillment_id = data.message.order.fulfillments[0].id
            delete item.state
            delete item.reason_code
            return item;
        });

        data.message.order.items = items;
        data.message.order.id = data.message.order.orderId;

        const productData = await getUpdate({
            context: data.context,
            updateOrder: data.message.order
        });

        return productData
    }

    async productItemUpdate(data) {
        try {

            let headers = {};
            //get product by id
            let httpRequest = new HttpRequest(
                serverUrl,
                `/api/v1/products/${data.id}/ondcGet`, //TODO: allow $like query
                'get',
                headers
            );
            let result = await httpRequest.send();
            //build on_search payload for item only
            const productData = {} = await getProductUpdate({ data: result.data }); //should return org specific array of responses

            //return payload for item json

        } catch (e) {
            throw e;
        }
    }

    async productOrderStatus(requestQuery, statusRequest) {

        const logisticData = requestQuery.logistics_on_update[0]

        let confirm = {}


        let updateOrder = statusRequest.message.order

        updateOrder.state = logisticData.message.order.state //set to inprogress

        //update order level state
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${updateOrder.orderId}/ondcUpdate`,
            'PUT',
            { data: updateOrder },
            {}
        );

        let updateResult = await httpRequest.send();

        updateOrder.order_id = updateOrder.orderId;
        delete updateOrder._id

        // updateOrder.fulfillments[0].state =logisticData.message.order.fulfillments[0].state
        //update item level fulfillment status
        let items = updateOrder.items.map((item) => {
            if (item.state == 'Cancelled') {
                item.tags = { status: 'Cancelled' };
            }
            // item.tags={status:logisticData.message.order.fulfillments[0].state?.descriptor?.code};
            item.fulfillment_id = logisticData.message.order.fulfillments[0].id
            delete item.state
            return item;
        });

        updateOrder.items = items;
        //updateOrder.id = statusRequest.orderId;
        const productData = await getStatus({
            context: statusRequest.context, //TODO: build status context from confirm request
            updateOrder: updateOrder
        });

        return productData
    }

    async productCancel(requestQuery) {

        const cancelRequest = requestQuery.retail_cancel[0]//select first select request
        const logisticData = requestQuery.logistics_on_cancel[0]

        let confirm = {}
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${cancelRequest.message.order_id}/ondcGet`,
            'GET',
            {},
            {}
        );

        let result = await httpRequest.send();

        let updateOrder = result.data

        updateOrder.state = logisticData.message.order.state
        updateOrder.cancellation_reason_id = cancelRequest.message.cancellation_reason_id

        //update order level state
        httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${result.data.orderId}/ondcUpdate`,
            'PUT',
            { data: updateOrder },
            {}
        );

        let updateResult = await httpRequest.send();

        //update item level fulfillment status
        // let items = updateOrder.items.map((item)=>{
        //     item.tags={status:updateOrder.state};
        //     item.fulfillment_id = item.id
        //     return item;
        // });

        //updateOrder.items = items;
        updateOrder.id = cancelRequest.message.order_id;
        const productData = await getCancel({
            context: cancelRequest.context,
            updateOrder: updateOrder
        });

        return productData
    }

    async productSellerCancel(cancelData, requestQuery , logistic = false) {
        let orderId;
        if(logistic){
            const cancelRequest = requestQuery.retail_cancel[0]//select first select request
            const logisticData = requestQuery.logistics_on_cancel[0]
            orderId = cancelData.message.order.orderId
        }
        orderId  = requestQuery.data.orderId

        let confirm = {}
        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${orderId}/ondcGet`,
            'GET',
            {},
            {}
        );

        let result = await httpRequest.send();

        let updateOrder = result.data
        let orderState = (logistic) ? cancelData.message.order.state : 'Cancelled';
        let cancellationReason = (logistic) ? cancelData.message.order.cancellation_reason_id : requestQuery.data.cancellation_reason_id;
        
        updateOrder.state = orderState
        updateOrder.cancellation_reason_id = cancellationReason

        //update order level state
        httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders/${orderId}/ondcUpdate`,
            'PUT',
            { data: updateOrder },
            {}
        );

        let updateResult = await httpRequest.send();

        updateOrder.id = orderId
        //update item level fulfillment status
        // let items = updateOrder.items.map((item)=>{
        //     item.tags={status:updateOrder.state};
        //     item.fulfillment_id = item.id
        //     return item;
        // });

        //updateOrder.items = items;
        //updateOrder.id = cancelData.order_id;
        const productData = await getCancel({
            context: (logistic) ? cancelData.context : {},
            updateOrder: updateOrder
        });
        console.log({postCancelRequestttttt : productData.message.order})

        return productData
    }


    async productSupport(requestQuery) {

        const trackRequest = requestQuery.retail_support[0]//select first select request
        const logisticData = requestQuery.logistics_on_support[0]
        const productData = await getSupport({
            context: trackRequest.context,
            logisticData: logisticData
        });

        return productData
    }


    async productConfirm(requestQuery, logistics = false) {

        let confirmRequest = {};
        let logisticData = {};
        let headers = {};
        let quoteItems = {};
        if (logistics) {
            confirmRequest = JSON.parse(JSON.stringify(requestQuery.retail_confirm[0]))
            logisticData = requestQuery.logistics_on_confirm[0]
        } else {
            confirmRequest = requestQuery;
        }
        let items = confirmRequest.message.order.items;
        let confirmData = confirmRequest.message.order;
        const orderId = confirmData.id;
        if (logistics) {
            quoteItems = items.map((item) => {
                item.fulfillment_id = logisticData?.message?.order?.fulfillments[0]?.id;
                delete item.state;
                return item;
            });
        } else {
            quoteItems = items;
        }

        let breakup = confirmData.quote.breakup

        let updatedBreakup = []
        for (let item of breakup) {
            // item.tags={status:logisticData.message.order.fulfillments[0].state?.descriptor?.code};
            if (item['@ondc/org/title_type'] === 'item') {
                const product = await this.getForOndc(item['@ondc/org/item_id'])
                item.item = {
                    price: {
                        currency: "INR",
                        value: `${product.MRP}`
                    }
                };
            }
            updatedBreakup.push(item);
        };

        confirmData.quote.breakup = updatedBreakup;
        confirmRequest.message.order.quote.breakup = updatedBreakup;
        //confirmRequest.message.order.items = qouteItems;

        let org = await this.getOrgForOndc(confirmData.provider.id);

        let storeLocationEnd = {}
        if (org.providerDetail.storeDetails) {
            storeLocationEnd = {
                "location": {
                    "id": org.providerDetail.storeDetails.id,
                    "descriptor": {
                        "name": org.providerDetail.name
                    },
                    "gps": `${org.providerDetail.storeDetails.latitude},${org.providerDetail.storeDetails.longitude}`,

                },
                "contact": {
                    phone: org.providerDetail.storeDetails.mobile,
                    email: org.providerDetail.storeDetails.email
                }
            }
        }
        if (logistics) {
            confirmRequest.message.order.fulfillments[0].start = storeLocationEnd
            confirmRequest.message.order.fulfillments[0].tracking = false;
            confirmRequest.message.order.fulfillments[0].state = {
                "descriptor": {
                    "code": "Pending"
                }
            }
            let today = new Date()
            let tomorrow = new Date()
            let endDate = new Date(tomorrow.setDate(today.getDate() + 1))
            confirmRequest.message.order.fulfillments[0].start.time =
            {
                "range":
                {
                    "start": today, //TODO: need to take this from seller time
                    "end": endDate
                }
            }
            confirmRequest.message.order.fulfillments[0].end.time =
            {
                "range":
                {
                    "start": today,
                    "end": endDate
                }
            }
            confirmRequest.message.order.fulfillments[0]["@ondc/org/provider_name"] = 'LoadShare Delivery' //TODO: hard coded
            confirmRequest.message.order.payment["@ondc/org/buyer_app_finder_fee_type"] = 'percentage' //TODO: hard coded
        }
        let detailedQoute = confirmRequest.message.order.quote
        //confirmData["order_items"] = orderItems
        console.log("confirmData----->", confirmData)
        confirmData.items = quoteItems;
        confirmData.order_id = orderId
        confirmData.orderId = orderId
        confirmData.transaction_id = confirmRequest.context.transaction_id

        // if(logisticData?.message?.order?.fulfillments[0].state?.descriptor?.code ==='Pending'){
        confirmData.state = 'Created'
        confirmData.organization = confirmData.provider.id

        let httpRequest = new HttpRequest(
            serverUrl,
            `/api/v1/orders`,
            'POST',
            { data: confirmData },
            headers
        );

        await httpRequest.send();

        //update fulfillments

        const productData = await getConfirm({
            qouteItems: quoteItems,
            detailedQoute: detailedQoute,
            context: confirmRequest.context,
            message: confirmRequest.message,
        });
        if (logistics) {
            let savedLogistics = new ConfirmRequest()
            savedLogistics.transactionId = confirmRequest.context.transaction_id
            savedLogistics.packaging = "0"//TODO: select packaging option
            savedLogistics.providerId = confirmRequest.message.order.provider.id//TODO: select from items provider id
            savedLogistics.retailOrderId = orderId
            savedLogistics.orderId = logisticData?.message?.order?.id
            savedLogistics.selectedLogistics = logisticData
            savedLogistics.confirmRequest = requestQuery.retail_confirm[0]
            savedLogistics.onConfirmRequest = productData
            savedLogistics.logisticsTransactionId = logisticData?.context?.transaction_id
            await savedLogistics.save();
        }
        return productData
    }


    async productInit(requestQuery, logistics = false) {
        let initData = {};
        let logisticData = {};
        if (logistics) {
            initData = JSON.parse(JSON.stringify(requestQuery.retail_init[0]))//select first select request
            logisticData = requestQuery.logistics_on_init[0]
        }
        let items = (logistics) ? initData.message.order.items : requestQuery.message.order.items;

        let qouteItems = []
        let itemType = ''
        let detailedQoute = []
        let totalPrice = 0
        let resultData = {}
        let qouteItemsDetails = {}
        let itemData = {}
        let isQtyAvailable = true
        let deliveryCharges = {}
        let isValidItem = true


        if (logistics) {
            let org = await this.getOrgForOndc(requestQuery.message.order.provider.id);
            let paymentDetails = {
                "@ondc/org/buyer_app_finder_fee_type": "percent", //TODO: for transaction id keep record to track this details
                "@ondc/org/buyer_app_finder_fee_amount": "3.0",
                "@ondc/org/settlement_details": [
                    {
                        "settlement_counterparty": "seller-app",
                        "settlement_phase": "sale-amount",
                        "settlement_type": "neft",
                        "settlement_bank_account_no": org.providerDetail.bankDetails.accNumber,
                        "settlement_ifsc_code": org.providerDetail.bankDetails.IFSC,
                        "beneficiary_name": org.providerDetail.bankDetails.accHolderName,
                        "bank_name": org.providerDetail.bankDetails.bankName,
                        "branch_name": org.providerDetail.bankDetails.branchName ?? "Pune"
                    }
                ]

            }
            initData.message.order.payment = paymentDetails;
            //select logistic based on criteria-> for now first one will be picked up
            deliveryCharges = {
                "title": "Delivery charges",
                "@ondc/org/title_type": "delivery",
                "@ondc/org/item_id": items[0].fulfillment_id,
                "price": {
                    "currency": '' + logisticData.message.order.quote.price.currency,
                    "value": '' + logisticData.message.order.quote.price.value
                }
            }//TODO: need to map all items in the catalog to find out delivery charges
        }
        for (let item of items) {
            let tags = item.tags;
            if (tags && tags.length > 0) {
                let tagData = tags.find((tag) => { return tag.code === 'type' })
                let tagTypeData = tagData.list.find((tagType) => { return tagType.code === 'type' })
                itemType = tagTypeData.value;
                if (itemType === 'customization') {
                    resultData = itemData?.customizationDetails?.customizations.find((row) => {
                        return row._id === item.id
                    })
                    if (resultData) {
                        if (resultData.maximum < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.name,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.price}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.available}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.available}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.price}`
                                },
                                "tags": item.tags
                            }
                        }
                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }
                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        isValidItem = false;
                    }
                } else {
                    resultData = await this.getForOndc(item.id)
                    if (Object.keys(resultData).length > 0) {

                        if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        itemData = resultData;
                        if (resultData?.commonDetails) {
                            let price = resultData?.commonDetails?.MRP * item.quantity.count
                            totalPrice += price
                        }

                        //TODO: check if quantity is available

                        qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.commonDetails?.productName,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.commonDetails?.quantity}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.commonDetails?.MRP}`
                                },
                                "tags": item.tags
                            }
                        }

                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }

                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        isValidItem = false;
                    }
                }
            }
            else {
                resultData = await this.getForOndc(item.id)
                if (Object.keys(resultData).length > 0) {
                    if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                        isQtyAvailable = false
                    }
                    itemData = resultData;
                    if (resultData?.commonDetails) {
                        let price = resultData?.commonDetails?.MRP * item.quantity.count
                        totalPrice += price
                    }

                    //TODO: check if quantity is available

                    let qouteItemsDetails = {
                        "@ondc/org/item_id": item.id,
                        "@ondc/org/item_quantity": {
                            "count": item.quantity.count
                        },
                        "title": resultData?.commonDetails?.productName,
                        "@ondc/org/title_type": "item",
                        "price":
                        {
                            "currency": "INR",
                            "value": `${resultData?.commonDetails?.MRP}`
                        },
                        "item":
                        {
                            "quantity":
                            {
                                "available":
                                {
                                    "count": `${resultData?.commonDetails?.quantity}`
                                },
                                "maximum":
                                {
                                    "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                }
                            },
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            }
                        }
                    }
                    if (item?.parent_item_id) {
                        qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                    }
                    detailedQoute.push(qouteItemsDetails)
                } else {
                    isValidItem = false;
                }
            }
            item.fulfillment_id = item.fulfillment_id
            delete item.price
            qouteItems.push(item)
            detailedQoute.push(qouteItemsDetails)
        }
        let orderPrice = (logistics) ? parseInt(logisticData.message.order.quote.price.value) : 0;
        totalPrice = orderPrice + parseInt(totalPrice)
        let totalPriceObj = { value: "" + totalPrice, currency: "INR" }

        if (logistics) {
            detailedQoute.push(deliveryCharges);
        }

        const productData = await getInit({
            qouteItems: qouteItems,
            totalPrice: totalPriceObj,
            detailedQoute: detailedQoute,
            context: (logistics) ? initData.context : requestQuery.context,
            message: (logistics) ? initData.message : requestQuery.message,
            logisticData: (logistics) ? initData.logisticData : {}
        });
        if (logistics) {
            let savedLogistics = new InitRequest()
            savedLogistics.transactionId = initData.context.transaction_id
            savedLogistics.packaging = "0"//TODO: select packaging option
            savedLogistics.providerId = initData.message.order.provider.id
            savedLogistics.selectedLogistics = logisticData
            savedLogistics.logisticsTransactionId = logisticData.context.transaction_id
            savedLogistics.initRequest = requestQuery.retail_init[0]
            savedLogistics.onInitResponse = productData
            await savedLogistics.save();
        }

        return productData
    }


    async productSelect(requestQuery) {

        try {

            let savedLogistics = new SelectRequest();

            const selectData = JSON.parse(JSON.stringify(requestQuery.retail_select[0])); //select first select request

            const items = selectData.message.order.items;
            let logisticData = requestQuery.logistics_on_search;
            let isValidOrg = true;
            let isValidItem = true;
            let itemType = ''
            let resultData;
            let itemData = {};
            let qouteItems = []
            let detailedQoute = []
            let totalPrice = 0

            let isQtyAvailable = true
            let isServiceable = true

            let logisticProvider = {}


            const org = await this.getOrgForOndc(selectData.message.order.provider.id);
            let logisticsToSelect = config.get("sellerConfig").LOGISTICS_BAP_ID

            if (org.providerDetail.storeDetails.logisticsBppId) {
                logisticsToSelect = org.providerDetail.storeDetails.logisticsBppId
            }

            // for (let logisticData1 of logisticData) {
            //     if (logisticData1.message) {
            //         if (logisticData1.context.bpp_id == logisticsToSelect ) {//TODO: move to env
            //             if (logisticData1.message && !logisticData1.error) {
            //                 logisticProvider = logisticData1
            //             }
            //         }
            //     }
            // }
            //TODO: uncomment to allow lookup for other providers
            if (Object.keys(logisticProvider).length === 0) {
                for (let logisticData1 of logisticData) { //check if any logistics available who is serviceable
                    if (logisticData1.message && !logisticData1.error && logisticData1.message.catalog["bpp/providers"].length > 0) {
                        logisticProvider = logisticData1
                    }
                }
            }

            if (Object.keys(logisticProvider).length === 0) {
                isServiceable = false
            }
            let deliveryType = ''
            for (let item of items) {
                let tags = item.tags;
                if (tags && tags.length > 0) {
                    let tagData = tags.find((tag) => { return tag.code === 'type' })
                    if (tagData?.list && tagData?.list.length > 0) {
                        let tagTypeData = tagData.list.find((tagType) => { return tagType.code === 'type' })
                        itemType = tagTypeData.value;
                        if (itemType === 'customization') {
                            resultData = itemData?.customizationDetails?.customizations.find((row) => {
                                return row._id === item.id
                            })
                            if (resultData) {
                                if (resultData.maximum < item.quantity.count) {
                                    isQtyAvailable = false
                                }
                                let qouteItemsDetails = {
                                    "@ondc/org/item_id": item.id,
                                    "@ondc/org/item_quantity": {
                                        "count": item.quantity.count
                                    },
                                    "title": resultData?.name,
                                    "@ondc/org/title_type": "item",
                                    "price":
                                    {
                                        "currency": "INR",
                                        "value": `${resultData?.price}`
                                    },
                                    "item":
                                    {
                                        "quantity":
                                        {
                                            "available":
                                            {
                                                "count": `${resultData?.available}`
                                            },
                                            "maximum":
                                            {
                                                "count": `${resultData?.available}`
                                            }
                                        },
                                        "price":
                                        {
                                            "currency": "INR",
                                            "value": `${resultData?.price}`
                                        },
                                        "tags": item.tags
                                    }
                                }
                                if (item?.parent_item_id) {
                                    qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                                }
                                detailedQoute.push(qouteItemsDetails)
                            } else {
                                isValidItem = false;
                            }
                        } else {
                            resultData = await this.getForOndc(item.id)
                            if (Object.keys(resultData).length > 0) {
                                if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                                    isQtyAvailable = false
                                }
                                itemData = resultData;
                                if (resultData?.commonDetails) {
                                    let price = resultData?.commonDetails?.MRP * item.quantity.count
                                    totalPrice += price
                                }

                                //TODO: check if quantity is available

                                let qouteItemsDetails = {
                                    "@ondc/org/item_id": item.id,
                                    "@ondc/org/item_quantity": {
                                        "count": item.quantity.count
                                    },
                                    "title": resultData?.commonDetails?.productName,
                                    "@ondc/org/title_type": "item",
                                    "price":
                                    {
                                        "currency": "INR",
                                        "value": `${resultData?.commonDetails?.MRP}`
                                    },
                                    "item":
                                    {
                                        "quantity":
                                        {
                                            "available":
                                            {
                                                "count": `${resultData?.commonDetails?.quantity}`
                                            },
                                            "maximum":
                                            {
                                                "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                            }
                                        },
                                        "price":
                                        {
                                            "currency": "INR",
                                            "value": `${resultData?.commonDetails?.MRP}`
                                        },
                                        "tags": item.tags
                                    }
                                }
                                if (item?.parent_item_id) {
                                    qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                                }
                                detailedQoute.push(qouteItemsDetails)
                            } else {
                                isValidItem = false;
                            }
                        }
                    }
                    else {
                        resultData = await this.getForOndc(item.id)
                        if (Object.keys(resultData).length > 0) {
                            if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                                isQtyAvailable = false
                            }
                            itemData = resultData;
                            if (resultData?.commonDetails) {
                                let price = resultData?.commonDetails?.MRP * item.quantity.count
                                totalPrice += price
                            }

                            //TODO: check if quantity is available

                            let qouteItemsDetails = {
                                "@ondc/org/item_id": item.id,
                                "@ondc/org/item_quantity": {
                                    "count": item.quantity.count
                                },
                                "title": resultData?.commonDetails?.productName,
                                "@ondc/org/title_type": "item",
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.commonDetails?.MRP}`
                                },
                                "item":
                                {
                                    "quantity":
                                    {
                                        "available":
                                        {
                                            "count": `${resultData?.commonDetails?.quantity}`
                                        },
                                        "maximum":
                                        {
                                            "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                        }
                                    },
                                    "price":
                                    {
                                        "currency": "INR",
                                        "value": `${resultData?.commonDetails?.MRP}`
                                    }
                                }
                            }
                            if (item?.parent_item_id) {
                                qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                            }
                            detailedQoute.push(qouteItemsDetails)
                        } else {
                            isValidItem = false;
                        }
                    }
                } else {
                    resultData = await this.getForOndc(item.id)
                    if (Object.keys(resultData).length > 0) {
                        if (resultData?.commonDetails.maxAllowedQty < item.quantity.count) {
                            isQtyAvailable = false
                        }
                        itemData = resultData;
                        if (resultData?.commonDetails) {
                            let price = resultData?.commonDetails?.MRP * item.quantity.count
                            totalPrice += price
                        }

                        //TODO: check if quantity is available

                        let qouteItemsDetails = {
                            "@ondc/org/item_id": item.id,
                            "@ondc/org/item_quantity": {
                                "count": item.quantity.count
                            },
                            "title": resultData?.commonDetails?.productName,
                            "@ondc/org/title_type": "item",
                            "price":
                            {
                                "currency": "INR",
                                "value": `${resultData?.commonDetails?.MRP}`
                            },
                            "item":
                            {
                                "quantity":
                                {
                                    "available":
                                    {
                                        "count": `${resultData?.commonDetails?.quantity}`
                                    },
                                    "maximum":
                                    {
                                        "count": `${resultData?.commonDetails?.maxAllowedQty}`
                                    }
                                },
                                "price":
                                {
                                    "currency": "INR",
                                    "value": `${resultData?.commonDetails?.MRP}`
                                }
                            }
                        }
                        if (item?.parent_item_id) {
                            qouteItemsDetails.item.parent_item_id = `${item?.parent_item_id}`;
                        }
                        detailedQoute.push(qouteItemsDetails)
                    } else {
                        isValidItem = false;
                    }
                }
                if (isServiceable) {
                    item.fulfillment_id = logisticProvider.message.catalog["bpp/providers"][0].items[0].fulfillment_id //TODO: revisit for item level status
                    deliveryType = logisticProvider.message.catalog["bpp/providers"][0].items.find((element) => { return element.category_id === config.get("sellerConfig").LOGISTICS_DELIVERY_TYPE });
                } else {
                    item.fulfillment_id = '1'
                }
                delete item.price;
                delete item.location_id
                delete item.quantity
                qouteItems.push(item)
            }

            let deliveryCharges = {}
            let fulfillments = []
            if (isServiceable && deliveryType) {
                //select logistic based on criteria-> for now first one will be picked up
                deliveryCharges = {
                    "title": "Delivery charges",
                    "@ondc/org/title_type": "delivery",
                    "@ondc/org/item_id": deliveryType.fulfillment_id,
                    "price": {
                        "currency": '' + deliveryType.price.currency,
                        "value": '' + deliveryType.price.value
                    }
                }//TODO: need to map all items in the catalog to find out delivery charges

                //added delivery charges in total price
                totalPrice += parseInt(logisticProvider.message.catalog["bpp/providers"][0].items[0].price.value)

                let categories = logisticProvider.message.catalog["bpp/providers"][0].categories
                let duration = ''
                if (deliveryType?.time?.duration) {
                    duration = deliveryType.time.duration
                } else {
                    let category = categories.find((cat) => {
                        return deliveryType.category_id === cat.id
                    });
                    duration = category.time.duration
                }

                fulfillments = [
                    {
                        "id": deliveryType.fulfillment_id,
                        "@ondc/org/provider_name": logisticProvider.message.catalog["bpp/descriptor"].name,
                        "tracking": logisticProvider.message.catalog["bpp/fulfillments"][0].tracking,
                        "@ondc/org/category": deliveryType.category_id,
                        "@ondc/org/TAT": duration,
                        "state":
                        {
                            "descriptor":
                            {
                                "code": "Serviceable"//Hard coded
                            }
                        }
                    }]
            } else {

                deliveryCharges = {
                    "title": "Delivery charges",
                    "@ondc/org/title_type": "delivery",
                    "@ondc/org/item_id": '1',
                    "price": {
                        "currency": 'INR',
                        "value": '0'
                    }
                }
                fulfillments = [
                    {
                        "id": '1',
                        "@ondc/org/provider_name": org.providerDetail.name,
                        "tracking": false, //Hard coded
                        "@ondc/org/category": config.get("sellerConfig").LOGISTICS_DELIVERY_TYPE,
                        "@ondc/org/TAT": "P1D",
                        "provider_id": selectData.message.order.provider.id,
                        "type": "Delivery",
                        "state":
                        {
                            "descriptor":
                            {
                                "code": "Non-serviceable"//Hard coded
                            }
                        }, end: selectData.message.order.fulfillments[0].end
                    }]
            }


            //update fulfillment
            selectData.message.order.fulfillments = fulfillments

            let totalPriceObj = { value: "" + totalPrice, currency: "INR" }

            detailedQoute.push(deliveryCharges);

            const productData = await getSelect({
                qouteItems: qouteItems,
                order: selectData.message.order,
                totalPrice: totalPriceObj,
                detailedQoute: detailedQoute,
                context: selectData.context,
                isQtyAvailable,
                isServiceable,
                isValidItem,
                isValidOrg
            });
            savedLogistics.transactionId = selectData.context.transaction_id;
            savedLogistics.logisticsTransactionId = logisticProvider?.context?.transaction_id;
            savedLogistics.packaging = "default"//TODO: select packaging option;
            savedLogistics.providerId = selectData.message.order.provider.id;
            savedLogistics.selectedLogistics = logisticProvider;
            savedLogistics.selectRequest = requestQuery.retail_select[0];
            savedLogistics.onSelectResponse = productData;
            await savedLogistics.save();
            return productData;
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = ProductService;
