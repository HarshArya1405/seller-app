import AWS from 'aws-sdk';
// import axios from 'axios';
import { mergedEnvironmentConfig } from '../../config/env.config.js';
const version = mergedEnvironmentConfig.s3.version;
const region = mergedEnvironmentConfig.s3.region;
const bucket = mergedEnvironmentConfig.s3.bucket;
const accessKeyId = mergedEnvironmentConfig.s3.accessKeyId;
const secretAccessKey = mergedEnvironmentConfig.s3.secretAccessKey;

// Configure AWS
AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: region
});

const s3 = new AWS.S3();

const signedUrlExpireSeconds = 3600; // 1 hour

exports.getSignedUrlForUpload = async (data) => {
    try {
        const myKey = `${data.path}/${data.organization}${data.fileType.replace(/^\.?/, '.')}`;
        const params = {
            Bucket: bucket,
            Key: myKey,
            Expires: signedUrlExpireSeconds,
        };

        const url = await s3.getSignedUrlPromise('putObject', params);
        return {
            success: true,
            message: 'AWS SDK S3 Pre-signed URL generated successfully.',
            path: myKey,
            urls: url
        };
    } catch (err) {
        console.log('Error generating pre-signed URL:', err);
        return {
            success: false,
            message: 'Error generating pre-signed URL',
            error: err
        };
    }
};

exports.makeObjectPublic = async (key) => {
    try {
        const params = {
            Bucket: bucket,
            Key: key,
            ACL: 'public-read'
        };

        await s3.putObjectAcl(params).promise();
        return {
            success: true,
            message: 'Object made public successfully.',
            path: key
        };
    } catch (err) {
        console.error('Error making object public:', err);
        return {
            success: false,
            message: 'Error making object public',
            error: err
        };
    }
};


exports.getSignedUrlForRead = async (data) => {
    // TODO: Use Axios to send http request
    try {
        let myKey = data.path;
        const trimValue = 'https://api-images-prod.s3.amazonaws.com/';
        if (myKey) {
            myKey = myKey.replace(trimValue, '');
        }
        const params = {
            Bucket: myBucket,
            Key: myKey,
            Expires: signedUrlExpireSeconds
        };
        return await new Promise(
            (resolve, reject) => s3.getSignedUrl('getObject', params, function (err, url) {
                if (err) {
                    // console.log('Error getting presigned url from AWS S3');
                    reject({ success: false, message: 'Pre-Signed URL erro', urls: url });
                } else {
                    // console.log('Presigned URL: ', url);
                    resolve({ url, path: data.path });
                }
            }));
    } catch (err) {
        return err;
    }
};

exports.getFileAsStream = async (data) => {
    //TODO: Use Axios to send http request
    // promisify read stream from s3
    function getBufferFromS3Promise(file) {
        return new Promise((resolve, reject) => {
            getBufferFromS3(file, (error, s3buffer) => {
                if (error) return reject(error);
                return resolve(s3buffer);
            });
        });
    }

    // Get buffered file from s3
    function getBufferFromS3(file, callback) {
        let myKey = file;
        const buffers = [];
        var options = {
            Bucket: myBucket,
            Key: myKey,
        };
        const stream = s3.getObject(options).createReadStream();
        stream.on('data', data => buffers.push(data));
        stream.on('end', () => callback(null, Buffer.concat(buffers)));
        stream.on('error', error => callback(error));
    }
    try {
        const myKey = data.path;
        const buffer = await getBufferFromS3Promise(myKey);
        return buffer;
    } catch (err) {
        return err;
    }
};


