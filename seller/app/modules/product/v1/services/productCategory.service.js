import { DuplicateRecordFoundError } from '../../../../lib/errors';
import MESSAGES from '../../../../lib/utils/messages';
import ProductCategory from '../../models/productCategory.model';

class ProductCategoryService {
    async create(data) {
        try {
            let productCategoryExist = await ProductCategory.findOne({organizationId:data.organizationId,name:data.name});
            if(!productCategoryExist){
                let productCategory = new ProductCategory();
                productCategory.organizationId = data.organizationId;
                productCategory.parent = data.parent;
                productCategory.name = data.name;
                productCategory= await productCategory.save();
                return productCategory;
            }
            throw new DuplicateRecordFoundError(MESSAGES.CATEGORY_ALREADY_EXISTS);
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
            query.parent = {$eq : ''};
            if(params.organization){
                query.organization =params.organization;
            }
            const data = await ProductCategory.find(query).sort({createdAt:1}).skip(params.offset).limit(params.limit);
            const count = await ProductCategory.count(query);
            let categoryData = [];
            for(const category of data){
                let subCategory = await ProductCategory.find({parent:category._id}).sort({createdAt:1}).skip(params.offset).limit(params.limit);
                let categoryObj = {
                    _id:category._id,
                    name:category.name,
                    subCategory:subCategory.map((data)=>{ return {_id:data._id,name:data.name}} )
                };
                categoryData.push(categoryObj);
            }
            let products={
                count,
                data:categoryData
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
