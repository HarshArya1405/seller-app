import OrganizationService from '../v1/services/organization.service';

const organizationService = new OrganizationService();

class OrganizationController {
    /**
   * Create organization
   * @param {*} req    HTTP request object
   * @param {*} res    HTTP response object
   * @param {*} next   Callback argument to the middleware function
   * @return {callback}
   **/
    async create(req, res, next) {
        try {
            const data = req.body;
            const organization = await organizationService.create(data,req.user);
            return res.send(organization);

        } catch (error) {
            console.log('[OrderController] [create] Error -', error);
            next(error);
        }     
    }

    async signup(req, res, next) {
        try {
            const data = req.body;
            const organization = await organizationService.signup(data);
            return res.send(organization);

        } catch (error) {
            console.log('[OrderController] [create] Error -', error);
            next(error);
        }
    }


    /**
   * Get all org
   * @param {*} req    HTTP request object
   * @param {*} res    HTTP response object
   * @param {*} next   Callback argument to the middleware function
   * @return {callback}
   **/
    async list(req, res, next) {
        try {
            const query = req.query;
            query.offset = parseInt(query.offset);
            query.limit = parseInt(query.limit);
            const organizations = await organizationService.list(query);
            return res.send(organizations);

        } catch (error) {
            console.log('[OrderController] [list] Error -', error);
            next(error);
        }
    }
    /**
 * get one org by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
    async get(req, res, next) {
        try {
            const params = req.params;
            const organizations = await organizationService.get(params.organizationId,req.user);
            return res.send(organizations);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const params = req.params;
            const data = req.body;
            const organizations = await organizationService.update(params.id,data,req.user);
            return res.send(organizations);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

    // ORG Stores 

    async setStoreDetails(req, res, next) {
        try {
            const data = req.body;
            const store = await organizationService.setStoreDetails(data,req.user);
            return res.send(store);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

    async getCategories(req, res, next) {
        try {
            const params = req.params;
            const store = await organizationService.getCategories(params,req.user);
            return res.send(store);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

    async updateStoreDetails(req, res, next) {
        try {
            const params = req.params;
            const data = req.body;
            const store = await organizationService.updateStoreDetails(params.storeId,data,req.user);
            return res.send(store);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

    async getStoreList(req, res, next) {
        try {
            const stores = await organizationService.getStoreList(req.params,req.user);
            return res.send(stores);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }
    async getStoreDetail(req, res, next) {
        try {
            const params = req.params;
            const store = await organizationService.getStoreDetail(params.storeId,req.user);
            return res.send(store);

        } catch (error) {
            console.log('[OrderController] [get] Error -', error);
            next(error);
        }
    }

}

export default OrganizationController;
