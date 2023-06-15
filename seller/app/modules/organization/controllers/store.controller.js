import UserService  from '../v1/services/store.service';

const userService = new UserService();

class storeController {
    /**
   * Create a new user
   * @param {*} req    HTTP request object
   * @param {*} res    HTTP response object
   * @param {*} next   Callback argument to the middleware function
   * @return {callback}
   */
    async create(req, res, next) {
        try {

            console.log('user data------------------',req.body);
            const data = req.body;
            const user = await userService.create(data);
            return res.send(user);
    
        } catch (error) {
            console.log('[storeController] [createUser] Error -', error);
            next(error);
        }
    }

    async get(req, res, next) {
        try {

            console.log('user data------------------',req.body);
            const data = req.body;
            const user = await userService.invite(data);
            return res.send(user);

        } catch (error) {
            console.log('[storeController] [createUser] Error -', error);
            next(error);
        }
    }

    /**
   * Update user
   * @param {*} req    HTTP request object
   * @param {*} res    HTTP response object
   * @param {*} next   Callback argument to the middleware function
   * @return {callback}
   */
    async update(req, res, next) {
        const data = req.body;
        try {
            const user = await userService.addFields(data, req.user);
            res.send(user);
        } catch (err) {
            next(err);
        }
    }

    /**
   * Get single user by id
   * @param {*} req    HTTP request object
   * @param {*} res    HTTP response object
   * @param {*} next   Callback argument to the middleware function
   * @return {callback}
   */
    async list(req, res, next) {
        try {
            const currentUser=req.user;

            console.log('currentUser-------------->',currentUser);
            const user = await userService.get(req.params.userId,currentUser);
            return res.send(user);
        
        } catch (error) {
            console.log('[storeController] [getUser] Error -', error);
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const currentUser=req.user;

            console.log('currentUser-------------->',currentUser);
            const user = await userService.get(req.params.userId,currentUser);
            return res.send(user);
        
        } catch (error) {
            console.log('[storeController] [getUser] Error -', error);
            next(error);
        }
    }
}


export default storeController;
