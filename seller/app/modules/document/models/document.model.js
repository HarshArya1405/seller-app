import mongoose from'mongoose';
import { uuid } from 'uuidv4';
const documentSchema = new mongoose.Schema({ //Users who has login ability should go under User schema
    _id:{
        type: String, 
        required:true,
        default: () => uuid(),
    },
    organization: {type:String,required:true},
    type: {type:String},
    path:{type:String},
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

documentSchema.index({organization:1,path:1}, {unique: false});
const Document = mongoose.model('Document',documentSchema);
module.exports = Document;
