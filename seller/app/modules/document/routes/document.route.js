
import DocumentController from '../controllers/document.controller';
import express from 'express';
import {authentication, authorisation} from '../../../lib/middlewares';
import {SYSTEM_ROLE} from '../../../lib/utils/constants';
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

module.exports = router;
