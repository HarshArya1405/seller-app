import AWS from 'aws-sdk';
// import axios from 'axios';
import uuid from 'uuid';
import { mergedEnvironmentConfig } from '../../config/env.config.js';
const version = mergedEnvironmentConfig.s3.version;
const region = mergedEnvironmentConfig.s3.region;
const bucket = mergedEnvironmentConfig.s3.bucket;
const accessKeyId = mergedEnvironmentConfig.s3.accessKeyId;
const secretAccessKey = mergedEnvironmentConfig.s3.secretAccessKey;


//TODO:move to ext config
const s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    useAccelerateEndpoint: true,
    signatureVersion: version,
    region: region
});

const signedUrlExpireSeconds = 60 * 60 * 60;

let myBucket = bucket;

const getSignedUrlForUpload = (s3, myBucket) => async (data) => {
    try {
        const myKey = data.path + '/' + data.organization + data.fileType.replace(/^\.?/, '.');
        const params = {
            Bucket: myBucket,
            Key: myKey,
            Expires: signedUrlExpireSeconds
        };
        return await new Promise(
            (resolve, reject) => s3.getSignedUrl('putObject', params, function (err, url) {
                if (err) {
                    console.log('Error getting presigned url from AWS S3', err);
                    reject({ success: false, message: 'Pre-Signed URL error', urls: url });
                } else {
                    resolve({
                        success: true,
                        message: 'AWS SDK S3 Pre-signed urls generated successfully.',
                        path: myKey,
                        urls: url
                    });
                }
            }));
    } catch (err) {
        return err;
    }
};
exports.getSignedUrlForUpload = getSignedUrlForUpload(s3, myBucket);

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


