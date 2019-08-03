import AuthController from '../controllers/AuthController';

export default {
    Mutation: {
        addUser: async(parent, args, context, info) => {
            const user = await AuthController.register(args);
            return user;
        },
        login: async(parent, args, context, info) => {
            const res = AuthController.login(args);
            return res;
        }
    },
}