import MESSAGES from '../../../../lib/utils/messages';
import Document from '../../models/document.model';
import {
    NoRecordFoundError,
} from '../../../../lib/errors';
// import s3 from '../../../../lib/utils/s3Utils';

class DocumentService {
    async create(data,currentUser) {
        try {
            const document = new Document();
            document.organization = currentUser.organizationId;
            document.type = data.type;
            document.path = data.path;
            document.createdBy = currentUser.id;
            document.updatedBy = currentUser.id;
            await document.save();
            return {data:document};

        } catch (err) {
            console.log(`[DocumentService] [create] Error in creating organization ${data.organizationId}`,err);
            throw err;
        }
    }
    async get(id,currentUser) {
        try {

            const document = await Document.findOne({_id:id,organization:currentUser.organizationId});

            if (!document) {
                throw new NoRecordFoundError(MESSAGES.DOCUMENT_NOT_EXISTS);
            }

            return {data:document};

        } catch (err) {
            console.log(`[DocumentService] [get] Error - ${currentUser.organizationId}`,err);
            throw err;
        }
    }

    async remove(id,currentUser) {
        try {
            //
        } catch (err) {
            console.log(`[DocumentService] [remove] Error - ${currentUser.organizationId}`,err);

            throw err;
        }
    }

    async list(params,currentUser) {
        try {
            let query = {
                organization:currentUser.organization
            };
            let data = await Document.find(query).limit(params.limit).skip(params.offset);
            let count = await Document.count(query);

            return {count,data};
        } catch (err) {
            console.log(`[DocumentService] [list] Error - ${currentUser.organizationId}`,err);
            throw err;
        }
    }

    async update(id,data,currentUser) {
        try {
            const document = await Document.findOne({_id:id,organization:currentUser.organizationId});
            document.type = data.path;
            document.path = data.pathId;
            document.updatedBy = currentUser.id;
            await document.save();
            return {data:document};
        } catch (err) {
            console.log(`[DocumentService] [update] Error - ${currentUser.organizationId}`,err);
            throw err;
        }
    }
}
export default DocumentService;
