import { getModelForClass, index, prop, Ref } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";
import { customAlphabet } from "nanoid";
import { User } from "./user.schema";
import { IsNumber, MaxLength, Min, MinLength } from "class-validator";


@ObjectType()
@index({ id: 1 })
export class RestaurentMenu {
  @Field(() => String)
  @prop({ required: true, unique: true })
  id: string;

  @Field(() => String)
  @prop({ required: true })
  name: string;

  @Field(() => Number)
  @prop({ required: true,default:1 })
  quantity: number;

  @Field(() => Number)
  @prop({ required: true })
  price: number;

} 

export const RestuarentMenuModel = getModelForClass<typeof RestaurentMenu>(RestaurentMenu);

@InputType()
export class CreateRestaurentMenuInput {
@Field()
id: string;

@Field()
name: string;


@Field()
quantity: Number;


  @Field()
  price: Number;
}

@InputType()
export class GetRestaurentMenuInput {
  @Field()
  id: string;
}



