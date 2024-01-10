import Joi from 'joi';
 //TODO:Tirth add proper validation keys this is old one 
module.exports = {
    create: () => {
        return Joi.object({
            commonAttributesValues: Joi.object(),
            customizationDetails: Joi.object({
                customizationGroups: Joi.array(),
                customizations: Joi.array(),
            }),
        });
    },
    update: () => {
        return Joi.object({
            customizationDetails: Joi.object({
                customizationGroups: Joi.array(),
                customizations: Joi.array(),
            }),
        });
    }
}