import mongoose from 'mongoose';
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 6 });
const customizationSchema = new mongoose.Schema({
    _id: {  
        type: String,
        required: true,
        default: () => uid(),
    },
    id: {
        type: String,
        required: true,
    },
    organization: {type:String},
    default : {type:String,default : 'No'},
    name: {type:String},
    price: { type: Number },
    inStock: { type: Boolean },
    parent :{ type: String },
    parentId :{ type: String },
    childId :{ type: String },
    child :{ type: String },
    UOM: { type: String },
    UOMValue: { type: String },
    available: { type :String},
    maximum: { type :String},
    vegNonVeg :{type:String},
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


customizationSchema.index({ id: 1 ,organization:1,parent:1}, { unique: true });
const Customization = mongoose.model('Customization', customizationSchema);
module.exports = Customization;
