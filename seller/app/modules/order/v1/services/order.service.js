
import Order from '../../models/order.model';
import Product from '../../../product/models/product.model';
import ReturnItem from '../../models/returnItem.model';
import HttpRequest from '../../../../lib/utils/HttpRequest';
import { mergedEnvironmentConfig } from '../../../../config/env.config';
import { ConflictError } from '../../../../lib/errors';
import MESSAGES from '../../../../lib/utils/messages';
import { RETURN_REASONS } from '../../../../lib/utils/constants';
import BadRequestParameterError from '../../../../lib/errors/bad-request-parameter.error';
import Fulfillment from '../../models/fulfillments.model';
import { uuid } from 'uuidv4';

class OrderService {
    async create(data) {
        try {
            let query = {};

            console.log('data----->', data);
            console.log('data---items-->', data.data.items);
            // const organizationExist = await Product.findOne({productName:data.productName});
            // if (organizationExist) {
            //     throw new DuplicateRecordFoundError(MESSAGES.PRODUCT_ALREADY_EXISTS);
            // }
            //update item qty in product inventory

            for (let item of data.data.items) {
                if (item.quantity.count) {
                    //reduce item quantity
                    let product = await Product.findOne({ _id: item.id });
                    product.quantity = product.quantity - item.quantity.count;
                    if (product.quantity < 0) {
                        throw new ConflictError();
                    }
                    await product.save();
                }
            }
            // data.data.organization=data.data.provider.id;
            let order = new Order(data.data);
            let savedOrder = await order.save();

            return savedOrder;
        } catch (err) {
            console.log(`[OrderService] [create] Error in creating product ${data.organizationId}`, err);
            throw err;
        }
    }

    async listReturnRequests(params) {
        try {
            let query = {};
            if (params.organization) {
                query.organization = params.organization;
            }
            const data = await ReturnItem.find(query).populate([{ path: 'organization', select: ['name', '_id', 'storeDetails'] }]).sort({ createdAt: -1 }).skip(params.offset * params.limit).limit(params.limit).lean();
            for (const order of data) {
                let item = await Product.findOne({ _id: order.itemId }).lean();

                let code = RETURN_REASONS.find((codes) => {
                    return codes.key === order.reason;
                });

                console.log('reason--->', code);
                order.reason = code.value;
                order.item = item;
            }
            const count = await ReturnItem.count(query);
            let orders = {
                count,
                data
            };
            return orders;
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all return requests ', err);
            throw err;
        }
    }
    async list(params) {
        try {
            let query = {};
            if (params.organization) {
                query.organization = params.organization;
            }
            const data = await Order.find(query).populate([{ path: 'organization', select: ['name', '_id', 'storeDetails'] }]).sort({ createdAt: -1 }).skip(params.offset * params.limit).limit(params.limit).lean();

            for (const order of data) {

                console.log('ordre----->', order);
                console.log('ordre----itemsss->', order.items);
                console.log('ordre----itemsss->0', order.items[0]);

                let items = [];
                for (const itemDetails of order.items) {

                    console.log('ordre----item->', itemDetails);

                    let item = await Product.findOne({ _id: itemDetails.id });
                    itemDetails.details = item; //TODO:return images
                    items.push(itemDetails);
                }
                order.items = items;
                console.log('items-----', items);
            }
            console.log('data.items---->', data.items);
            const count = await Order.count(query);
            let orders = {
                count,
                data
            };
            return orders;
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all organization ', err);
            throw err;
        }
    }


    async get(orderId) {
        try {
            let order = await Order.findOne({ _id: orderId }).lean();

            console.log('order---->', order);
            let items = [];
            for (const itemDetails of order.items) {
                let fulfillmentData  =  await Fulfillment.findOne({id:itemDetails.fulfillment_id});
                console.warn({fulfillmentData})
                if(fulfillmentData){
                    itemDetails.fulfillments = fulfillmentData;
                }
                console.log('ordre----item->', itemDetails);

                let item = await Product.findOne({ _id: itemDetails.id });
                itemDetails.details = item; //TODO:return images
                items.push(itemDetails);
            }
            order.items = items;

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

    async updateOrderStatus(orderId, data) {
        try {
            let order = await Order.findOne({ _id: orderId }).lean();

            //update order state
            order.state = data.status;

            //notify client to update order status ready to ship to logistics
            let httpRequest = new HttpRequest(
                mergedEnvironmentConfig.intraServiceApiEndpoints.client,
                '/api/client/status/updateOrder',
                'PUT',
                { data: order },
                {}
            );
            await httpRequest.send();

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

    async cancelItems(orderId, data) {
        try {
            let order = await Order.findOne({ orderId: orderId });//.lean();

            //update order item level status

            let cancelRequest = new Fulfillment();

            cancelRequest.id = uuid();

            cancelRequest.request = {
                'type': 'Cancel',
                'state':
                {
                    'descriptor':
                    {
                        'code': 'Cancelled'
                    }
                },
                'tags':
                    [
                        {
                            'code': 'cancel_request',
                            'list':
                                [
                                    {
                                        'code': 'reason_id',
                                        'value': data.cancellation_reason_id
                                    },
                                    {
                                        'code': 'initiated_by',
                                        'value': 'http://localhost:3000'  //TODO: take it from env
                                    }
                                ]
                        }
                    ]
            };

            // cancelRequest.request['@ondc/org/provider_name'] = 'LSP courier 1';


            cancelRequest.organization = order.organization;
            cancelRequest.order = order._id;
            await cancelRequest.save();

            // updatedFulfillment['@ondc/org/provider_name'] = 'LSP courier 1'; //TODO: hard coded

            // console.log({updatedFulfillment});
            //1. append item list with this item id and fulfillment id

            console.log({ items: order.items });
            let itemIndex = order.items.findIndex(x => x.id === data.id);
            let itemToBeUpdated = order.items.find(x => x.id === data.id);
            console.log({ itemss: itemToBeUpdated });
            itemToBeUpdated.quantity.count = itemToBeUpdated.quantity.count - parseInt(data.quantity);
            order.items[itemIndex] = itemToBeUpdated; //Qoute needs to be updated here.

            let cancelledItem = {
                'id': data.id,
                'fulfillment_id': cancelRequest.id,
                'quantity':
                {
                    'count': data.quantity
                }
            };
            order.items.push(cancelledItem);

            //get product price
            let productItem = await Product.findOne({ _id: data.id });

            let qouteTrail = {
                'code': 'quote_trail',
                'list':
                    [
                        {
                            'code': 'type',
                            'value': 'item'
                        },
                        {
                            'code': 'id',
                            'value': data.id
                        },
                        {
                            'code': 'currency',
                            'value': 'INR'
                        },
                        {
                            'code': 'value',
                            'value': '-' + (productItem.MRP * data.quantity) //TODO: actual value of order item
                        }
                    ]
            };

            cancelRequest.quote_trail = qouteTrail;
            let updatedFulfillment = {};
            updatedFulfillment.state = {
                'descriptor':
                {
                    'code': 'Cancelled'
                }
            };
            updatedFulfillment.type = 'Cancel';
            updatedFulfillment.id = cancelRequest.id;
            updatedFulfillment.tags = [];
            updatedFulfillment.tags.push(cancelRequest.request.tags[0]);
            updatedFulfillment.tags.push(qouteTrail);
            //updatedFulfillment.organization =order.organization;

            order.fulfillments.push(updatedFulfillment);


            //2. append qoute trail

            order.quote = await this.updateQoute(order.quote, data.quantity, data.id);


            // await order.save();
            await Order.findOneAndUpdate({ orderId: orderId }, { items: order.items, fulfillments: order.fulfillments, quote: order.quote });

            console.log({ order })
            //notify client to update order status ready to ship to logistics
            let httpRequest = new HttpRequest(
                mergedEnvironmentConfig.intraServiceApiEndpoints.client,
                '/api/client/status/updateOrderItems',
                'PUT',
                { data: order },
                {}
            );
            await httpRequest.send();

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

    async updateQoute(data, quantity, item) {
        try {
            console.log({ quotedata: data })
            console.log({ quoteitem: item })
            let itemIndex = data.breakup.findIndex(x => x['@ondc/org/item_id'] === item);
            let itemToBeUpdated = data.breakup.find(x => x['@ondc/org/item_id'] === item);

            console.log({ itemToBeUpdated });
            let priceToReduce = parseFloat(itemToBeUpdated.item.price.value) * quantity;
            itemToBeUpdated['@ondc/org/item_quantity'].count = itemToBeUpdated['@ondc/org/item_quantity'].count - quantity;
            itemToBeUpdated['price'].value = '' + (parseFloat(itemToBeUpdated['price'].value) - priceToReduce);
            data.breakup[itemIndex] = itemToBeUpdated;

            data.price.value = '' + (parseFloat(data.price.value) - priceToReduce);
            return data;
        } catch (e) {
            throw e;
        }
    }

    async updateReturnItem(orderId, data) {
        try {
            let order = await Order.findOne({ orderId: orderId });//.lean();

            let returnRequest = await ReturnItem.findOne({ _id: data.id });
            //update order item level status
            let items = [];
            for (let updateItem of order.items) {

                if (updateItem.id === returnRequest.itemId) {
                    updateItem.state = data.state;
                    items.push(updateItem);
                } else {
                    items.push(updateItem);
                }
            }
            order.items = items;

            returnRequest.state = data.state;
            await returnRequest.save();

            await Order.findOneAndUpdate({ orderId: orderId }, { items: items });

            //notify client to update order status ready to ship to logistics
            let httpRequest = new HttpRequest(
                mergedEnvironmentConfig.intraServiceApiEndpoints.client,
                '/api/client/status/updateOrderItems',
                'PUT',
                { data: order },
                {}
            );
            await httpRequest.send();

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

    async cancel(orderId, data) {
        try {
            let order = await Order.findOne({ _id: orderId }).lean();

            //update order state
            order.state = 'Cancelled';
            order.cancellation_reason_id = data.cancellation_reason_id;
            order.orderId = order.orderId;

            //notify client to update order status ready to ship to logistics
            let httpRequest = new HttpRequest(
                mergedEnvironmentConfig.intraServiceApiEndpoints.client,
                '/api/client/status/cancel',
                'POST',
                { data: order },
                {}
            );
            await httpRequest.send();

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

    async getONDC(orderId) {
        try {
            let order = await Order.findOne({ orderId: orderId }).lean();

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

    async update(orderId, data) {
        try {
            let order = await Order.findOne({ orderId: orderId }).lean();

            order.state = data.state;

            await order.save();

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

    async OndcUpdate(orderId, data) {
        try {

            let oldOrder = await Order.findOne({ orderId: orderId }).lean();

            console.log('oldOrder--->', orderId, oldOrder);
            delete data.data._id;

            if (data.data.state === 'Cancelled') {
                for (let item of data.data.items) {
                    //reduce item quantity
                    let product = await Product.findOne({ _id: item.id });
                    product.quantity = product.quantity + item.quantity.count;
                    await product.save();
                }
            }

            //check item level cancellation status
            for (let item of data.data.items) {

                //let oldItemStatus = oldOrder.items.find((itemObj)=>{return itemObj.id==item.id})
                //if(item.state=='Cancelled' && oldItemStatus.state!=='Cancelled'){ //check if old item state
                if (item.state == 'Cancelled') { //check if old item state
                    //reduce item quantity
                    let product = await Product.findOne({ _id: item.id });
                    product.quantity = product.quantity - item.quantity.count;
                    if (product.quantity < 0) {
                        throw new ConflictError();
                    }
                    await product.save();
                }

                if (item.state == 'Return_Initiated') { //check if old item state
                    //reduce item quantity
                    // let product = await Product.findOne({_id:item.id});
                    // product.quantity = product.quantity-item.quantity.count;
                    // if(product.quantity<0){
                    //     throw new ConflictError();
                    // }
                    // await product.save();

                    //step 1. add item to return model
                    let returnData = {
                        itemId: item.id,
                        orderId: orderId,
                        state: item.state,
                        qty: item.quantity.count,
                        organization: oldOrder.organization,
                        reason: item.reason_code
                    };

                    let returnItem = await ReturnItem.findOne({ orderId: orderId, itemId: item.id });
                    if (!returnItem) {
                        await new ReturnItem(returnData).save();
                    }
                }
            }
            let order = await Order.findOneAndUpdate({ orderId: orderId }, data.data);

            return order;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -}', err);
            throw err;
        }
    }

}
export default OrderService;
