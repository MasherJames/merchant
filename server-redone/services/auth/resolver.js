import AuthController from "./contoller";

export default {
  Mutation: {
    addUser: async (parent, { userInput }, context, info) => {
      const user = AuthController.register(userInput);
      return user;
    }
  },
  Query: {
    login: async (parent, args, context, info) => {
      const res = AuthController.login(args);
      return res;
    }
  },
  User: {
    __resolveReference: async object => {
      return await Product.findOne({ where: { id: object.id } });
    }
  }
};
