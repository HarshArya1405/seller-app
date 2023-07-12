import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
const variantGroupSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: () => uuid(),
    },
    organization: {type:String},
    name: { type: Array },
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


variantGroupSchema.index({ name: 1 }, { unique: false });
const VariantGroup = mongoose.model('VariantGroup', variantGroupSchema);
module.exports = VariantGroup;
