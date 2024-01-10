import CustomizationGroup from '../../models/customizationGroupModel';
import CustomizationGroupMapping from '../../models/customizationGroupMappingModel';
import { DuplicateRecordFoundError, NoRecordFoundError } from '../../../../lib/errors';
import MESSAGES from '../../../../lib/utils/messages';

class CustomizationService {
    /**
 * internal func to store cutomizations
 * @param {*} customizationDetails 
 * @param {*} currentUser 
 * @returns true
 */
    async createCustomizationGroups(customizationDetails, currentUser) {
        try {
            if (customizationDetails) {
                const existingGroup = await CustomizationGroup.findOne({
                    name: customizationDetails.name,
                    organization: currentUser.organization
                });

                if (!existingGroup) {
                    let customizationGroupObj = {
                        ...customizationDetails,  //TODO:Tirth why dumping all obj, add only specific fields
                        organization: currentUser.organization,
                        updatedBy: currentUser.id,
                        createdBy: currentUser.id,
                    };
                    let newCustomizationGroup = new CustomizationGroup(customizationGroupObj);
                    await newCustomizationGroup.save();

                    // Create an instance of CustomizationService
                    const customizationService = new CustomizationService(); //TODO:Tirth why creating obj for paren class, use "this" for that

                    // Call the function using the instance
                    await customizationService.mappingCustomizations(newCustomizationGroup._id, customizationDetails);
                    return { success: true };
                } else {
                    throw new DuplicateRecordFoundError(MESSAGES.CUSTOMIZATION_GROUP_ALREADY_EXISTS);
                }
            }
        } catch (err) {
            console.log(`[CustomizationService] [create] Error - ${currentUser.organization}`, err);
            throw err;
        }
    }

    async getCustomizationGroups(currentUser) {
        try {
            //TODO:Tirth add filter on name
            const existingGroups = await CustomizationGroup.find({ organization: currentUser.organization });
            return existingGroups;
        } catch (err) {
            console.log(`[CustomizationService] [getCustomizationGroups] Error - ${currentUser.organization}`, err);
            throw err;
        }
    }

    async updateCustomizationGroups(customizationDetails, currentUser) {
        try {
            if (customizationDetails) {
                //TODO:Tirth check if given name has already been use in other group and throw error
                const existingGroup = await CustomizationGroup.findOne({
                    name: customizationDetails.name,
                    organization: currentUser.organization
                });
                if (existingGroup) {
                    // Delete all mapping data associated with the existing group
                    await CustomizationGroupMapping.deleteMany({ parent: existingGroup._id });

                    await CustomizationGroup.findOneAndUpdate(
                        { _id: existingGroup._id },
                        {
                            ...existingGroup.toObject(),
                            ...customizationDetails,
                            updatedBy: currentUser.id,
                        },
                        { new: true }
                    );

                    return { success: true };
                } else {
                    throw new NoRecordFoundError(MESSAGES.CUSTOMIZATION_GROUP_NOT_EXISTS);
                }
            }
        } catch (err) {
            console.log(`[CustomizationService] [update] Error - ${currentUser.organization}`, err);
            throw err;
        }
    }

    async deleteCustomizationGroup(currentUser) {
        try {
            //TODO:Tirth write proper query 
            await CustomizationGroup.deleteMany({ organization: currentUser.organization });
            return { success: true };
        } catch (err) {
            console.log(`[CustomizationService] [deleteCustomizations] Error - ${currentUser.organization}`, err);
            throw err;
        }
    }

    async mappingCustomizations(newCustomizationGroupId, customizationDetails) {
        try {
            const { customizationId, nextGroupId, default: isDefault } = customizationDetails;

            if (nextGroupId && nextGroupId.length > 0) {
                for (const group of nextGroupId) {
                    const customizationMapping = new CustomizationGroupMapping({
                        customizationId,
                        parent: newCustomizationGroupId,
                        child: group.groupId,
                        default: isDefault,
                    });

                    await customizationMapping.save();
                }
            } else {
                const customizationMapping = new CustomizationGroupMapping({
                    customizationId,
                    parent: newCustomizationGroupId,
                    child: '',
                    default: isDefault,
                });

                await customizationMapping.save();
            }
            return { success: true };
        } catch (error) {
            console.log(`Error populating customizations: ${error}`);
            throw error;
        }
    }

    //TODO:Tirth add getOneGroup function also
}

export default CustomizationService;
