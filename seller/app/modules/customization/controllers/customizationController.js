import CustomizationService from '../v1/services/customizationService';

const customizationService = new CustomizationService();

class CustomizationController {
    async storeCustomizationsGroup(req, res, next) {
        try {
            const data = req.body;
            const categoryVariant = await customizationService.createCustomizationGroups(data, req.user);
            return res.send(categoryVariant);
        } catch (error) {
            next(error);
        }
    }

    async getCustomizationsGroup(req, res, next) {
        try {
            const currentUser = req.user;
            const customizationGroups = await customizationService.getCustomizationGroups(currentUser);
            return res.json({ customizationGroups });
        } catch (error) {
            next(error);
        }
    }

    async updateCustomizationsGroup(req, res, next) {
        try {
            const currentUser = req.user;
            const data = req.body;
            const updateResult = await customizationService.updateCustomizationGroups(data, currentUser);
            return res.send(updateResult);
        } catch (error) {
            next(error);
        }
    }

    async deleteCustomizationGroup(req, res, next) {
        try {
            const currentUser = req.user;
            const deleteResult = await customizationService.deleteCustomizationGroups(currentUser);
            return res.send(deleteResult);
        } catch(error) {
            next(error);
        }
    }
}

export default CustomizationController;