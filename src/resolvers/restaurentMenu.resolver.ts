import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql"; 
import Context from "../types/context";
import { CreateRestaurentMenuInput,GetRestaurentMenuInput,RestaurentMenu } from "../schema/restaurentMenu.schema";
import RestuarentMenuService from "../service/restaurentMenu.service";
@Resolver()
export default class RestaurentMenuResolver {
  constructor(private restaurentMenuService: RestuarentMenuService) {
    this.restaurentMenuService = new RestuarentMenuService();
  }

  @Authorized()
  @Mutation(() => RestaurentMenu)
  createRestaurentMenu(
    @Arg("input") input: CreateRestaurentMenuInput,
    @Ctx() context: Context
  ) {
    return this.restaurentMenuService.createRestuarentMenu({ ...input} );
  }

  @Authorized()
  @Query(() => [RestaurentMenu])
  RestaurentMenus() {
    return this.restaurentMenuService.findRestuarentMenus();
  }
  
@Authorized()
  @Query(() => RestaurentMenu)
  RestaurentMenu(@Arg("input") input: GetRestaurentMenuInput) {
    return this.restaurentMenuService.findSingleRestuarentMenu(input);
  }
}
