import { BadRequestParameterError, NoRecordFoundError } from '../../../../lib/errors';
import MESSAGES from '../../../../lib/utils/messages';
import Product from '../../models/product.model';
import ProductCustomization from '../../models/productCustomization.model';
import ProductCustomizationGroup from '../../models/productCustomizationGroup.model';

class ProductCustomizationService {
    /**
     * internal func to store product cutomizations
     * @param {*} productId 
     * @param {*} customizationDetails 
     * @param {*} currentUser 
     * @returns true
     */
    async create(productId,customizationDetails,currentUser) {
        try {
            // let query = {};
            // let customizationGroups =  customizationDetails.customizationGroups;
            // if(customizationGroups && customizationGroups.length  > 0){
            //     for(const customizationGroup of customizationGroups){
            //         if(customizationGroup.isMandatory){
            //             if(customizationGroup.minQuantity !== 1){
            //                 throw new BadRequestParameterError(MESSAGES.MIN_IS_MANDATORY);
            //             }
            //         }else{
            //             if(customizationGroup.minQuantity !== 0){
            //                 throw new BadRequestParameterError(MESSAGES.MIN_ISNOT_MANDATORY);
            //             }
            //         }
            //     }
            // }
            const customizationExist = await ProductCustomizationGroup.find({product:productId,organization:currentUser.organization});
            if (customizationExist) {
                await ProductCustomizationGroup.deleteMany({product:productId,organization:currentUser.organization});
                await ProductCustomization.deleteMany({product:productId,organization:currentUser.organization});
            }
            if(customizationDetails){
                const customizationGroups = customizationDetails.customizationGroups;
                const customizations = customizationDetails.customizations;
                for(const customizationGroup of customizationGroups){
                    let customizationGroupObj = {
                        ...customizationGroup,
                        product:productId,
                        organization : currentUser.organization,
                        updatedBy : currentUser.id,
                        createdBy : currentUser.id,
                    };
                    let productCustomizationGroup = new ProductCustomizationGroup(customizationGroupObj);
                    await productCustomizationGroup.save();
                }
                for(const customization of customizations){
                    let childGroup = await ProductCustomizationGroup.findOne({product:productId,organization:currentUser.organization,id:customization.child});
                    let parentGroup = await ProductCustomizationGroup.findOne({product:productId,organization:currentUser.organization,id:customization.parent});
                    let customizationObj = {
                        ...customization,
                        product:productId,
                        childId:childGroup?._id ?? '',
                        parentId:parentGroup?._id ?? '',
                        organization : currentUser.organization,
                        updatedBy : currentUser.id,
                        createdBy : currentUser.id,
                    };
                    let productCustomizationGroup = new ProductCustomization(customizationObj);
                    await productCustomizationGroup.save();
                }
         
                return {success:true};
            }
        } catch (err) {
            console.log(`[ProductCustomizationService] [create] Error - ${currentUser.organization}`,err);
            throw err;
        }
    }
/**
 * get customization details for one product
 * @param {*} productId 
 * @param {*} currentUser 
 * @returns obj of customization details
 */
    async get(productId,currentUser){
        try {
            const product = await Product.findOne({_id: productId,organization:currentUser.organization});
            if(product){
                return {
                    customizationGroups : await ProductCustomizationGroup.find({product: productId,organization:currentUser.organization}),
                    customizations : await ProductCustomization.find({product: productId,organization:currentUser.organization}),
                };
           
            }
            throw new NoRecordFoundError(MESSAGES.PRODUCT_NOT_EXISTS);
        } catch (err) {
            console.log(`[ProductCustomizationService] [get] Error - ${currentUser.organization}`,err);
            throw err;
        }
    }
/**
 * 
 * @param {*} productId 
 * @returns 
 */
    async getforApi(productId){
        try {
            const product = await Product.findOne({_id: productId});
            if(product){
                return {
                    customizationGroups : await ProductCustomizationGroup.find({product: productId}),
                    customizations : await ProductCustomization.find({product: productId}),
                };
           
            }
            throw new NoRecordFoundError(MESSAGES.PRODUCT_NOT_EXISTS);
        } catch (err) {
            console.log('[ProductCustomizationService] [get] Error ',err);
            throw err;
        }
    }
    /**
     * get all customizations for a group
     * @param {*} groupId 
     * @param {*} productId 
     * @param {*} currentUser logged in user
     * @returns obj of customization details
     */
    async getCustomizationForGroup(groupId,productId,currentUser){
        try {
            const customizationGroup = await ProductCustomizationGroup.findOne({id: groupId,product:productId,organization:currentUser.organization});
            if(customizationGroup){
                return {
                    customizationGroups : customizationGroup,
                    customizations :await ProductCustomization.find({parent: customizationGroup.id,product:productId,organization:currentUser.organization}) ?? [],
                };
            }
            throw new NoRecordFoundError(MESSAGES.CUSTOMIZATION_GROUP_NOT_EXISTS);
        } catch (err) {
            console.log(`[ProductCustomizationService] [getCustomizationForGroup] Error - ${currentUser.organization}`,err);
            throw err;
        }
    }
/**
 * delete customizations for a group
 * @param {*} groupId 
 * @param {*} productId 
 * @param {*} currentUser  logged in user
 * @returns true
 */
    async deleteCustomizationForGroup(groupId,productId,currentUser){
        try {
            await ProductCustomization.updateMany({child: groupId,product:productId,organization:currentUser.organization},{child:''});
            const customizationGroup = await ProductCustomizationGroup.findOne({id: groupId,product:productId,organization:currentUser.organization});
            if(customizationGroup){
                let customizations = await ProductCustomization.find({parent: customizationGroup.id,product:productId,organization:currentUser.organization});
                for(const customization of customizations){
                    if(customization.child){
                        this.deleteCustomizationForGroup(customization.child,productId,currentUser);
                    }
                    await ProductCustomization.deleteOne({_id: customization._id,product:productId,organization:currentUser.organization});
                }
                await ProductCustomizationGroup.deleteOne({_id: customizationGroup._id,product:productId,organization:currentUser.organization});
            }
            return {success:true};
        } catch (err) {
            console.log(`[ProductCustomizationService] [deleteCustomizationForGroup] Error - ${currentUser.organization}`,err);
            throw err;
        }
    }

}
export default ProductCustomizationService;
