import AuthController from '../controllers/AuthController'

export default {
    Mutation: {
        addUser: async(parent, newUserData, context) => {
            const user = await AuthController.register(newUserData);
            return user;
        },
    },
}