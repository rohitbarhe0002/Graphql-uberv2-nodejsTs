import {
    CreateProductInput,
    GetProductInput,
    ProductModel,
  } from "../schema/product.schema";

  import { OrderModel,CreateOrderInput,GetOrderInput } from "../schema/order.schema";
  import { User } from "../schema/user.schema";
  
  class OrderService {
    async createOrder(input: CreateOrderInput) {
      return OrderModel.create(input);
    }
  
    async findOrders() {
      // Pagination login
      return OrderModel.find().lean();
    }
  
    async findSingleOrder(input: GetOrderInput) {
      return OrderModel.findOne(input).lean();
    }
  }
  
  export default OrderService;
  