import Joi from 'joi';
import product from '../database/models';
import { productSchema } from '../utils/validation/schema';

const Product = product.Product;

export default class ProductController {
    static async createProduct(newProductData, user) {
        const { name, description, price, quantity, image } = newProductData;

        await Joi.validate(newProductData, productSchema, { abortEarly: false });

        const newProduct = await Product.create({
            name,
            description,
            price,
            quantity,
            image,
            owner: user.id
        });
        return newProduct;
    }

    static async getAllProducts() {
        const products = await Product.findAll();
        if (!products.length) {
            throw new Error("There are no products for now");
        }
        return products;
    }

    static async getSingleProduct(id) {
        const product = await Product.findOne({ where: { id } });
        if (!product) {
            throw new Error("Product with this id does not exist");
        }

        return product;
    }

    static async deleteProduct(id) {
        const deletedProduct = await Product.destroy({ returning: true, where: { id } });
        if (!deletedProduct) {
            throw new Error("Product with this id does not exist");
        }
        return true;
    }

    static async updateProduct(id, updateProductData) {
        let { name, description, price, quantity } = updateProductData;
        const product = await Product.findOne({ where: { id } });

        if (!product) {
            throw new Error("Product with this id does not exist");
        }

        name = (name === undefined ? product.name : name);
        description = (description === undefined ? product.description : description);
        price = (price === undefined ? product.price : price);
        quantity = (quantity === undefined ? product.quantity : quantity);

        const updatedProduct = await Product.update({ name, description, price, quantity }, { returning: true, where: { id } });
        console.log(updatedProduct[0]);
        return updatedProduct;
    }
}