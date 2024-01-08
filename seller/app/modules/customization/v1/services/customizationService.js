import customizationModel from '../../models/customizationModel';
import CustomizationGroup from '../../models/customizationGroupModel';

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
                    const existingGroups = await CustomizationGroup.find({ organization: currentUser.organization });
        
                    const customizationGroups = customizationDetails.customizationGroups;
        
                    for (const customizationGroup of customizationGroups) {
                        // Check for duplicate customization by name
                        const existingGroup = existingGroups.find(group => group.name === customizationGroup.name);
                        if (!existingGroup) {
                            let customizationGroupObj = {
                                ...customizationGroup,
                                organization: currentUser.organization,
                                updatedBy: currentUser.id,
                                createdBy: currentUser.id,
                            };
                            let newCustomizationGroup = new CustomizationGroup(customizationGroupObj);
                            await newCustomizationGroup.save();
                        }
                    }
        
                    return { success: true };
                }
            } catch (err) {
                console.log(`[CustomizationService] [create] Error - ${currentUser.organization}`, err);
                throw err;
            }
        }

        async getCustomizationGroups(currentUser) {
            try {
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
                    const existingGroups = await CustomizationGroup.findOne({ organization: currentUser.organization });
        
                    const customizationGroups = customizationDetails.customizationGroups;
        
                    for (const customizationGroup of customizationGroups) {
                        // Check for existing group by name
                        const existingGroup = existingGroups.find(group => group.name === customizationGroup.name);
                        if (existingGroup) {
                            // Update existing group with new details
                            await customizationGroupModel.findOneAndUpdate(
                                { _id: existingGroup._id },
                                {
                                    ...customizationGroup,
                                    organization: currentUser.organization,
                                    updatedBy: currentUser.id,
                                }
                            );
                        } else {
                            // If group doesn't exist, create a new one
                            let customizationGroupObj = {
                                ...customizationGroup,
                                organization: currentUser.organization,
                                updatedBy: currentUser.id,
                                createdBy: currentUser.id,
                            };
                            let newCustomizationGroup = new CustomizationGroup(customizationGroupObj);
                            await newCustomizationGroup.save();
                        }
                    }
        
                    return { success: true };
                }
            } catch (err) {
                console.log(`[CustomizationService] [update] Error - ${currentUser.organization}`, err);
                throw err;
            }
        }

        async deleteCustomizationGroup(currentUser) {
            try {
                await CustomizationGroup.deleteMany({ organization: currentUser.organization });
                return { success: true };
            } catch (err) {
                console.log(`[CustomizationService] [deleteCustomizations] Error - ${currentUser.organization}`, err);
                throw err;
            }
        }
}

export default CustomizationService;