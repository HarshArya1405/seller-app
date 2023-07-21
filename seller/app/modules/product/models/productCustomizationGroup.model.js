import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const productCustomizationGroupSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: () => uuid(),
    },
    id: {
        type: String,
        required: true,
    },
    organization: {type:String,ref:'Organozation'},
    product: {type:String, ref:'Product'},
    name: {type:String},
    inputType: {type:String},
    minQuanity: {type:Number},
    maxQuantiy: {type:Number},
    seq: {type:Number},
    createdBy: { type: String },
    updatedBy: { type: String },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    updatedAt: {
        type: Number,
        default: Date.now()
    },
}, {
    strict: true,
    timestamps: true
});


productCustomizationGroupSchema.index({ id: 1 ,product:1,organization:1}, { unique: true });
const ProductCustomizationGroup = mongoose.model('ProductCustomizationGroup', productCustomizationGroupSchema);
module.exports = ProductCustomizationGroup;
