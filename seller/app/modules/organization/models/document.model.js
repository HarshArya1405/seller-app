import mongoose from'mongoose';
import { uuid } from 'uuidv4';
const documentSchema = new mongoose.Schema({ //Users who has login ability should go under User schema
    _id:{
        type: String, 
        required:true,
        default: () => uuid(),
    },
    organization: {type:String,required:true},
    address: {type:String},
    contactEmail:{type:String},
    contactMobile:{type:String},
    addressProof:{type:String},
    shortDescription:{type:String},
    detailedDescription:{type:String},
    logo:{type:String},
    banner:{type:String},
    documents:{ type : Array , default : [] },
    bankDetails:{
        accHolderName:{type:String},
        accNumber:{type:String},
        IFSC:{type:String},
        cancelledCheque:{type:String},
        bankName:{type:String},
        accountType:{type:String},
        branchName:{type:String}
    },
    PAN:{type:String},
    GSTN:{type:String},
    FSSAI:{type:String},
    createdAt:{
        type:Number,
        default:Date.now()
    },
    updatedAt:{
        type:Number,
        default:Date.now()
    },
    createdBy:{type:String}
},{  
    strict: true,
    timestamps:true
});

documentSchema.index({name:1,shortCode:1}, {unique: false});
const Document = mongoose.model('Document',documentSchema);
module.exports = Document;
