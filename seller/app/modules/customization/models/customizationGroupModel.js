import mongoose from 'mongoose';
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 6 });

const customizationGroupSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: () => uid(),
    },
    id: {
        type: String,
    },
    organization: {type:String,ref:'Organozation'},
    name: {type:String},
    defaultCustomizationId : {type:String},
    isMandatory : {type:Boolean}, 
    inputType: {type:String},
    minQuantity: {type:Number},
    maxQuantity: {type:Number},
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
    customizations: [{ type: String, ref: 'Customization' }],
}, {
    strict: true,
    timestamps: true
});


customizationGroupSchema.index({ id: 1 ,organization:1}, { unique: true });
const CustomizationGroup = mongoose.model('CustomizationGroup', customizationGroupSchema);
module.exports = CustomizationGroup;
