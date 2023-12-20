import Joi from "joi";

module.exports = {
    create: () => {
        return Joi.object({
            commonDetails: Joi.object({
                productCode: Joi.string(),
                productName: Joi.string(),
                HSNCode: Joi.string(),
                fulfilmentId : Joi.string(),
                GST_Percentage: Joi.number(),
                productCategory: Joi.string(),
                productSubcategory1: Joi.string(),
                productSubcategory2: Joi.string(),
                productSubcategory3: Joi.string(),
                packerAddress:Joi.object(),
                manufacturerAddress:Joi.object(),
                basePrice:Joi.number(),
                cancelWindow:Joi.number(),
                maxAllowedQty: Joi.number(),
                countryOfOrigin :Joi.string(),
                packQty:Joi.any(),
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                isReturnable: Joi.boolean(),
                returnWindow: Joi.number(),
                manufacturerName: Joi.string(),
                manufacturerOrganizationName : Joi.string(),
                manufacturedDate: Joi.string(),
                instructions: Joi.string(),
                isCancellable: Joi.boolean(),
                availableOnCod: Joi.boolean(),
                longDescription: Joi.string(),
                description: Joi.string(),
                manufacturerOrPackerName:Joi.string(),
                variantAttributes: Joi.object(),
                quantity: Joi.number(),
                MRP: Joi.number(),
                retailPrice: Joi.number(),
                purchasePrice: Joi.number(),
                barcode: Joi.number(),
                images: Joi.array(),
            })
        });
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            fnb: Joi.object({
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any(),
                isVegetarian: Joi.boolean(),
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            fashion: Joi.object({
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any(),
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            grocery: Joi.object({
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                weight: Joi.any()
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            appliances: Joi.object({
                
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            bpc: Joi.object({
                UOM: Joi.string(),//units of measure
                UOMValue : Joi.string().allow(''),
                weight: Joi.any()
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            electronics: Joi.object({
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any()
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            homeandkitchen: Joi.object({
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                weight: Joi.any(),
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            healthandwellness: Joi.object({
                manufacturedDate: Joi.string(),
            })
        })
    }
}