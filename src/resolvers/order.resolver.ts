import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql"; 
import Context from "../types/context";
import OrderService from "../service/order.service";
import { CreateOrderInput,GetOrderInput,Order } from "../schema/order.schema";
@Resolver()
export default class OrderResolver {
  constructor(private orderService: OrderService) {
    this.orderService = new OrderService();
  }

  @Authorized()
  @Mutation(() => Order)
  createOrder(
    @Arg("input") input: CreateOrderInput,
    @Ctx() context: Context
  ) {
    return this.orderService.createOrder({ ...input} );
  }

  @Authorized()
  @Query(() => [Order])
  Orders() {
    return this.orderService.findOrders();
  }
@Authorized()
  @Query(() => Order)
  order(@Arg("input") input: GetOrderInput) {
    return this.orderService.findSingleOrder(input);
  }
}
