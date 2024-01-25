
import OrganizationController from '../controllers/organization.controller';
import apiParamsValidator from '../v1/middleware/api.params.validator';
import organisationSchema from '../v1/validationSchema/api-params-validation-schema/organization.validate.schema';
import express from 'express';
import { authentication, authorisation } from '../../../lib/middlewares';
import { SYSTEM_ROLE } from '../../../lib/utils/constants';
const router = express.Router();

const organizationController = new OrganizationController();

router.post('/v1/organizations',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.create() }),
    organizationController.create);

router.post('/v1/organizations/signup',
    apiParamsValidator.middleware({ schema: organisationSchema.signup() }),
    organizationController.signup);

router.put('/v1/organizations/:id/',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.update() }),
    organizationController.update);

router.get('/v1/organization/:organizationId',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.get() }),
    organizationController.get,
);

router.get('/v1/admin/organization/:organizationId',
    authentication.middleware(),
    authorisation.middleware({ roles: [SYSTEM_ROLE.SUPER_ADMIN] }),
    apiParamsValidator.middleware({ schema: organisationSchema.get() }),
    organizationController.getAdmin,
);

router.get('/v1/organizations',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.list() }),
    organizationController.list,
);

// ORG - STORE APIs

router.get('/v1/organization/store/categories',
    authentication.middleware(),
    organizationController.getCategories);

router.post('/v1/organization/stores',
    authentication.middleware(),
    // authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.setStoreDetails() }),
    organizationController.setStoreDetails);

router.put('/v1/organization/stores/:storeId',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.updateStoreDetails() }),
    organizationController.updateStoreDetails);

router.get('/v1/organization/stores/:storeId',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.getStoreDetails() }),
    organizationController.getStoreDetail);

router.get('/v1/organization/store/list',
    authentication.middleware(),
    // authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    apiParamsValidator.middleware({ schema: organisationSchema.getStoreList() }),
    organizationController.getStoreList);

router.get('/v1/organizations/:organizationId/ondcGet',
    apiParamsValidator.middleware({ schema: organisationSchema.get() }),
    organizationController.ondcGet,
);

router.post('/v1/organization/kycGSTVerification',
    // authentication.middleware(),
    organizationController.kycGSTVerification);

router.post('/v1/organization/kycPANVerification',
    // authentication.middleware(),
    organizationController.kycPANVerification);

router.post('/v1/organization/kycFSSAIVerification',
    // authentication.middleware(),
    organizationController.kycFSSAIVerification);

module.exports = router;
