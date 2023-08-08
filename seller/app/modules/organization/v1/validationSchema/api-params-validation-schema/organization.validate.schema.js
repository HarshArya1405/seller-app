import Joi from 'joi';

module.exports = {
    create: () => {
        return Joi.object({
            user: {
                email: Joi.string(),
                mobile: Joi.string(),
                firstName: Joi.string(),
                lastName: Joi.string(),
                addressLine1: Joi.string(),
                fulfilments : Joi.array(),
                addressLine2: Joi.string().allow(''),
                city: Joi.string(),
                pincode: Joi.string(),
                state: Joi.string(),
                country: Joi.string(),
            },
            providerDetails: {
                name: Joi.string(),
                contactEmail: Joi.string(),
                contactMobile: Joi.string(),
                documents: Joi.array(),
                domains: Joi.array(),
                fulfilments : Joi.array(),
                logo: Joi.string(),
                shortDescription:Joi.string(),
                detailedDescription:Joi.string(),
                banner: Joi.string(),
                bankDetails: {
                    accHolderName: Joi.string(),
                    accNumber: Joi.string(),
                    IFSC: Joi.string(),
                    cancelledCheque: Joi.string().allow(''),
                    bankName: Joi.string(),
                    branchName: Joi.string(),
                    accountType:Joi.string()
                },
                PAN: Joi.string().allow(''),
                GSTN: Joi.string(),
                FSSAI: Joi.string()
            }
        });
    },
    update: () => {
        return Joi.object({
            user: {
                email: Joi.string(),
                mobile: Joi.string(),
                firstName: Joi.string(),
                lastName: Joi.string(),
                addressLine1: Joi.string(),
                addressLine2: Joi.string().allow(''),
                city: Joi.string(),
                pincode: Joi.string(),
                state: Joi.string(),
                country: Joi.string(),
            },
            providerDetails: {
                name: Joi.string(),
                contactEmail: Joi.string(),
                contactMobile: Joi.string(),
                documents: Joi.array(),
                domains: Joi.array(),
                logo: Joi.string(),
                shortDescription:Joi.string(),
                detailedDescription:Joi.string(),
                banner: Joi.string(),
                bankDetails: {
                    accHolderName: Joi.string(),
                    accNumber: Joi.string(),
                    IFSC: Joi.string(),
                    cancelledCheque: Joi.string().allow(''),
                    bankName: Joi.string(),
                    branchName: Joi.string(),
                    accountType:Joi.string()
                },
                PAN: Joi.string().allow(''),
                GSTN: Joi.string(),
                FSSAI: Joi.string()
            }
        });
    },
    setStoreDetails:()=>{
        return Joi.object({
            name: Joi.string(),
            email: Joi.string(),
            mobile: Joi.string(),
            addressLine1: Joi.string(),
            addressLine2: Joi.string().allow(''),
            city: Joi.string(),
            pincode: Joi.string(),
            state: Joi.string(),
            country: Joi.string(),
            latitude:Joi.number(),
            longitude:Joi.number(),
            openDays:Joi.array(),
            closeDays:Joi.array(),
            categoryServiceability:Joi.array(),
        });
    },
    updateStoreDetails:()=>{
        return Joi.object({
            name: Joi.string(),
            email: Joi.string(),
            mobile: Joi.string(),
            addressLine1: Joi.string(),
            addressLine2: Joi.string().allow(''),
            city: Joi.string(),
            pincode: Joi.string(),
            state: Joi.string(),
            country: Joi.string(),
            latitude:Joi.number(),
            longitude:Joi.number(),
            openDays:Joi.array(),
            closeDays:Joi.array(),
            categoryServiceability:Joi.array(),
        });
    },
    get:()=>{
        return Joi.object({
            organizationId: Joi.string().guid({
                version: ['uuidv4']
            }),
        });
    },

    signup: () => {
        return Joi.object({
            user: {
                email: Joi.string(),
                mobile: Joi.string(),
                name: Joi.string(),
                password:Joi.string()
            },
            providerDetails: {
                name: Joi.string(),
                address: Joi.string(),
                contactEmail: Joi.string(),
                contactMobile: Joi.string(),
                addressProof: Joi.string(),
                idProof: Joi.string(),
                bankDetails: {
                    accHolderName: Joi.string(),
                    accNumber: Joi.string(),
                    IFSC: Joi.string(),
                    cancelledCheque: Joi.string(),
                    bankName: Joi.string(),
                    branchName: Joi.string()
                },
                PAN: {PAN: Joi.string(), proof: Joi.string()},
                GSTN: {GSTN: Joi.string(), proof: Joi.string()},
                FSSAI: Joi.string()
            }
        });
    },
    
    getStoreDetails:()=>{
        return Joi.object({
            storeId: Joi.string().guid({
                version: ['uuidv4']
            }),
        });
    },

    getStoreList:()=>{
        return Joi.object({
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
