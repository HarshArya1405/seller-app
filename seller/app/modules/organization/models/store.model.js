import mongoose from'mongoose';
import { uuid } from 'uuidv4';

const storeSchema = new mongoose.Schema({ //Users who has login ability should go under User schema
    _id:{
        type: String,
        required:true,
        default: () => uuid(),
    },
    organization: {type:String},
    name:{type:String},
    email:{type:String},
    mobile:{type:String},

    addressLine1:{
        type: String
    },
    addressLine2:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    pincode:{
        type: String
    },
    country:{
        type: String
    },

    latitude: {type:String},
    longitude: {type:String},

    openDays:{type:Array,default:[]},
    closeDays:{type:Array,default:[]},
    opecategoryServiceabilitynDays:{type:Array,default:[]},
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

