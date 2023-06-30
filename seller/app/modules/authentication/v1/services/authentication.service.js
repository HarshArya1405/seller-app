/* eslint-disable no-useless-catch */
import { DuplicateRecordFoundError, NoRecordFoundError,UnauthenticatedError, UnauthorisedError } from '../../../../lib/errors';
import MESSAGES from '../../../../lib/utils/messages';
import {encryptPIN,isValidPIN} from '../../../../lib/utils/utilityFunctions';
import AuthenticationJwtToken from '../../../../lib/utils/AuthenticationJwtToken';
// const mailer = new Mailer();
import User from '../../models/user.model';
import Role from '../../models/role.model';
import ServiceApi from '../../../../lib/utils/serviceApi';
import Organization from '../../../organization/models/organization.model';
import {JsonWebToken, Token} from '../../../../lib/authentication';
// import {Nes} from '../isc';
import { mergedEnvironmentConfig } from '../../../../config/env.config.js';
import UserService from './user.service';


const userService = new UserService();
class AuthenticationService {
    async login(currentUser, data) {
        try {
            const loginTimestamp = new Date().getTime();
            //find user with email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(data.userName.match(emailRegex)){
                data.userName = data.userName.toLowerCase();
            }

            let currentUser = await User.findOne({$or:[{email:data.userName},{mobile:data.userName}]}).populate([{path:'role'},{path:'organization',select:['name','_id','storeDetails']}]).lean();
            if (!currentUser) {
                throw new UnauthenticatedError(MESSAGES.INVALID_PIN);
            }
            if(!currentUser.enabled){
                throw new UnauthenticatedError(MESSAGES.LOGIN_ERROR_USER_ACCOUNT_DEACTIVATED);
            }
            console.log({currentUser})
            console.log({data})
            let PIN = '';
            let currentPIN = '';
            PIN = data.password;
            currentPIN = currentUser.password;
            // verify current PIN
            const isValid = await isValidPIN('' + PIN, currentPIN);
            // if (!isValid) {
            //     throw new UnauthenticatedError(MESSAGES.INVALID_PIN);
            // }

            if (!isValid) {
                //create login attempt and validate is user is banned
                let bannedUser =  await userService.logUserLoginAttempt({userId:currentUser._id,ip:'',success:false});

                if(bannedUser){
                    throw new UnauthenticatedError(MESSAGES.LOGIN_ERROR_USER_ACCOUNT_BANNED);
                }else{
                    throw new UnauthenticatedError(MESSAGES.INVALID_PIN);
                }

            }else{
                //create login attempt and validate is user is banned
                let bannedUser =  await userService.logUserLoginAttempt({userId:currentUser._id,ip:'',success:true});

                console.log('banned user------------>',bannedUser);

                if(bannedUser){
                    console.log('banned user--------insid---->',bannedUser);

                    throw new UnauthenticatedError(MESSAGES.LOGIN_ERROR_USER_ACCOUNT_BANNED);
                }
            }

            // JWT token payload object
            const tokenPayload = {
                user: {
                    id: currentUser._id,
                    role:currentUser.role,
                    organization:currentUser?.organization?._id
                },
                lastLoginAt: loginTimestamp,
            };
            // create JWT access token
            const JWTToken = await AuthenticationJwtToken.getToken(tokenPayload);
            delete currentUser.password;

            if(currentUser.organization ){
                if(currentUser.organization?.storeDetails?.supportDetails){
                    currentUser.organization.storeDetailsAvailable = true;
                }else{
                    currentUser.organization.storeDetailsAvailable = false;
                }
                delete currentUser.organization.storeDetails;
            }


            myCache.set( `${currentUser._id}-${JWTToken}`, {userId:currentUser._id,token:JWTToken} );

            console.log(myCache.get(`${currentUser._id}-${JWTToken}`));
            return { user: currentUser, token: JWTToken };
        } catch (err) {
            throw err;
        }
    }

    async signUp(currentUser, data) {
        try {
            data.userName = data.userName.toLowerCase();
            let userQuery = {
                $or:[
                    {email:data.userName.toLowerCase()},
                    {mobile:data.userName}
                ]
            };
            const userExist = await User.findOne(userQuery);

            if (userExist) {
                throw new DuplicateRecordFoundError(MESSAGES.USER_ALREADY_EXISTS);
            }
            let password = Math.floor(1000 + Math.random() * 9000);

            const encryptPassword = await encryptPIN('' + password);

         
            let user = new User();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(data.userName.match(emailRegex)){
                user.email = data.userName;
                let mailData = { temporaryPassword: password, user: user };

                console.log('maildata---->',mailData);
                //
                ServiceApi.sendEmail(
                    {
                        receivers: [data.userName],
                        template: 'SIGN_UP',
                        data: mailData,
                    },
                    user, null
                );
    
            }else{
                user.mobile = data.userName;
                //send otp to mobile
            }
            let role = await Role.findOne({name: 'Super Admin'});
            user.role = role._id;
            user.password = encryptPassword;
            user.isSystemGeneratedPassword = true;
            await user.save();

            console.log('OTP-----------OTP---------OTP-------->',{password});
            return { msg: 'OTP sent to your mobile no./email' };
        } catch (err) {
            throw err;
        }
    }

    async forgotPassword(data) {
        try {
            let query = {
                $or:[
                    {email:data.userName.toLowerCase()},
                    {mobile:data.userName}
                ]
            };
            let user = await User.findOne(query);

            // Throw error if user does not exist
            if (!user) {
                throw new NoRecordFoundError(MESSAGES.USER_NOT_EXISTS);
            }
            user.isSystemGeneratedPassword = true;

            // await user.save();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(data.userName.match(emailRegex)){
                const baseUrl = 'http://127.0.0.1:3000/auth'; //TEMP TODO chang from env
                const resetPasswordLinkToken = await this.createResetPasswordLinkToken(user.id, {});
                const resetPasswordLink = `${baseUrl}/reset-password/${user.id}/${resetPasswordLinkToken}`;
                console.log('resetPasswordLink-------------------->',resetPasswordLink);
                let mailData = { resetPasswordLink: resetPasswordLink, user: user};

                console.log('maildata---->',mailData);
                //
                ServiceApi.sendEmail(
                    {
                        receivers: [data.userName],
                        template: 'FORGOT_PASSWORD',
                        data: mailData,
                    },
                    user, null
                );
                await user.save();
                return { msg: 'Reset password link has been sent to your email' };

            }else{
                let password = Math.floor(1000 + Math.random() * 9000);
                console.log('OTP for user---------------------------->',password);
                data.password = await encryptPIN('' + password);
    
                user.password = data.password;
                await user.save();
                return { msg: 'OTP sent to your mobile no./email' };
            }

        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }

    createResetPasswordLinkToken(userId, tokenPayload) {
        return new Promise((resolve, reject) => {

            const tokenSecret =  mergedEnvironmentConfig.jwtForResetPasswordSecret;
            // create token instance with payload and expiry
            const token = new Token(tokenPayload, 864000);
            // create JWT instance by giving secret or key
            const jwt = new JsonWebToken({secret: userId + tokenSecret});
            // sign token using JWT secret key
            jwt.sign(token).then((signedToken) => {
                resolve(signedToken);
            }).catch((err) => {

                reject(err);
            });
        });
    }

    /** Reset Password
   *
   * @param currentUser
   * @param data
   * @returns {Promise<unknown>}
   */
    async resetPassword(currentUser, data) {
        try {
            let user = await User.findOne({_id:currentUser.id});

            // Throw error if user does not exist
            if (!user) {
                throw new NoRecordFoundError(MESSAGES.USER_NOT_EXISTS);
            }
            user.password = await encryptPIN('' + data.password);
            user.isSystemGeneratedPassword = false;
            //save user to database
            await user.save();
            return { message: 'reset Password successfull' };
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }

    async resetPasswordUsingLink(data, token) {
        try {
            let user = await User.findOne({_id:data.userId});

            // Throw error if user does not exist
            if (!user) {
                throw new NoRecordFoundError(MESSAGES.USER_NOT_EXISTS);
            }

            const secret =  mergedEnvironmentConfig.jwtForResetPasswordSecret;
            // create JWT instance by giving secret or key
            // Here secret is cancatenation of user id and secret value from config file. This is to allow link to be used only once
            const jwt = new JsonWebToken({secret: user.id + secret});
            // sign token using JWT secret key
            await jwt.verify(data.token);

            user.password = await encryptPIN('' + data.password);
            user.isSystemGeneratedPassword = false;
            //save user to database
            await user.save();
            return { message: 'reset Password successfull' };
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }
    /** update user's own Password
   *
   * @param currentUser
   * @param data
   * @returns {Promise<unknown>}
   */
    async updatePassword(data) {
        try {
            // Find user by id
            let user = await User.findOne({email:data.email},{enabled:0});
            // Throw error if user does not exist
            if (!user) {
                throw new NoRecordFoundError(MESSAGES.USER_NOT_EXISTS);
            }
            const password  = data.currentPassword;
            const currentPassword = user.password;
            // verify current PIN
            const isValid = await isValidPIN('' + password, currentPassword);

            if (!isValid) {
                throw new UnauthenticatedError(MESSAGES.INVALID_PIN);
            }
            user.password = await encryptPIN('' + data.password);
            user.isSystemGeneratedPassword = false;
            //save user to database
            await user.save();
            return { message: 'Password Update Successfull' };
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }

    async updateUserEmail(data) {
        try {
            // Find user by id
            let user = await User.findOne({email:data.oldEmail},{enabled:0});
            // Throw error if user does not exist
            if (!user) {
                throw new NoRecordFoundError(MESSAGES.USER_NOT_EXISTS);
            }
            user.email  = data.email;
            await user.save();
            return { message: 'Email Update Successfull' };
        } catch (err) {
            if (err.statusCode === 404)
                throw new NoRecordFoundError(MESSAGES.ORGANIZATION_NOT_EXISTS);
            throw err;
        }
    }

    async setPassword({ id, password,template }, currentUser) {
        let user = await User(currentUser.organizationId).findOne({ selector: { id } });
        // Throw error if user does not exist
        if (!user) {
            throw new NoRecordFoundError(MESSAGES.USER_NOT_EXISTS);
        }
        user.password = await encryptPIN('' + password);
        user.isOTPLoginEnabled = true;
        //save user to database
        let result = await User(currentUser.organizationId).update(user);
        const q = {
            selector:{
                id: currentUser.organizationId
            }
        };
        const organization = await Organization().findOne(q);
        let mailData = { temporaryPassword: password, user: user, organization};
        let name = 'FORGOT_PASSWORD';
        if(template){
            name = template.name;
            mailData = {...mailData, ...template.data };
        }
        // mailer[name]({
        //     receivers: [user.email],
        //     data: mailData,
        // }).send();

        let notification = await Nes(user);
        let notificationData = {
            receivers: [user.email],
            data: mailData,
            template:name
        };

        try{
            await notification.post('/email', notificationData);
        }catch (err) {
            console.log(err);
        }

        return result;
    }

    /**
     * Create a new role
     * @param {Object} data
     * @param {String} [data.name] Mandatory  Name of the role
     * @return {role details}
     */
    createRole(data, currentUser, permission) {
        return new Promise(async (resolve, reject) => {
            try {
                const name = data.name.trim();

                let role = await Role.findOne({
                    where: {
                        name
                    }
                });

                // If role with given name already exists
                if (role) {
                    throw new DuplicateRecordFoundError(MESSAGES.ROLE_ALREADY_EXISTS);
                }

                let newRole = new Role();

                newRole.name = data.name;

                role = await newRole.save();

                resolve(role);
            } catch (err) {
                console.log(err);
                reject(err);
            }
        });
    }

}

export default AuthenticationService;
