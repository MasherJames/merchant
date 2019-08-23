import product from '../database/models';
const Product = product.Product;

export default class OrderController {
  static async createOrder(id) {
    const prodToOrder = await Product.findOne({where: { id }})
    if(!prodToOrder){
      throw new Error("Product with id does not exist");
    }
    
    
  }
}