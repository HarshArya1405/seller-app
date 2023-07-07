import mongoose from'mongoose';
import { uuid } from 'uuidv4';

const userSchema = new mongoose.Schema({ //Users who has login ability should go under User schema
    _id:{
        type: String,
        required:true,
        default: () => uuid(),
    },
    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
        // required: true,
    },
    mobile: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    organizations: {
        type: String,
    },
    enabled: {
        type: Boolean,
        default:true
    },
    role: { type: String, ref: 'Role' },
    organization: { type: String, ref: 'Organization' },
    addressLine1:{
        type: String
    },
    addressLine2:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    pincode:{
        type: String
    },
    country:{
        type: String
    },
    isSystemGeneratedPassword: {
        type: Boolean,
        default:true
    },
    profilePic: {
        type: String,
    }
},{
    strict: true,
    timestamps:true
});
userSchema.index({mobile:1,email:1}, {unique: true});

const User = mongoose.model('User',userSchema);
module.exports = User;

