
import ProductCustomizationController from '../controllers/productCustomization.controller';
import express from 'express';
import {authentication, authorisation} from '../../../lib/middlewares';
import {SYSTEM_ROLE} from '../../../lib/utils/constants';
const router = express.Router();


const productCustomizationController = new ProductCustomizationController();

router.post('/v1/productCustomization',
    authentication.middleware(),
    // authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    // apiParamsValidator.middleware({ schema: productSchema.create() }),
    productCustomizationController.create);

router.put('/v1/productCustomization/:addOnsId',
    authentication.middleware(),
    // authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    // apiParamsValidator.middleware({ schema: productSchema.update() }),
    productCustomizationController.update);


router.get('/v1/productCustomization/:productId',
    authentication.middleware(),
    // authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    // apiParamsValidator.middleware({ schema: productSchema.list() }),
    productCustomizationController.list,
);

router.get('/v1/productCustomization/:addOnsId',
    authentication.middleware(),
    // apiParamsValidator.middleware({ schema: productSchema.get() }),
    productCustomizationController.get,
);


module.exports = router;
