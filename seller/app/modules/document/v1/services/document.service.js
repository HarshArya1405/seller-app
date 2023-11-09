import MESSAGES from '../../../../lib/utils/messages';
import Document from '../../models/document.model';
import {
    NoRecordFoundError,
} from '../../../../lib/errors';
// import s3 from '../../../../lib/utils/s3Utils';

class DocumentService {
    /**
     * create document data
     * @param {*} data basic doc data to be stored
     * @param {*} currentUser 
     * @returns saved document data
     */
    async createOrUpdate(data,currentUser) {
        try {
            const documentExist = await Document.findOne({organization:currentUser.organization,type:data.type});
            if(documentExist){
                await Document.updateOne({organization:currentUser.organization,type:data.type},{path:data.path});
            }else{
                const document = new Document();
                document.organization = currentUser.organization;
                document.type = data.type;
                document.path = data.path;
                document.createdBy = currentUser.id;
                document.updatedBy = currentUser.id;
                await document.save();
            }
            return {data};

        } catch (err) {
            console.log(`[DocumentService] [create] Error in creating organization ${currentUser.organization}`,err);
            throw err;
        }
    }
    /**
     * fetch obe document by id
     * @param {*} id requested document Id
     * @param {*} currentUser logged in user
     * @returns document data object
     */
    async get(id,currentUser) {
        try {

            const document = await Document.findOne({_id:id,organization:currentUser.organization});

            if (!document) {
                throw new NoRecordFoundError(MESSAGES.DOCUMENT_NOT_EXISTS);
            }

            return {data:document};

        } catch (err) {
            console.log(`[DocumentService] [get] Error - ${currentUser.organizationId}`,err);
            throw err;
        }
    }
/**
 * remove bulk documents
 * @param {*} currentUser 
 * @returns true
 */
    async removeAll(currentUser) {
        try {
            await Document.deleteMany({organization:currentUser.organization});
            return {success:true};
        } catch (err) {
            console.log(`[DocumentService] [remove] Error - ${currentUser.organization}`,err);

            throw err;
        }
    }
/**
 * fetch document list for an organization
 * @param {*} params keys to filter data
 * @param {*} currentUser logged in user
 * @returns object of documents and count data
 */
    async list(params,currentUser) {
        try {
            let query = {
                organization:currentUser.organization
            };
            let data = await Document.find(query).limit(params.limit).skip(params.offset);
            let count = await Document.count(query);

            return {count,data};
        } catch (err) {
            console.log(`[DocumentService] [list] Error - ${currentUser.organization}`,err);
            throw err;
        }
    }
  /**
     * update document data
     * @param {*} data basic doc data to be stored
     * @param {*} currentUser 
     * @returns updated document data
     */
    async update(id,data,currentUser) {
        try {
            const document = await Document.findOne({_id:id,organization:currentUser.organization});
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
