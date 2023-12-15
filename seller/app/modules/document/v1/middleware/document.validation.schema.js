'use strict';
import Joi from 'joi';

module.exports = {
    getSignedUploadUrl: () => {
        return Joi.object({
            fileName: Joi.string(),
            fileType: Joi.string(),
            fileSize: Joi.number(),
            path: Joi.string()
        });
    },
    uploadFileToS3: () => {
        return Joi.object({
            url: Joi.string(),
            file: Joi.string(),
        });
    },
};
