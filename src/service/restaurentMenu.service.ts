import { CreateRestaurentMenuInput,GetRestaurentMenuInput,RestuarentMenuModel } from "../schema/restaurentMenu.schema";
  
  class RestuarentMenuService {
    async createRestuarentMenu(input: CreateRestaurentMenuInput) {
      return RestuarentMenuModel.create(input);
    }
  
    async findRestuarentMenus() {
      // Pagination login
      return RestuarentMenuModel.find().lean();
    }
  
    async findSingleRestuarentMenu(input: GetRestaurentMenuInput) {
      return RestuarentMenuModel.findOne(input).lean();
    }
  }
  
  export default RestuarentMenuService;
  