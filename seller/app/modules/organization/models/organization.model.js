import mongoose from'mongoose';
import { uuid } from 'uuidv4';

const organizationSchema = new mongoose.Schema({ //Users who has login ability should go under User schema
    _id:{
        type: String, 
        required:true,
        default: () => uuid(),
    },
    name: {type:String,required:true},
    address: {type:String},
    fulfilments : {type:Array},
    contactEmail:{type:String},
    contactMobile:{type:String},
    addressProof:{type:String},
    shortDescription:{type:String},
    detailedDescription:{type:String},
    domains:{ type : Array , default : [] },
    logo:{type:String},
    banner:{type:String},
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
    isPANVerified:{type:Boolean},
    GSTN:{type:String},
    isGSTNVerified:{type:Boolean},
    FSSAI:{type:String},
    isFSSAIVerified:{type:Boolean},
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

// organizationSchema.post('findOne',async function(doc, next) {
//         if(doc){
//             let idProof = await s3.getSignedUrlForRead({path:doc.idProof});
//             doc.idProof =idProof
//
//             let addressProof = await s3.getSignedUrlForRead({path:doc.addressProof});
//             doc.addressProof =addressProof
//
//             let cancelledCheque = await s3.getSignedUrlForRead({path:doc.bankDetails.cancelledCheque});
//             doc.bankDetails.cancelledCheque =cancelledCheque
//
//             let PAN = await s3.getSignedUrlForRead({path:doc.PAN.proof});
//             doc.PAN.proof =PAN
//
//             let GSTN = await s3.getSignedUrlForRead({path:doc.GSTN.proof});
//             doc.GSTN.proof =GSTN
//         }
//     next();
// });

organizationSchema.index({name:1,shortCode:1}, {unique: false});
const Organization = mongoose.model('Organization',organizationSchema);
module.exports = Organization;
