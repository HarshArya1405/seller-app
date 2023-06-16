
import ProductCategoryController from '../controllers/productCategory.controller';
import express from 'express';
import {authentication, authorisation} from '../../../lib/middlewares';
import {SYSTEM_ROLE} from '../../../lib/utils/constants';
const router = express.Router();


const productCategoryController = new ProductCategoryController();

router.post('/v1/productCategory',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    // apiParamsValidator.middleware({ schema: productSchema.create() }),
    productCategoryController.create);

router.put('/v1/productCategory/:categoryId',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    // apiParamsValidator.middleware({ schema: productSchema.update() }),
    productCategoryController.update);


router.get('/v1/productCategory',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    // apiParamsValidator.middleware({ schema: productSchema.list() }),
    productCategoryController.list,
);



module.exports = router;
