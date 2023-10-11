import DocumentService from '../v1/services/document.service';
import {getSignedUrlForUpload, uploadFileToS3} from '../.././../lib/utils/s3Utils';


const documentService = new DocumentService();

class DocumentController {
    async create(req, res, next) {
        try {
            const data = req.body;
            const document = await documentService.create(data,req.user);
            return res.send(document);

        } catch (error) {
            console.log('[DocumentController] [create] Error -', error);
            next(error);
        }     
    }

    async update(req, res, next) {
        try {
            const data = req.body;
            const document = await documentService.signup(req.params.id,data,req.user);
            return res.send(document);

        } catch (error) {
            console.log('[DocumentController] [update] Error -', error);
            next(error);
        }
    }

    async list(req, res, next) {
        try {
            const query = req.query;
            query.offset = parseInt(query.offset);
            query.limit = parseInt(query.limit);
            const documents = await documentService.list(query,req.user);
            return res.send(documents);

        } catch (error) {
            console.log('[DocumentController] [list] Error -', error);
            next(error);
        }
    }

    async get(req, res, next) {
        try {
            const params = req.params;
            const documents = await documentService.get(params.id,req.user);
            return res.send(documents);

        } catch (error) {
            console.log('[DocumentController] [get] Error -', error);
            next(error);
        }
    }

    async remove(req, res, next) {
        try {
            const params = req.params;
            const documents = await documentService.setStoreDetails(params.id,req.user);
            return res.send(documents);

        } catch (error) {
            console.log('[DocumentController] [remove] Error -', error);
            next(error);
        }
    }

    async getUploadUrl(req, res, next){
        try {
            const uploadSignedUrl = await getSignedUrlForUpload(req.params.entity,req.body);
            return res.send(uploadSignedUrl);

        } catch (error) {
            console.log('[DocumentController] [getUploadUrl] Error -', error);
            next(error);
        }
    }
    async uploadFileToS3(req, res, next){
        try {
            //
            const data = req.body;
            const uploadSignedUrl = await uploadFileToS3(data.url,data.file);
            return res.send(uploadSignedUrl);

        } catch (error) {
            console.log('[DocumentController] [getUploadUrl] Error -', error);
            next(error);
        }
    }

}

export default DocumentController;
