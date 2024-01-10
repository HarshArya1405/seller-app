import Product from '../../models/product.model';
import ProductAttribute from '../../models/productAttribute.model';
import ProductCustomizationService from './productCustomization.service';
import productSchema from '../../v1/validationSchema/api-params-validation-schema/product.validate.schema';
import VariantGroup from '../../models/variantGroup.model';
import { Categories, SubCategories, Attributes } from '../../../../lib/utils/categoryVariant';
import Organization from '../../../organization/models/organization.model';
import Store from '../../../organization/models/store.model';
import s3 from '../../../../lib/utils/s3Utils';
import CustomMenuProduct from '../../models/customMenuProduct.model';
import CustomMenuTiming from '../../models/customMenuTiming.model';
import CustomMenu from '../../models/customMenu.model';
import MESSAGES from '../../../../lib/utils/messages';
import { DuplicateRecordFoundError, NoRecordFoundError } from '../../../../lib/errors';

const productCustomizationService = new ProductCustomizationService();

class ProductService {
    /**
     * create a  single product to the system
     * @param {*} data that combine porduct with customization & attributes
     * @param {*} currentUser 
     * @returns saved product
     */
    async create(data, currentUser) {
        try {
            // let query = {};

            const productExist = await Product.findOne({ productName: data.productName, organization: currentUser.organization });
            if (productExist) {
                throw new DuplicateRecordFoundError(MESSAGES.PRODUCT_ALREADY_EXISTS);
            }
            let productData = data.commonDetails;
    
            let product = new Product(productData);
            product.createdBy = currentUser.id;
            product.updatedBy = currentUser.id;
            product.organization = currentUser.organization;
            product.type = 'item';
            await product.save();

            // if (data.commonAttributesValues) {
            //     await this.createAttribute({ product: product._id, attributes: data.commonAttributesValues }, currentUser);
            // }
            // if (data.customizationDetails) {
            //     await productCustomizationService.create(product._id, data.customizationDetails, currentUser);
            // }
    
        
            return { data: product };
            
        } catch (err) {
            console.log(`[ProductService] [create] Error in creating product ${currentUser.organization}`, err);
            throw err;
        }
    }

    /**
    * create a  single product with its variant to the system
    * @param {*} data that combine porduct with variation , customization & attributes
    * @param {*} currentUser logged in user details
    * @returns saved product
    */
    async createWithVariants(data, currentUser) {
        try {
            const commonDetails = data.commonDetails;
            const commonAttributesValues = data.commonAttributesValues;
            const variantSpecificDetails = data.variantSpecificDetails;
            let variantGroup = new VariantGroup();
            variantGroup.organization = currentUser.organization;
            variantGroup.name = data.variantType;
            variantGroup.variationOn = data.variationOn;
            await variantGroup.save();
            let productObj = {};
            let product;
            productObj = { ...commonDetails };
            productObj.variantGroup = variantGroup._id;
            if (variantSpecificDetails && variantSpecificDetails.length > 0) {
                for (const variant of variantSpecificDetails) {
                    const variantAttributes = variant.variantAttributes;
                    productObj.variantGroup = variantGroup._id;
                    product = new Product(productObj);
                    product.quantity = variant.quantity;
                    product.organization = currentUser.organization;
                    product.MRP = variant.MRP;
                    product.type = 'item';
                    product.retailPrice = variant.retailPrice;
                    product.purchasePrice = variant.purchasePrice;
                    product.HSNCode = variant.HSNCode;
                    product.images = variant.images;
                    await product.save();
                    let attributeObj = {
                        ...commonAttributesValues, ...variantAttributes
                    };
                    await this.createAttribute({ product: product._id, attributes: attributeObj }, currentUser);
                }
            } else {
                product = new Product(productObj);
                product.organization = currentUser.organization;
                product.type = 'item';
                await product.save();
                let attributeObj = {
                    ...commonAttributesValues
                };
                await this.createAttribute({ product: product._id, attributes: attributeObj }, currentUser);
            }
            return product;
            // return {success:true};
        } catch (err) {
            console.log(`[ProductService] [create] Error in creating product ${currentUser.organization}`, err);
            throw err;
        }
    }
    /**
     * update product with its variant to the system
     * @param {*} data that combine porduct with variation , customization & attributes
     * @param {*} currentUser logged in user details
     * @returns saved product
     */
    async updateWithVariants(data, currentUser) {
        try {
            if (data.commonDetails._id) {
                let productData = await Product.findOne({ _id: data.commonDetails._id, organization: currentUser.organization });
                const commonDetails = data.commonDetails;
                const commonAttributesValues = data.commonAttributesValues;
                const variantSpecificDetails = data.variantSpecificDetails;
                let index = 1;
                for (const variant of variantSpecificDetails) {
                    const variantAttributes = variant.variantAttributes;
                    let productId;
                    let product = {};
                    let productObj = {};
                    productObj = { ...commonDetails };
                    delete productObj._id;
                    productObj.variantGroup = productData.variantGroup;
                    productObj.quantity = variant.quantity;
                    productObj.organization = currentUser.organization;
                    productObj.MRP = variant.MRP;
                    productObj.purchasePrice = variant.purchasePrice;
                    productObj.images = variant.images;
                    if (index === 1) {
                        productId = commonDetails._id;
                        await Product.updateOne({ _id: productId, organization: currentUser.organization }, productObj);
                    } else {
                        product = new Product(productObj);
                        productId = product._id;
                        await product.save();
                    }
                    let attributeObj = {
                        ...commonAttributesValues, ...variantAttributes
                    };
                    await this.createAttribute({ product: productId, attributes: attributeObj }, currentUser);
                    index += 1;
                }
            }
            return { success: true };

        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`, err);
            throw err;
        }
    }
    /**
     * internally used func for attribute store
     * @param {*} data attribute data 
     * @param {*} currentUser logged in user data
     * @returns true
     */
    async createAttribute(data, currentUser) {
        try {
            const attributes = data.attributes;
            for (const attribute in attributes) {
                // eslint-disable-next-line no-prototype-builtins
                if (attributes.hasOwnProperty(attribute)) {
                    let attributeExist = await ProductAttribute.findOne({ product: data.product, code: attribute, organization: currentUser.organization });
                    if (attributeExist) {
                        await ProductAttribute.updateOne({ product: data.product, code: attribute, organization: currentUser.organization }, { value: attributes[attribute] });
                    } else {

                        let productAttribute = new ProductAttribute();
                        productAttribute.product = data.product;
                        productAttribute.code = attribute;
                        productAttribute.value = attributes[attribute];
                        productAttribute.organization = currentUser.organization;
                        await productAttribute.save();
                    }
                }
            }
            return { success: true };
        } catch (err) {
            console.log(`[ProductService] [createAttribute] Error in - ${data.currentUser.organization}`, err);
            throw err;
        }
    }
    /**
     * 
     * @param {*} params keys that are user in filtering data 
     * @returns obj of products and count 
     */

    async list(params) {
        try {
            let query = {};
            if (params.name) {
                query.productName = { $regex: params.name, $options: 'i' };
            }
            if (params.organization) {
                query.organization = params.organization;
            }
            const data = await Product.find(query).sort({ createdAt: 1 }).skip(params.offset * params.limit).limit(params.limit);
            const count = await Product.count(query);
            let products = {
                count,
                data
            };
            return products;
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all organization ', err);
            throw err;
        }
    }
    /**
     * 
     * @param {*} params keys that are user in filtering data 
     * @returns obj of products and count after certain search 
     */
    async search(params) {
        try {
            let query = {};

            console.log('params------->', params);
            const orgs = await Organization.find({},).lean();
            let products = [];
            for (const org of orgs) {
                query.organization = org._id;
                query.published = true;
                if (params.name) {
                    query.productName = { $regex: '.*' + params.name + '.*' };
                }
                if (params.category) {
                    query.productCategory = { $regex: '.*' + params.category + '.*' };
                }
                // query.productName = {$regex: params.message.intent.item.descriptor.name,$options: 'i'}
                const data = await Product.find(query).sort({ createdAt: 1 }).skip(params.offset).limit(params.limit);
                if (data.length > 0) {
                    for (const product of data) {
                        let productDetails = product;
                        let images = [];
                        for (const image of productDetails.images) {
                            let imageData = await s3.getSignedUrlForRead({ path: image });
                            images.push(imageData.url);
                        }
                        product.images = images;
                    }
                    org.items = data;
                    products.push(org);
                }
            }
            //collect all store details by
            return products;
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all from organization ', err);
            throw err;
        }
    }
    /**
     * get one product by its id
     * @param {*} productId  id of requested product
     * @param {*} currentUser logged in user
     * @returns product data along with attributes and s3 files
     */
    async searchIncrementalPull(params, category) {
        try {
            let query = {};

            console.log('params------->', params);
            const orgs = await Organization.find({},).lean();
            let products = [];
            for (const org of orgs) {
                let productData = [];
                let customMenu = [];
                query.organization = org._id;
                let storeDetails = await Store.findOne({ organization: org._id });
                org.storeDetails = storeDetails;
                if (storeDetails?.logo) {
                    let storeImage = await s3.getSignedUrlForRead({ path: storeDetails.logo });
                    org.storeDetails.logo = storeImage.url;
                }
                query.published = true;
                if (category) {
                    query.productCategory = { $regex: '.*' + category + '.*' };
                }
                // query.productName = {$regex: params.message.intent.item.descriptor.name,$options: 'i'}
                //let product = await Product.findOne({_id:productId,organization:currentUser.organization}).populate('variantGroup').lean();

                const data = await Product.find(query).populate('variantGroup').sort({ createdAt: 1 }).skip(params.offset).limit(params.limit).lean();
                if (data.length > 0) {
                    for (let product of data) {
                        let productDetails = product;
                        let images = [];
                        for (const image of productDetails.images) {
                            let imageData = await s3.getSignedUrlForRead({ path: image });
                            images.push(imageData.url);
                        }
                        product.images = images;
                        let attributeData = [];
                        const attributes = await ProductAttribute.find({ product: product._id });
                        for (const attribute of attributes) {
                            let value = attribute.value;
                            if (attribute.code === 'size_chart') {
                                let sizeChart = await s3.getSignedUrlForRead({ path: attribute.value });
                                value = sizeChart?.url ?? '';
                            }
                            const attributeObj = {
                                'code': attribute.code,
                                'value': value
                            };
                            attributeData.push(attributeObj);
                        }
                        product.attributes = attributeData;
                        product.customizationDetails = await productCustomizationService.getforApi(product._id) ?? '';
                        productData.push(product);
                    }
                    // getting Menu for org -> 
                    let menus = await CustomMenu.find({ category: category, organization: org._id }).lean();
                    for (const menu of menus) {
                        let customMenuTiming = await CustomMenuTiming.findOne({ customMenu: menu._id, organization: org._id });
                        let images = [];
                        let menuObj = {
                            id: menu._id,
                            name: menu.name,
                            seq: menu.seq
                        };
                        for (const image of menu.images) {
                            let imageData = await s3.getSignedUrlForRead({ path: image });
                            images.push(imageData.url);
                        }
                        let menuQuery = {
                            organization: org._id,
                            customMenu: menu._id
                        };
                        let menuProducts = await CustomMenuProduct.find(menuQuery).sort({ seq: 'ASC' }).populate([{ path: 'product', select: ['_id', 'productName'] }]);
                        let productData = [];
                        for (const menuProduct of menuProducts) {
                            let productObj = {
                                id: menuProduct.product._id,
                                name: menuProduct.product.productName,
                                seq: menuProduct.seq,

                            };
                            productData.push(productObj);
                        }
                        menuObj.products = productData;
                        menuObj.images = images;
                        menuObj.timings = customMenuTiming?.timings ?? [];
                        customMenu.push(menuObj);
                    }
                    org.items = productData;
                    org.menu = customMenu;
                    products.push(org);
                }
            }
            //collect all store details by
            return { products };
        } catch (err) {
            console.log('[OrderService] [getAll] Error in getting all from organization ', err);
            throw err;
        }
    }

    async get(productId, currentUser) {
        try {
            let product = await Product.findOne({ _id: productId, organization: currentUser.organization }).populate('variantGroup').lean();
            if (!product) {
                throw new NoRecordFoundError(MESSAGES.PRODUCT_NOT_EXISTS);
            }
            let images = [];
            if (product.images && product.images.length > 0) {
                for (const image of product.images) {
                    let data = await s3.getSignedUrlForRead({ path: image });
                    images.push(data);
                }
                product.images = images;
            }
            const attributes = await ProductAttribute.find({ product: productId, organization: currentUser.organization });
            let attributeObj = {};
            for (const attribute of attributes) {
                attributeObj[attribute.code] = attribute.value;
            }
            let productData = {
                commonDetails: product,
                commonAttributesValues: attributeObj
            };

            return productData;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -', err);
            throw err;
        }
    }
    /**
     * get one product by its id along with its all variants
     * @param {*} productId  id of requested product
     * @param {*} currentUser logged in user
     * @returns product data along with attributes and s3 files along with its all variants
     */
    async ondcGet(productId) {
        try {
            let product = await Product.findOne({ _id: productId }).lean();
            if (!product) {
                return {};
            }
            let images = [];
            if (product.images && product.images.length > 0) {
                for (const image of product.images) {
                    let data = await s3.getSignedUrlForRead({ path: image });
                    images.push(data);
                }
                product.images = images;
            }
            const attributes = await ProductAttribute.find({ product: productId });
            let attributeObj = {};
            for (const attribute of attributes) {
                let value = attribute.value;
                if (attribute.code === 'size_chart') {
                    value = await s3.getSignedUrlForRead({ path: attribute.value });
                }
                attributeObj[attribute.code] = value;
            }
            let productData = {
                commonDetails: product,
                commonAttributesValues: attributeObj,
                customizationDetails: await productCustomizationService.get(productId, { organization: product.organization }),
            };
            const variantGroup = await VariantGroup.findOne({ _id: product.variantGroup });
            if (variantGroup) {
                productData.variationOn = variantGroup.variationOn ?? 'NA';
                productData.variantType = variantGroup.name ?? [];
            }

            return productData;

        } catch (err) {
            console.log('[OrganizationService] [ondcGet] Error in getting organization by id -', err);
            throw err;
        }
    }

    async ondcGetForUpdate(productId) {
        try {
            let product = await Product.findOne({ _id: productId }).lean();
            if (!product) {
                return {};
            }
            let images = [];
            if (product.images && product.images.length > 0) {
                for (const image of product.images) {
                    let data = await s3.getSignedUrlForRead({ path: image });
                    images.push(data);
                }
                product.images = images;
            }
            const attributes = await ProductAttribute.find({ product: productId });
            let attributeData = [];
            for (const attribute of attributes) {
                let value = attribute.value;
                if (attribute.code === 'size_chart') {
                    let sizeChart = await s3.getSignedUrlForRead({ path: attribute.value });
                    value = sizeChart?.url ?? '';
                }
                const attributeObj = {
                    'code': attribute.code,
                    'value': value
                };
                attributeData.push(attributeObj);
            }
            product.attributes = attributeData;
            product.customizationDetails = await productCustomizationService.getforApi(product._id) ?? '';
            return product;

        } catch (err) {
            console.log('[OrganizationService] [ondcGet] Error in getting organization by id -', err);
            throw err;
        }
    }

    async getWithVariants(productId, currentUser) {
        try {
            let product = await Product.findOne({ _id: productId, organization: currentUser.organization }).lean();
            let variants = [];
            variants = await Product.find({ _id: { $ne: product._id }, variantGroup: product.variantGroup, organization: currentUser.organization });

            let images = [];
            for (const image of product.images) {
                let data = await s3.getSignedUrlForRead({ path: image });
                images.push(data);
            }
            product.images = images;
            const attributes = await ProductAttribute.find({ product: productId });
            product.attributes = attributes;
            product.variants = variants;

            return product;

        } catch (err) {
            console.log('[OrganizationService] [get] Error in getting organization by id -', err);
            throw err;
        }
    }
    /**
        * update a  single product to the system
        * @param {*} data that combine porduct with customization & attributes
        * @param {*} currentUser  logged in user
        * @returns updated product
        */
    async update(productId, data, currentUser) {
        try {
            const commonDetails = data.commonDetails;
            const commonAttributesValues = data.commonAttributesValues;
            const product = await Product.findOne({ _id: productId, organization: currentUser.organization }).lean();
            let productObj = { ...product, ...commonDetails };
            await Product.updateOne({ _id: productId, organization: currentUser.organization }, productObj);
            if (commonAttributesValues) {
                await this.createAttribute({ product: productId, attributes: commonAttributesValues }, currentUser);
            }
            if (data.customizationDetails) {
                await productCustomizationService.create(product._id, data.customizationDetails, currentUser);
            }
            return { data: productObj };

        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`, err);
            throw err;
        }
    }
    /**
     * 
     * @param {*} productId 
     * @param {*} data 
     * @param {*} currentUser 
     * @returns 
     */

    async publish(productId, data, currentUser) {
        try {
            console.log('req.body---->', data);
            //TODO: add org level check and record not found validation
            let doc = await Product.findOneAndUpdate({ _id: productId }, data);//.lean();
            return data;

        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`, err);
            throw err;
        }
    }
    /**
     * list of category along with subcategory and attribute
     * @param {*} params filters for category and subcategory
     * @param {*} currentUser logged in user
     * @returns list of requested category along with subcategory and attributes
     */

    async categorySubcategoryAttributeList(params, currentUser) {
        try {
            let data = Attributes;
            if (params.category) {
                data = data.filter((obj) => obj.category === params.category);
            }
            if (params.subCategory) {
                data = data.find((obj) => obj.subCategory === params.subCategory);
            }
            return { data };

        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`, err);
            throw err;
        }
    }
    /**
    * list of category along with subcategory 
    * @param {*} params filters for category and subcategory
    * @param {*} currentUser logged in user
    * @returns list of requested category along with subcategory
    */
    async categorySubcategoryList(params, currentUser) {
        try {
            let data = SubCategories;
            if (params.category) {
                data = data.find((obj) => obj.category === params.category);
            }
            return { data };

        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`, err);
            throw err;
        }
    }
    /**
        * list of category 
        * @param {*} params filters for category
        * @param {*} currentUser logged in user
        * @returns list of requested category
        */
    async categoryList(params, currentUser) {
        try {
            let data = Categories;
            return { data };

        } catch (err) {
            console.log(`[OrganizationService] [get] Error in getting organization by id - ${currentUser.organization}`, err);
            throw err;
        }
    }

    async createCustomization(customizationDetails, currentUser) {
        try {
            if (customizationDetails) {
                const existingCustomization = await Product.findOne({ 
                    productName: customizationDetails.productName, 
                    organization: currentUser.organization 
                });
    
                if (!existingCustomization) {
                    let newCustomizationObj = {
                        ...customizationDetails,
                        organization: currentUser.organization,
                        type:'customization',
                        updatedBy: currentUser.id,
                        createdBy: currentUser.id,
                    };
                    let newCustomization = new Product(newCustomizationObj);
                    await newCustomization.save();
                    return newCustomization;
                } else {
                    throw new DuplicateRecordFoundError(MESSAGES.CUSTOMIZATION_ALREADY_EXISTS);
                }
            }
        } catch (err) {
            console.log(`[CustomizationService] [create] Error - ${currentUser.organization}`, err);
            throw err;
        }
    }    

    //TODO:Tirth - add filter on name and proper contion to find customization ,handle pagination(Done)

    async getCustomization(params) {
        try {
            let query = {
                type : 'customization'
            };
            if (params.name) {
                query.productName = { $regex: params.name, $options: 'i' };
            }
            if (params.organization) {
                query.organization = params.organization;
            }
    
            const data = await Product.find(query)
                .sort({ createdAt: 1 })
                .skip(params.offset)
                .limit(params.limit);
    
            const count = await Product.count(query);
    
            let customizations = {
                count,
                data
            };
            return customizations;
        } catch (err) {
            console.log('[CustomizationService] [getCustomization] Error:', err);
            throw err;
        }
    }
    
    
    async updateCustomization(customizationDetails, currentUser, customizationId) {
        try {
            //TODO:Tirth check if given name has already been use in other group and throw error(Done)
            if (customizationDetails) {
                const existingCustomization = await Product.findOne({
                    _id: customizationId,
                    organization: currentUser.organization
                });

                if (!existingCustomization) {
                    throw new NoRecordFoundError(MESSAGES.CUSTOMIZATION_RECORD_NOT_FOUND);
                }
        
                const isNameUsedInOtherGroup = await Product.findOne({
                    productName: customizationDetails.productName,
                    _id: { $ne: customizationId } 
                });
        
                if (isNameUsedInOtherGroup) {
                    throw new DuplicateRecordFoundError(MESSAGES.CUSTOMIZATION_ALREADY_EXISTS);
                }
    
                if (existingCustomization) {
                    // Update existing customization
                    await Product.findOneAndUpdate(
                        customizationId,
                        {
                            ...customizationDetails,
                            updatedBy: currentUser.id,
                        }
                    );
                    return { success: true };
                } else {
                    throw new NoRecordFoundError(MESSAGES.CUSTOMIZATION_RECORD_NOT_FOUND);
                }
            }
        } catch (err) {
            console.log(`[CustomizationService] [update] Error - ${currentUser.organization}`, err);
            throw err;
        }
    }
    
    async deleteCustomization(customizationId) {
        try {
            const deletedCustomization = await Product.findByIdAndDelete(customizationId);
            if (deletedCustomization) {
                return { success: true, deletedCustomization };
            } else {
                throw new NoRecordFoundError(MESSAGES.CUSTOMIZATION_RECORD_NOT_FOUND);
            }
        } catch (err) {
            console.log('[CustomizationService] [delete] Error:', err);
            throw err;
        }
    }
    
    
}
export default ProductService;
