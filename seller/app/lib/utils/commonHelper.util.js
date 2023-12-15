import {getSignedUrlForUpload,getSignedUrlForRead} from '../../lib/utils/s3Utils';

class CommonHelperUtil {
    async getReadSignUrlForUpload(data) {

        let singedUrl =  await getSignedUrlForUpload(data);

        console.log('{key,path}',singedUrl);

        return singedUrl;
    }
    async getReadSignUrlForDownload(data){
        let singedUrl =  await getSignedUrlForRead(data);
        return singedUrl;
    }
}

export default CommonHelperUtil;


