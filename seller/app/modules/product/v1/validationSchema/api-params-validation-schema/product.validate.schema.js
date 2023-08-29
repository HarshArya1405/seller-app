import Joi from 'joi';

module.exports = {
    create: () => {
        return Joi.object({
            commonDetails: Joi.object({
                productCode: Joi.string(),
                productName: Joi.string(),
                HSNCode: Joi.string(),
                vegNonVeg : Joi.string().valid('VEG', 'NONVEG','EGG').allow(''),
                timing : Joi.object(),
                fulfilmentId : Joi.string(),
                GST_Percentage: Joi.number(),
                productCategory: Joi.string(),
                productSubcategory1: Joi.string(),
                productSubcategory2: Joi.string(),
                productSubcategory3: Joi.string(),
                packerAddress:Joi.object(),
                manufacturerAddress:Joi.object(),
                basePrice:Joi.string(),
                cancelWindow:Joi.string(),
                maxAllowedQty: Joi.number(),
                countryOfOrigin :Joi.string(),
                packQty:Joi.any(),
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any(),
                isReturnable: Joi.boolean(),
                returnWindow: Joi.string(),
                isVegetarian: Joi.boolean(),
                manufacturerName: Joi.string(),
                packingDate : Joi.string(),
                manufacturerOrganizationName : Joi.string(),
                manufacturedDate: Joi.string(),
                nutritionalInfo: Joi.array(),
                additiveInfo: Joi.array(),
                instructions: Joi.string(),
                isCancellable: Joi.boolean(),
                availableOnCod: Joi.boolean(),
                longDescription: Joi.string(),
                description: Joi.string(),
                manufacturerOrPackerName:Joi.string(),
                manufacturerOrPackerAddress:Joi.string(),
                commonOrGenericNameOfCommodity:Joi.string(),
                monthYearOfManufacturePackingImport:Joi.string(),
                importerFSSAILicenseNo:Joi.string(),
                brandOwnerFSSAILicenseNo:Joi.string(),
                varientAttributes: Joi.object(),
                quantity: Joi.number(),
                MRP: Joi.number(),
                retailPrice: Joi.number(),
                purchasePrice: Joi.number(),
                barcode: Joi.number(),
                images: Joi.array(),
            }),
            commonAttributesValues: Joi.object(),
            customizationDetails: Joi.object({
                customizationGroups: Joi.array(),
                customizations: Joi.array(),
            }),
        });
    },
    createWithVariant: () => {
        return Joi.object({
            commonDetails: Joi.object({
                productCode: Joi.string(),
                productName: Joi.string(),
                HSNCode: Joi.string(),
                vegNonVeg : Joi.string().valid('VEG', 'NONVEG','EGG').allow(''),
                timing : Joi.object(),
                fulfilmentId : Joi.string(),
                GST_Percentage: Joi.number(),
                productCategory: Joi.string(),
                productSubcategory1: Joi.string(),
                productSubcategory2: Joi.string(),
                productSubcategory3: Joi.string(),
                countryOfOrigin :Joi.string(),
                packerAddress:Joi.object(),
                manufacturerAddress:Joi.object(),
                basePrice:Joi.string(),
                cancelWindow:Joi.string(),
                maxAllowedQty: Joi.number(),
                packQty:Joi.any(),
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any(),
                isReturnable: Joi.boolean(),
                returnWindow: Joi.string(),
                isVegetarian: Joi.boolean(),
                manufacturerName: Joi.string(),
                packingDate : Joi.string(),
                manufacturerOrganizationName : Joi.string(),
                manufacturedDate: Joi.string(),
                nutritionalInfo: Joi.array(),
                additiveInfo: Joi.array(),
                instructions: Joi.string(),
                isCancellable: Joi.boolean(),
                availableOnCod: Joi.boolean(),
                longDescription: Joi.string(),
                description: Joi.string(),
                manufacturerOrPackerName:Joi.string(),
                manufacturerOrPackerAddress:Joi.string(),
                commonOrGenericNameOfCommodity:Joi.string(),
                monthYearOfManufacturePackingImport:Joi.string(),
                importerFSSAILicenseNo:Joi.string(),
                brandOwnerFSSAILicenseNo:Joi.string()
            }),
            commonAttributesValues: Joi.object(),
            variantSpecificDetails: Joi.array().items(
                Joi.object({
                    varientAttributes: Joi.object(),
                    UOMValue : Joi.string(),
                    quantity: Joi.number(),
                    MRP: Joi.number(),
                    retailPrice: Joi.number(),
                    purchasePrice: Joi.number(),
                    barcode: Joi.number(),
                    images: Joi.array(),
                })
            ),
            customizationDetails : Joi.object(),
            variationOn: Joi.string(),
            variantType: Joi.array().items(
                Joi.string()
            )
        });
    },
    update: () => {
        return Joi.object({
            commonDetails: Joi.object({
                productCode: Joi.string(),
                productName: Joi.string(),
                HSNCode: Joi.string(),
                vegNonVeg : Joi.string().valid('VEG', 'NONVEG','EGG').allow(''),
                timing : Joi.object(),
                fulfilmentId : Joi.string(),
                GST_Percentage: Joi.number(),
                productCategory: Joi.string(),
                countryOfOrigin :Joi.string(),
                productSubcategory1: Joi.string(),
                productSubcategory2: Joi.string(),
                basePrice:Joi.string(),
                packerAddress:Joi.object(),
                manufacturerAddress:Joi.object(),
                cancelWindow:Joi.string(),
                productSubcategory3: Joi.string(),
                maxAllowedQty: Joi.number(),
                packQty:Joi.any(),
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any(),
                isReturnable: Joi.boolean(),
                returnWindow: Joi.string(),
                isVegetarian: Joi.boolean(),
                manufacturerName: Joi.string(),
                packingDate : Joi.string(),
                manufacturerOrganizationName : Joi.string(),
                manufacturedDate: Joi.string(),
                nutritionalInfo: Joi.array(),
                additiveInfo: Joi.array(),
                instructions: Joi.string(),
                isCancellable: Joi.boolean(),
                availableOnCod: Joi.boolean(),
                longDescription: Joi.string(),
                description: Joi.string(),
                manufacturerOrPackerName:Joi.string(),
                manufacturerOrPackerAddress:Joi.string(),
                commonOrGenericNameOfCommodity:Joi.string(),
                monthYearOfManufacturePackingImport:Joi.string(),
                importerFSSAILicenseNo:Joi.string(),
                brandOwnerFSSAILicenseNo:Joi.string(),
                varientAttributes: Joi.object(),
                quantity: Joi.number(),
                MRP: Joi.number(),
                retailPrice: Joi.number(),
                purchasePrice: Joi.number(),
                barcode: Joi.number(),
                images: Joi.array(),
            }),
            commonAttributesValues: Joi.object(),
            customizationDetails: Joi.object({
                customizationGroups: Joi.array(),
                customizations: Joi.array(),
            }),
        });
    },
    updateWithVariant: () => {
        return Joi.object({
            commonDetails: Joi.object({
                productCode: Joi.string(),
                productName: Joi.string(),
                HSNCode: Joi.string(),
                vegNonVeg : Joi.string().valid('VEG', 'NONVEG','EGG').allow(''),
                timing : Joi.object(),
                fulfilmentId : Joi.string(),
                GST_Percentage: Joi.number(),
                productCategory: Joi.string(),
                countryOfOrigin :Joi.string(),
                productSubcategory1: Joi.string(),
                productSubcategory2: Joi.string(),
                productSubcategory3: Joi.string(),
                maxAllowedQty: Joi.number(),
                packQty:Joi.any(),
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                length: Joi.any(),
                basePrice:Joi.string(),
                packerAddress:Joi.object(),
                manufacturerAddress:Joi.object(),
                cancelWindow:Joi.string(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any(),
                isReturnable: Joi.boolean(),
                returnWindow: Joi.string(),
                isVegetarian: Joi.boolean(),
                manufacturerName: Joi.string(),
                packingDate : Joi.string(),
                manufacturerOrganizationName : Joi.string(),
                manufacturedDate: Joi.string(),
                nutritionalInfo: Joi.array(),
                additiveInfo: Joi.array(),
                instructions: Joi.string(),
                isCancellable: Joi.boolean(),
                availableOnCod: Joi.boolean(),
                longDescription: Joi.string(),
                description: Joi.string(),
                manufacturerOrPackerName:Joi.string(),
                manufacturerOrPackerAddress:Joi.string(),
                commonOrGenericNameOfCommodity:Joi.string(),
                monthYearOfManufacturePackingImport:Joi.string(),
                importerFSSAILicenseNo:Joi.string(),
                brandOwnerFSSAILicenseNo:Joi.string()
            }),
            commonAttributesValues: Joi.object(),
            variationOn: Joi.string(),
            variantType: Joi.array().items(
                Joi.string()
            ),
            variantSpecificDetails: Joi.array().items(
                Joi.object({
                    varientAttributes: Joi.object(),
                    _id:Joi.string(),
                    quantity: Joi.number(),
                    MRP: Joi.number(),
                    retailPrice: Joi.number(),
                    purchasePrice: Joi.number(),
                    basePrice:Joi.number(),
                    barcode: Joi.number(),
                    images: Joi.array(),
                }),
            ),
        });
    },
    
    createCustomization :() =>{
        return Joi.object({
            customizationDetails: Joi.object({
                customizationGroups: Joi.array(),
                customizations: Joi.array(),
            }),
        });
    },

    publish: () => {
        return Joi.object({
            published: Joi.boolean().required(),
        });
    },
    get:()=>{
        return Joi.object({
            productId: Joi.string().guid({
                version: ['uuidv4']
            }),
        });
    },
    

    
    list:()=>{
        return Joi.object({
            name:Joi.string().empty(''),
            offset:Joi.number(),
            limit:Joi.number()
        });
    }
};
