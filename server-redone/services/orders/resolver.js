import AuthController from "../controllers/AuthController";

export default {
  Mutation: {
    addUser: async (parent, { userInput }, context, info) => {
      const user = AuthController.register(userInput);
      return user;
    },
    login: async (parent, args, context, info) => {
      const res = AuthController.login(args);
      return res;
    }
  }
};
