import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  CreateProductInput,
  GetProductInput,
  Product,
} from "../schema/product.schema";
import ProductService from "../service/product.service";
import Context from "../types/context";

@Resolver()
export default class ProductResolver {
  constructor(private productService: ProductService) {
    this.productService = new ProductService();
  }

  @Authorized()
  @Mutation(() => Product)
  createProduct(
    @Arg("input") input: CreateProductInput,
    @Ctx() context: Context
  ) {
    const user = context.user!;
    return this.productService.createProduct({ ...input, user: user?._id });
  }

  @Authorized()
  @Query(() => [Product])
  products() {
    return this.productService.findProducts();
  }

@Authorized()
  @Query(() => Product)
  product(@Arg("input") input: GetProductInput) {
    return this.productService.findSingleProduct(input);
  }
  
  @Authorized()
  @Mutation(() => String) 
  async ProductDelete(@Arg("input") input: GetProductInput) {
    try {
      await this.productService.deleteProduct(input);
      return "Product deleted successfully"; // Return a success message
    } catch (error) {
      // Handle errors (e.g., product not found, permission issues, etc.)
      throw new Error("Failed to delete product");
    }
  }
  

}
