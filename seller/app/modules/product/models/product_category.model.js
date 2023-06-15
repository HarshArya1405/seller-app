import mongoose from'mongoose';
import { uuid } from 'uuidv4';
const productCategorySchema = new mongoose.Schema({
    _id:{
        type: String, 
        required:true,
        default: () => uuid(),
    },
    parentId: {type:String},
    name: {type:String,required:true},
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


productCategorySchema.index({name:1}, {unique: false});
const ProductCategory = mongoose.model('ProductCategory',productCategorySchema);
module.exports = ProductCategory;
