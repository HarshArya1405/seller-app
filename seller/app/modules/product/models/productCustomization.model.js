import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const productCutomizationSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: () => uuid(),
    },
    organizationId: {type:String},
    addOns: { type: String },
    label: { type: String },
    variant: { type: String },
    minQty: { type: Number },
    maxQty: { type: Number },
    price: { type: Number },
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


productCutomizationSchema.index({ name: 1 }, { unique: false });
const ProductCutomization = mongoose.model('ProductCutomization', productCutomizationSchema);
module.exports = ProductCutomization;
