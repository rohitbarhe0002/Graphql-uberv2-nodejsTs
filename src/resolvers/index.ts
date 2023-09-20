import UserResolver from "./user.resolver";
import ProductResolver from "./product.resolver";
import OrderResolver from "./order.resolver";
import RestaurentMenuResolver from "./restaurentMenu.resolver";

export const resolvers = [UserResolver, ProductResolver,OrderResolver,RestaurentMenuResolver] as const;
