import bcrypt from 'bcryptjs';
import Joi from 'joi';

import { userRegisterSchema, userSchemaLogin } from '../utils/validation/schema';
import user from '../database/models';
import token from '../utils/token';

const User = user.User;
export default class AuthController {
    static async register(newUserData) {
        const { email, username, password } = newUserData;

        await Joi.validate(newUserData, userRegisterSchema, { abortEarly:false });
        const existing = await User.findOne({ where: {email} });

        if(existing){
            throw new Error("User with this email already exists");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
            email,
            username,
            password: hash
        });

        return newUser;
    }

    static async login(loginData){
        const { email, password } = loginData;

        await Joi.validate(loginData, userSchemaLogin, {abortEarly:false});
        const currentuser = await User.findOne({where: { email }});

        if(!currentuser){
            throw new Error("There is no user with this email, please register");
        }

        const isPasswordMatch = bcrypt.compareSync(password, currentuser.password);

        if(!isPasswordMatch){
            throw new Error(`Wrong password for ${email}`);
        }

        const payload = {
            id: currentuser.id,
            email: currentuser.email,
            username: currentuser.username
        };

        return {
            userId: currentuser.id,
            email: currentuser.email,
            token: token(payload)
        };
    }
}