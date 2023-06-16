import ProductCategory from '../../models/productCategory.model';

class ProductCategoryService {
    async create(data) {
        try {
            let productCategory = new ProductCategory();
            productCategory.parent = data.parent;
            productCategory.name = data.name;
            productCategory= await productCategory.save();

            return productCategory;
        } catch (err) {
            console.log(`[ProductCategoryService] [create] Error in creating product ${data.organizationId}`,err);
            throw err;
        }
    }

    async list(params) {
        try {
            let query={};
            if(params.name){
                query.name = { $regex: params.name, $options: 'i' };
            }
            if(params.organization){
                query.organization =params.organization;
            }
            const data = await ProductCategory.find(query).sort({createdAt:1}).skip(params.offset).limit(params.limit);
            const count = await ProductCategory.count(query);
            let products={
                count,
                data
            };
            return products;
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all organization ',err);
            throw err;
        }
    }

    async update(categoryId,data) {
        try {
            let productCategory = await ProductCategory.findOne({organizationId:data.organizationId,_id:categoryId});
            if(productCategory){
                productCategory.parent = data.parent;
                productCategory.name = data.name;
                productCategory= await productCategory.save();
            }
            return productCategory;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }



}
export default ProductCategoryService;
