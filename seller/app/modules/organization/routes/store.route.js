
import express from 'express';
const router = express.Router();

import StoreController from '../controllers/store.controller';
import apiParamsValidator from '../v1/middleware/api.params.validator';
import {authentication,authorisation} from '../../../lib/middlewares';
import userSchema from '../v1/validationSchema/api-params-validation-schema/user.validation.schema';
import {SYSTEM_ROLE} from '../../../lib/utils/constants';
const storeController = new StoreController();
// router.use('/auth', authentication.middleware());

router.post('/v1/store/create',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    storeController.create
);

router.put('/v1/store/:id',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    storeController.update
);

router.get('/v1/store/:id',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    storeController.get
);

router.delete('/v1/store/:id',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    storeController.delete
);

router.get('/v1/stores',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    storeController.list
);

module.exports = router;
