import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import user from '../database/models/user'

const User = user.User;

export default class AuthController {
    static async register(newUserData) {
        const { email, username, password } = newUser;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            email,
            username,
            password: hash
        });

        return newUser;
    }
}