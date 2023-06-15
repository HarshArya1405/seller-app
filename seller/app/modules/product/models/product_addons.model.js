import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const productAddOnsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: () => uuid(),
    },
    label: { type: String },
    type: { type: String },
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


productAddOnsSchema.index({ name: 1 }, { unique: false });
const ProductAddOns = mongoose.model('ProductAddOns', productAddOnsSchema);
module.exports = ProductAddOns;
