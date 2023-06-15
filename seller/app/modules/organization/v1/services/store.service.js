import MESSAGES from '../../../../lib/utils/messages';
import {encryptPIN} from '../../../../lib/utils/utilityFunctions';
import {getSignedUrlForUpload, getSignedUrlForRead3} from '../../../../lib/utils/s3Utils';
import {
    NoRecordFoundError,
    DuplicateRecordFoundError,
} from '../../../../lib/errors/index';
import {v1 as uuidv1} from 'uuid';
import Store from '../../models/store.model';
import Organization from '../../models/organization.model';
import ServiceApi from '../../../../lib/utils/serviceApi';
import s3 from '../../../../lib/utils/s3Utils';

class StoreService {
    /**
     * Create a new user
     * @param {Object} data
     */
    async create(data) {
        try {

            return data;
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }

    async update(data) {
        try {

            return data;
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }
    async processData(data) {
        try {

            return data;
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }
    async get(data) {
        try {

            return data;
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }
    async list(data) {
        try {

            return data;
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }
    async delete(data) {
        try {

            return data;
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }
   
}

export default StoreService;
