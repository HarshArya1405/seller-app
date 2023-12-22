import Joi from 'joi';

const categoryValidation = {
    fnb: {
        length: Joi.any(),
        breadth: Joi.any(),
        height: Joi.any(),
        weight: Joi.any(),
        isVegetarian: Joi.boolean(),
    },
    fashion: {
        UOM: Joi.string(),//units of measure
        UOMValue: Joi.string().allow(''),
        length: Joi.any(),
        breadth: Joi.any(),
        height: Joi.any(),
        weight: Joi.any(),
    },
    grocery: {
        UOM: Joi.string(),//units of measure
        UOMValue: Joi.string().allow(''),
        weight: Joi.any()
    },
    appliances: {

    },
    bpc: {
        UOM: Joi.string(),//units of measure
        UOMValue: Joi.string().allow(''),
        weight: Joi.any()
    },
    electronics: {
        length: Joi.any(),
        breadth: Joi.any(),
        height: Joi.any(),
        weight: Joi.any()
    },
    homeandkitchen: {
        length: Joi.any(),
        breadth: Joi.any(),
        height: Joi.any(),
        weight: Joi.any(),
    },
    healthandwellness: {
        manufacturedDate: Joi.string(),
    }
}

export const mergedValidation = (category) => {
    let commonDetails = Joi.object({
        productCode: Joi.string().required(),
        productName: Joi.string().required(),
        HSNCode: Joi.string(),
        fulfilmentId: Joi.number(),
        GST_Percentage: Joi.number(),
        productCategory: Joi.string(),
        productSubcategory1: Joi.string(),
        productSubcategory2: Joi.string(),
        productSubcategory3: Joi.string(),
        packerAddress: Joi.object(),
        manufacturerAddress: Joi.object(),
        basePrice: Joi.number(),
        cancelWindow: Joi.number(),
        maxAllowedQty: Joi.number(),
        countryOfOrigin: Joi.string(),
        packQty: Joi.any(),
        UOM: Joi.string(),//units of measure
        UOMValue: Joi.string().allow(''),
        isReturnable: Joi.boolean(),
        isVegetarian: Joi.boolean(),
        returnWindow: Joi.string(),
        manufacturerName: Joi.string(),
        manufacturerOrganizationName: Joi.string(),
        manufacturedDate: Joi.string(),
        instructions: Joi.string(),
        isCancellable: Joi.boolean(),
        availableOnCod: Joi.boolean(),
        longDescription: Joi.string(),
        description: Joi.string(),
        manufacturerOrPackerName: Joi.string(),
        variantAttributes: Joi.object(),
        quantity: Joi.number(),
        MRP: Joi.number(),
        retailPrice: Joi.number(),
        purchasePrice: Joi.number(),
        barcode: Joi.number(),
        images: Joi.string(),
    });
    const categorySchema = categoryValidation[category];

    if (!categorySchema) {
        throw new Error(`Category '${category}' schema not found`);
    }

    // Merge commonDetails schema with the specified category schema
    const mergedSchema = commonDetails.keys(categorySchema);

    return mergedSchema;
};
