import mongoose from'mongoose';
import { uuid } from 'uuidv4';
const productSchema = new mongoose.Schema({
    _id:{
        type: String, 
        required:true,
        default: () => uuid(),
    },
    type: {
        type: String,
        enum: ['item', 'customization'],
        default: 'item'
    },
    productCode: {type:String},
    productName: {type:String,required:true},
    variantGroup : {type:String,ref:'VariantGroup'},
    MRP: {type:Number},
    cancelWindow :{type:String},   
    manufacturerOrganizationName :{type:String},
    packingDate :{type:String},
    basePrice :{type:Number},
    retailPrice: {type:Number},
    purchasePrice: {type:Number},
    manufacturerAddress :{type:Object},
    packerAddress :{type:Object},
    HSNCode: {type:String},
    vegNonVeg :{type:String},
    timing : {type:Object},
    fulfilmentId : {type:String},
    GST_Percentage: {type:Number},
    productCategory: {type:String},
    productSubcategory1: {type:String},
    productSubcategory2: {type:String},
    productSubcategory3: {type: String},
    quantity: {type:Number},
    barcode: {type:Number},
    maxAllowedQty: {type:Number},
    packQty:{type:String},
    UOM: {type:String},//units of measure
    UOMValue: {type:String},
    length: {type:String},
    breadth: {type:String},
    height: {type:String},
    weight: {type:String},
    isReturnable: {type:Boolean},
    returnWindow: {type:String},
    manufacturerName: {type:String},
    manufacturedDate: {type:String},
    nutritionalInfo: {type:Array},
    additiveInfo: {type:Array},
    instructions: {type:String},
    isCancellable: {type:Boolean},
    availableOnCod: {type:Boolean},
    longDescription: {type:String},
    description: {type:String},
    organization: { type: String, ref: 'Organization' },
    images: {type:Array},
    createdBy:{type:String},
    published:{type:Boolean,default:true},
    manufacturerOrPackerName:{type:String},
    manufacturerOrPackerAddress:{type:String},
    commonOrGenericNameOfCommodity:{type:String},
    monthYearOfManufacturePackingImport:{type:String},
    importerFSSAILicenseNo:{type:String},
    brandOwnerFSSAILicenseNo:{type:String},
    customizationGroupId: { type: String, ref: 'CustomizationGroup'}

},{  
    strict: true,
    timestamps:true
});


productSchema.index({name:1}, {unique: false});
const Product = mongoose.model('Product',productSchema);
module.exports = Product;
