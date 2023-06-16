import ProductCustomization from '../../models/productCustomization.model';
import ProductAddOns from '../../models/productAddOns.model';

class ProductCustomizationService {
    async create(data) {
        try {
            //creating Addons for product
            let productAddOns = new ProductAddOns();
            productAddOns.organizationId = data.organizationId;
            productAddOns.label = data.label;
            productAddOns.type = data.type;
            productAddOns.mandatory = data.mandatory;
            productAddOns= await productAddOns.save();

            //creating Customization for Addons
            for(const customization of data.customizations){
                let productCustomization = new ProductCustomization();
                productCustomization.organizationId = data.organizationId;
                productCustomization.addOns = productAddOns._id;
                productCustomization.label = customization.label;
                productCustomization.variant = customization.variant;
                productCustomization.minQty = customization.minQty;
                productCustomization.maxQty = customization.maxQty;
                productCustomization.price = customization.price;
                productCustomization= await productCustomization.save();
            }
            return productAddOns;
        } catch (err) {
            console.log(`[ProductCustomizationService] [create] Error in creating product ${data.organizationId}`,err);
            throw err;
        }
    }

    async listAddOns(params) {
        try {
            let query={};
            if(params.organization){
                query.organization =params.organization;
            }
            const data = await ProductAddOns.find(query).sort({createdAt:1});
            return data;
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all organization ',err);
            throw err;
        }
    }

    async getCustomization(addOnsId) {
        try {
            let customizations = await ProductCustomization.findOne({addOns:addOnsId});
            return customizations;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -',err);
            throw err;
        }
    }

    async update(addOnsId,data) {
        try {
            let productAddOns = await ProductAddOns({_id:addOnsId,organizationId:data.organizationId});
            if(productAddOns){
                productAddOns.organizationId = data.organizationId;
                productAddOns.label = data.label;
                productAddOns.type = data.type;
                productAddOns.mandatory = data.mandatory;
                productAddOns= await productAddOns.save();
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }



}
export default ProductCustomizationService;
