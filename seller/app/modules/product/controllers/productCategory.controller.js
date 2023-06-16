import ProductCategoryService from '../v1/services/productCategory.service';
const productCategoryService = new ProductCategoryService();


class ProductCustomizationController {

    async create(req, res, next) {
        try {
            const data = req.body;
            data.organization = req.user.organization;
            const product = await productCategoryService.create(data);
            return res.send(product);

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
            const products = await productCategoryService.list(query);
            return res.send(products);

        } catch (error) {
            console.log('[OrderController] [list] Error -', error);
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const params = req.params;
            const product = await productCategoryService.update(params.categoryId, req.body);
            return res.send(product);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

}

export default ProductCustomizationController;
