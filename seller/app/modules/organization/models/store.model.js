import mongoose from'mongoose';
import { uuid } from 'uuidv4';

const storeSchema = new mongoose.Schema({ //Users who has login ability should go under User schema
    _id:{
        type: String,
        required:true,
        default: () => uuid(),
    },
    organizationId: {type:String},
    categories: {type:Object},
    logo: {type:String},
    location: new mongoose.Schema({lat:{type:Number},long:{type:Number}},{ _id: true }),
    locationAvailabilityPANIndia:{type:Boolean},
    city:{type:Object},
    defaultCancellable:{type:Boolean},
    defaultReturnable:{type:Boolean},
    address: {
        building: {type:String},
        city: {type:String},
        state: {type:String},
        country: {type:String},
        area_code: {type:String},
        locality: {type:String}
    },
    supportDetails:{
        email:{type:String},
        mobile:{type:String}
    },
    storeTiming:{type:Object},
    radius:{type:Object},
    logisticsBppId:{type:String},
    createdAt:{
        type:Number,
        default:Date.now()
    },
    updatedAt:{
        type:Number,
        default:Date.now()
    },
},{
    strict: true,
    timestamps:true
});
storeSchema.index({name:1}, {unique: true});

const Store = mongoose.model('Store',storeSchema);
module.exports = Store;

