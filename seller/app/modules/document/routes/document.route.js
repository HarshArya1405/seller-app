
import DocumentController from '../controllers/document.controller';
import express from 'express';
import {authentication, authorisation} from '../../../lib/middlewares';
import {SYSTEM_ROLE} from '../../../lib/utils/constants';
import documentValidation from '../v1/middleware/document.validation.schema';
import apiParamsValidator from '../v1/middleware/api.params.validator';
const router = express.Router();

const documentController = new DocumentController();

router.post('/v1/document',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.SUPER_ADMIN]}),
    documentController.create);

router.get('/v1/document/:id',
    authorisation.middleware({roles: [SYSTEM_ROLE.SUPER_ADMIN]}),
    documentController.get);

router.put('/v1/document/:id',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.SUPER_ADMIN]}),
    documentController.update);

router.get('/v1/documents',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.SUPER_ADMIN]}),
    documentController.list);

router.delete('/v1/document/:id',
    authentication.middleware(),
    authorisation.middleware({roles: [SYSTEM_ROLE.ORG_ADMN]}),
    documentController.remove);

router.post('/v1/getSignedUploadUrl', 
    authentication.middleware(), 
    apiParamsValidator.middleware({ schema:documentValidation.getSignedUploadUrl()}), 
    documentController.getUploadUrl);

router.post('/v1/uploadToS3', 
    authentication.middleware(), 
    apiParamsValidator.middleware({ schema:documentValidation.uploadFileToS3()}), 
    documentController.uploadFileToS3);

module.exports = router;
