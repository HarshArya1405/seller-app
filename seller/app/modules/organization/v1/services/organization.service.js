import { v1 as uuidv1 } from 'uuid';
import MESSAGES from '../../../../lib/utils/messages';
import Organization from '../../models/organization.model';
import Store from '../../models/store.model';
import User from '../../../authentication/models/user.model';
import UserService from '../../../authentication/v1/services/user.service';
import AuthenticationJwtToken from '../../../../lib/utils/AuthenticationJwtToken';
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
            if(currentUser.organization){
                throw new DuplicateRecordFoundError(MESSAGES.ORGANIZATION_EXISTS);
            }
            let  organization = new Organization(orgDetails);
            await organization.save();
            data.user.organization = organization._id;
            currentUser.organization = organization._id;
            //saving documents
            if(documents && documents.length >0){
                for(const document of documents){
                    let obj = {
                        type:document.type,
                        path:document.path,
                        organization:currentUser.organization
                    };
                    await documentService.createOrUpdate(obj,currentUser);
                }
            }
            //updating a user

            let user = await userService.update(currentUser.id,data.user,currentUser);
            const tokenPayload = {
                user: {
                    id: currentUser.id,
                    role:currentUser.role,
                    organization:organization._id
                },
                lastLoginAt: new Date().getTime(),
            };
            // create JWT access token
            const JWTToken = await AuthenticationJwtToken.getToken(tokenPayload);
            return {user:user,providerDetail:organization,token:JWTToken};

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
                let logo = await s3.getSignedUrlForRead({path:doc.logo});
                doc.logo =logo;
                let banner = await s3.getSignedUrlForRead({path:doc.banner});
                doc.banner =banner;
                let documents = await documentService.list({},currentUser);
                if(documents){
                    if(documents.data && documents.data.length > 0){
                        let documentData =[];
                        for(const document of documents.data){
                            let documentObj = {...document};
                            let pathData = await s3.getSignedUrlForRead({path:documentObj.path});
                            documentObj.path = pathData;
                            documentData.push(documentObj);
                            doc.documents = documentData;
                        }
                    }
                }else{
                    doc.documents = [];
                }
            }

            return {user,providerDetail:doc};
        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${organizationId}`,err);
            throw err;
        }
    }

   
    async update(organizationId,data,currentUser) {
        try {
            let organization = await Organization.findOne({_id:organizationId}).lean();
            if (organization) {
                const orgDetails = data.providerDetails;
                const documents = data.providerDetails?.documents;
                const organizationExist = await Organization.findOne({_id:{$ne:organizationId},name:orgDetails.name});
    
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
                let  organizationObj = {...organization,...orgDetails};
                await Organization.updateOne({_id:organizationId},organizationObj);
                //saving documents
                if(documents && documents.length >0){
                    for(const document of documents){
                        let obj = {
                            type:document.type,
                            path:document.path,
                            organization:organizationId
                        };
                        await documentService.createOrUpdate(obj,currentUser);
                    }
                }
                //updating a user
    
                let user = await userService.update(currentUser.id,data.user,currentUser);
                return {user:user,providerDetail:organization};
            }else{
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            }
        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${organizationId}`,err);
            throw err;
        }
    }

    // ORG STORE Func
    async setStoreDetails(data,currentUser) {
        try {
            let organization = await Organization.findOne({_id:currentUser.organization});
            if (organization) {
                const storeExist =  await Store.findOne({organization:currentUser.organization,name:data.name});
                if(storeExist){
                    throw new NoRecordFoundError(MESSAGES.STORE_ALREADY_EXISTS);
                }else{
                    let storeObj = {...data};
                    storeObj.organization = currentUser.organization;
                    storeObj.createdBy = currentUser.id;
                    storeObj.updatedBy = currentUser.id;
                    const store = new Store(storeObj);
                    await store.save();
                    return {data:store};
                }
            } else {
                throw new NoRecordFoundError(MESSAGES.PROVIDER_NOT_EXIST);
            }
        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`,err);
            throw err;
        }
    }

    async getCategories(params,currentUser){
        try {
            let organization = await Organization.findOne({_id:currentUser.organization});
            if (organization) {
                // const stores =  await Store.find({organization:currentUser.organization});
                // if(stores && stores.length >0 ){
                //     let categories = [];
                //     for(const store of stores){
                //         if(store.categoryServiceability && store.categoryServiceability.length >0){
                //             for(const categoryServiceability of store.categoryServiceability){
                //                 categories.push({name:categoryServiceability.domainName});
                //             }
                //         }
                //     }
                //     return categories;
                // }
                let categories = [];
                const domains = organization.domains[0].subDomains;
                for(const domain of domains){
                    categories.push({name:domain.subdomainName});
                }
                
                return categories;
            } else {
                throw new NoRecordFoundError(MESSAGES.PROVIDER_NOT_EXIST);
            }
        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`,err);
            throw err;
        }
    }

    async updateStoreDetails(storeId,data,currentUser) {
        try {
            let organization = await Organization.findOne({_id:currentUser.organization});
            if (organization) {
                const storeExist =  await Store.findOne({organization:currentUser.organization,_id:{$ne:storeId},name:data.name});
                if(storeExist){
                    throw new DuplicateRecordFoundError(MESSAGES.STORE_ALREADY_EXISTS);
                }
                const storeQuery = {organization:currentUser.organization,_id:storeId};
                const store = await Store.findOne(storeQuery).lean();
                if(!store){
                    throw new NoRecordFoundError(MESSAGES.STORE_NOT_EXISTS);
                }
                let storeObj = {...store,...data};
                storeObj.updatedBy = currentUser.id;
                await Store.updateOne(storeQuery,storeObj);
                return {data:store};
            } else {
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            }
        } catch (err) {
            console.log(`[OrganizationService] [updateStoreDetails] Error  - ${currentUser.organization}`,err);
            throw err;
        }
    }
    async getStoreList(params,currentUser) {
        try {
            let organization = await Organization.findOne({_id:currentUser.organization});
            if (organization) {
                let stores = await Store.find({organization:currentUser.organization});
                return {data:stores};
            } else {
                return {data:[]};
            }

        } catch (err) {
            console.log(`[OrganizationService] [getStoreList] Error - ${currentUser.organization}`,err);
            throw err;
        }
    }
    async getStoreDetail(storeId,currentUser) {
        try {
            let organization = await Organization.findOne({_id:currentUser.organization});
            if (organization) {
                let store = await Store.findOne({_id:storeId,organization:currentUser.organization});
                if(store){
                    return {data:store};
                }else {
                    throw new NoRecordFoundError(MESSAGES.STORE_NOT_EXISTS);
                }
    
            } else {
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            }

        } catch (err) {
            console.log(`[OrganizationService] [getStoreDetail] Error - ${currentUser.organization}`,err);
            throw err;
        }
    }
}
export default OrganizationService;
