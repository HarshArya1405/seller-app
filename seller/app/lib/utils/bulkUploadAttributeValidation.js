import Joi from "joi";

module.exports = {
    create: ()=> {
        return Joi.object({
            bpc: Joi.object({
                brand: Joi.string().required(),
                color: Joi.string(),
                colorName: Joi.string(),
                gender: Joi.string(),
                concern: Joi.string(),
                ingredient: Joi.string(),
                conscious: Joi.string(),
                preference: Joi.string(),
                formulation: Joi.string(),
                skinType: Joi.string()
            })
        })
    }
}

module.exports - {
    create: ()=> {
        return Joi.object({
            electronic: Joi.object({
                brand: Joi.string().required(),
                model: Joi.string(),
                modelYear: Joi.number(),
                color: Joi.string(),
                colorName: Joi.string(),
                ram: Joi.string(),
                ramUnit: Joi.number(),
                rom: Joi.string(),
                romUnit: Joi.number(),
                storage: Joi.string(),
                storageUnit:Joi.number(),
                storageType: Joi.string(),
                screenSize: Joi.string(),
                primaryCamera: Joi.string(),
                secondaryCamera: Joi.string(),
                cpu: Joi.string(),
                gpu: Joi.string(),
                batteryCapacity: Joi.string(),
                osType: Joi.string(),
                osVersion: Joi.string(),
                connectivity: Joi.string(),
                formFactor: Joi.string(),
                compatibleDevices: Joi.string(),
                specialFeature: Joi.string(),
                includes:Joi.string(),
                weight: Joi.any(),
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                refurbrished: Joi.string()
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            healthandwellness: Joi.object({
                brand: Joi.string().required(),
                prescriptionRequired: Joi.string().required(),
                usageInstruction: Joi.string(),
                remarks: Joi.string()
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
           homeandkitchen: Joi.object({
                brand: Joi.string().required(),
                color: Joi.string(),
                colorName: Joi.string(),
                material: Joi.string(),
                size: Joi.any(),
                weight: Joi.any(),
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                model: Joi.string(),
                assemblyRequired: Joi.boolean(),
                careInstructions: Joi.string(),
                specialFeatures: Joi.string()
            })
        })
    }
}

module.exports = {
    create: ()=> {
        return Joi.object({
            fashion: Joi.object({
                gender: Joi.string(),
                color: Joi.string(),
                size: Joi.string(),
                brand: Joi.string(),
                sizeChart: Joi.string(),
                fabric: Joi.string(),
                strapMaterial: Joi.string(),
                waterResistant: Joi.string(),
                display: Joi.string(),
                glassMaterial: Joi.string(),
                colorName: Joi.string(),
                sportType: Joi.string(),
                baseMetal:Joi.string(),
                plating: Joi.string(),
                careInstructions: Joi.string(),
                washType: Joi.string(),
                weight: Joi.any(),
                length: Joi.any(),
                breadth: Joi.any(),
                height: Joi.any(),
                features: Joi.string(),
                fabricFinish: Joi.string(),
                material: Joi.string(),
                materialFinish: Joi.string(),
                pattern: Joi.string(),
                occasion: Joi.string(),
                season: Joi.string(),
                trend: Joi.string(),
                fit: Joi.string(),
                collar: Joi.string(),
                neck: Joi.string(),
                bundles: Joi.string(),
                maxSaleQuantity: Joi.number(),
                hemline: Joi.string(),
                lining: Joi.string(),
                numPockets: Joi.string(),
                reversible: Joi.string(),
                bottomType: Joi.string(),
                topType: Joi.string(),
                frontStyling: Joi.string(),
                sleeveLength: Joi.string(),
                sweatshirtType: Joi.string(),
                fragile: Joi.string(),
                liquid: Joi.string(),
                hazardous: Joi.string(),
                powerType: Joi.string(),
                batteryLife: Joi.string(),
                bluetooth: Joi.string(),
                callFunction: Joi.string(),
                heartRateMonitor: Joi.string(),
                pedometer: Joi.string(),
                sleepMonitor: Joi.string(),
                spo2Monitor: Joi.string(),
                warrenty: Joi.string(),
                buckleMaterial: Joi.string(),
                buckleType: Joi.string(),
                waistRise: Joi.string(),
                socksLength: Joi.string(),
                footwearType: Joi.string(),
                insole: Joi.string(),
                soleMaterial: Joi.string(),
                toeShape: Joi.string(),
                outsole: Joi.string(),
                fastenType: Joi.string(),
                midsole: Joi.string(),
                backpackStyle: Joi.string(),
                closureType: Joi.string(),
                stoneType: Joi.string(),
                gemType: Joi.string(),
                dialShape: Joi.string(),
                frameType: Joi.string(),
                frameShape: Joi.string(),
                frameColor: Joi.string(),
                frameSize: Joi.string(),
                frameMaterial: Joi.string(),
                frameStyle: Joi.string(),
                faceShape: Joi.string(),
                lensMaterial: Joi.string(),
                lensColor: Joi.string(),
                laptopCompartment: Joi.string(),
                strapType: Joi.string(),
                volume: Joi.string(),
                lockType: Joi.string(),
                ornamentation: Joi.string(),
                coverage: Joi.string(),
                padding: Joi.string(),
                seam: Joi.string(),
                waistBand: Joi.string(),
                sustainability: Joi.string(),
                handcrafted: Joi.string(),
                craftmark: Joi.string(),
            })
        })
    }
}