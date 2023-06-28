import ProductCustomization from '../../models/productCustomization.model';
import ProductAddOns from '../../models/productAddOns.model';

class ProductCustomizationService {
    async create(data) {
        try {
            //creating Addons for product
            let productAddOns = new ProductAddOns();
            productAddOns.organizationId = data.organizationId;
            productAddOns.label = data.label;
            productAddOns.product = data.product;
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

    async listAddOns(params,productId) {
        try {
            const addOns = await ProductAddOns.findOne({product:productId}).lean();
            const customizations = await ProductCustomization.findOne({addOns:addOns._id});
            let data = {...addOns};
            data.customizations = customizations;
            return data;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -',err);
            throw err;
        }
    }

    async getCustomization(productId) {
        try {
            const addOns = await ProductAddOns.findOne({product:productId});
            const customizations = await ProductCustomization.findOne({addOns:addOns._id});
            let data = {...addOns};
            data.customizations = customizations;
            return data;

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
