import ProductCustomizationService from '../v1/services/productCustomization.service';
const productCustomizationService = new ProductCustomizationService();


class ProductCustomizationController {

    async create(req, res, next) {
        try {
            const data = req.body;
            data.organization = req.user.organization;
            const productCustomization = await productCustomizationService.create(data);
            return res.send(productCustomization);

        } catch (error) {
            console.log('[OrderController] [create] Error -', error);
            next(error);
        }
    }


    async list(req, res, next) {
        try {
            const query = req.query;
            query.offset = parseInt(query.offset ?? 0);
            query.limit = parseInt(query.limit ?? 100);
            query.organization = req.user.organization;
            const productCustomization = await productCustomizationService.listAddOns(query,req.params.productId);
            return res.send(productCustomization);

        } catch (error) {
            console.log('[OrderController] [list] Error -', error);
            next(error);
        }
    }

    async get(req, res, next) {
        try {
            const params = req.params;
            const productCustomization = await productCustomizationService.getCustomization(params);
            return res.send(productCustomization);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const params = req.params;
            const productCustomization = await productCustomizationService.update(params.addOnsId, req.body);
            return res.send(productCustomization);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

}

export default ProductCustomizationController;
