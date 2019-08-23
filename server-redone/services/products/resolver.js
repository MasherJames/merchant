import ProductController from "../controllers/ProductController";

export default {
  Mutation: {
    addProduct: async (parent, { productData }, { user }, info) => {
      if (!user) {
        throw new Error("Unauthenticated");
      }
      const product = ProductController.createProduct(productData, user);
      return product;
    },

    deleteProduct: async (parent, { id }, context, info) => {
      return ProductController.deleteProduct(id);
    },

    updateProduct: async (parent, { id, productUpdateData }, context, info) => {
      return ProductController.updateProduct(id, productUpdateData);
    }
  },
  Query: {
    products: async (parent, args, context, info) => {
      return ProductController.getAllProducts();
    },

    product: async (parent, { id }, context, info) => {
      return ProductController.getSingleProduct(id);
    }
  }
  Product: {
    __resolveReference: async() => {
      return await
    }
  }
  // Product: {
  //   owner: async product => {
  //     return { __typename: "User", id: product.userId };
  //   }
  // }
};
