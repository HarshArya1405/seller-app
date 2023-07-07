import { v1 as uuidv1 } from 'uuid';
import MESSAGES from '../../../../lib/utils/messages';
import Organization from '../../models/organization.model';
import User from '../../../authentication/models/user.model';
import UserService from '../../../authentication/v1/services/user.service';
import {
    NoRecordFoundError,
    DuplicateRecordFoundError,
    BadRequestParameterError,
} from '../../../../lib/errors';
import s3 from '../../../../lib/utils/s3Utils';
import DocumentService from '../../../document/v1/services/document.service';

const documentService = new DocumentService();

const userService = new UserService();
class OrganizationService {
    async create(data,currentUser) {
        try {
            const orgDetails = data.providerDetails;
            const documents = data.providerDetails?.documents;
            const organizationExist = await Organization.findOne({name:orgDetails.name});

            if (organizationExist) {
                throw new DuplicateRecordFoundError(MESSAGES.ORGANIZATION_ALREADY_EXISTS);
            }
            let userQuery = {
                _id:{'$ne' : currentUser.id},
                '$or':[
                    {email:data.user.email},
                    {mobile:data.user.mobile}
                ]
            };
            let userExist = await User.findOne(userQuery);

            if (userExist) {
                throw new DuplicateRecordFoundError(MESSAGES.USER_ALREADY_EXISTS);
            }

            let  organization = new Organization(orgDetails);
            await organization.save();
            data.user.organization = organization._id;
            currentUser.organizationId = organization._id;
            //saving documents
            if(documents && documents.length >0){
                for(const document of documents){
                    let obj = {
                        type:document.type,
                        path:document.path,
                        organization:currentUser.organizationId
                    };
                    await documentService.create(obj,currentUser);
                }
            }
            //updating a user

            let user = await userService.update(currentUser.id,data.user,currentUser);
            return {user:user,providerDetail:organization};

        } catch (err) {
            console.log(`[OrganizationService] [create] Error in creating organization ${data.organizationId}`,err);
            throw err;
        }
    }
    async signup(data) {
        try {
            let query = {};

            let orgDetails = data.providerDetails;
            const organizationExist = await Organization.findOne({name:orgDetails.name});

            if (organizationExist) {
                throw new DuplicateRecordFoundError(MESSAGES.ORGANIZATION_ALREADY_EXISTS);
            }

            let userExist = await User.findOne({email:data.user.email});

            if (userExist) {
                throw new DuplicateRecordFoundError(MESSAGES.USER_ALREADY_EXISTS);
            }

            let  organization = new Organization(orgDetails);
            let savedOrg = await organization.save();

            //create a user
            let user = await userService.signup({...data.user,organization:organization._id,role:'Organization Admin'});

            return {user:user,providerDetail:organization};

        } catch (err) {
            console.log(`[OrganizationService] [create] Error in creating organization ${data.organizationId}`,err);
            throw err;
        }
    }

    async list(params) {
        try {
            let query={};
            if(params.name){
                query.name = { $regex: params.name, $options: 'i' };
            }
            const organizations = await Organization.find(query).sort({createdAt:1}).skip(params.offset).limit(params.limit);
            const count = await Organization.count(query);
            let organizationData={
                count,
                organizations
            };
            return organizationData;
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all organization ',err);
            throw err;
        }
    }

    async get(organizationId,currentUser) {
        try {
            let doc = await Organization.findOne({_id:organizationId}).lean();

            console.log('user----->',currentUser);
            let user = await User.findOne({organization:organizationId,_id:currentUser.id},{password:0});
            if(doc) {
                // let idProof = await s3.getSignedUrlForRead({path:doc.idProof});
                // doc.idProof =idProof;

                // let addressProof = await s3.getSignedUrlForRead({path:doc.addressProof});
                // doc.addressProof =addressProof;

                // let cancelledCheque = await s3.getSignedUrlForRead({path:doc.bankDetails.cancelledCheque});
                // doc.bankDetails.cancelledCheque =cancelledCheque;

                // let PAN = await s3.getSignedUrlForRead({path:doc.PAN.proof});
                // doc.PAN.proof =PAN;

                // let GSTN = await s3.getSignedUrlForRead({path:doc.GSTN.proof});
                // doc.GSTN.proof =GSTN;
                let documents = await documentService.list({},currentUser);
                if(documents){
                    doc.documents =documents.data;
                }
            }

            return {user,providerDetail:doc};
        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${organizationId}`,err);
            throw err;
        }
    }

    async setStoreDetails(organizationId,data) {
        try {
            let organization = await Organization.findOne({_id:organizationId});//.lean();
            if (organization) {
                organization.storeDetails =data;
                organization.save();
            } else {
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            }
            return data;
        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${organizationId}`,err);
            throw err;
        }
    }

    async update(organizationId,data) {
        try {
            let organization = await Organization.findOne({_id:organizationId});//.lean();
            if (organization) {

                let userExist = await User.findOne({mobile:data.user.mobile,organization:organizationId});

                if (userExist && userExist.organization !==organizationId ) {
                    throw new DuplicateRecordFoundError(MESSAGES.USER_ALREADY_EXISTS);
                }
                else{
                    const updateUser  = await User.findOneAndUpdate({organization:organizationId},data.user);
                }

                let updateOrg = await Organization.findOneAndUpdate({_id:organizationId},data.providerDetails);

            } else {
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            }
            return data;
        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${organizationId}`,err);
            throw err;
        }
    }

    async getStoreDetails(organizationId,data) {
        try {
            let organization = await Organization.findOne({_id:organizationId},{storeDetails:1}).lean();
            if (organization) {

                if(organization?.storeDetails){
                    let logo = await s3.getSignedUrlForRead({path:organization?.storeDetails?.logo});
                    organization.storeDetails.logo =logo;
                }else{
                    organization.storeDetails = {};
                }

                return organization;
            } else {
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            }

        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${organizationId}`,err);
            throw err;
        }
    }
}
export default OrganizationService;
