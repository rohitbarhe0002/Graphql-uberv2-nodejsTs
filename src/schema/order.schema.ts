
import { getModelForClass, index, prop, Ref } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";
import { customAlphabet } from "nanoid";
import { User } from "./user.schema";
import { IsNumber, MaxLength, Min, MinLength } from "class-validator";


@ObjectType()
@index({ orderId: 1 })
export class Order {
  @Field(() => String)
  @prop({ required: true, unique: true })
  orderID: string;

  @Field(() => String)
  @prop({ required: true })
  status: string;

  @Field(() => String)
  @prop({ required: true })
  deliveryAddress: string;

  @Field(() => Number)
  @prop({ required: true })
  price: string;

} 

export const OrderModel = getModelForClass<typeof Order>(Order);

@InputType()
export class CreateOrderInput {
@Field()
orderID: string;

@Field()
status: string;

@Field()
deliveryAddress: string;

  @IsNumber()
  @Min(1)
  @Field()
  price: Number;
}

@InputType()
export class GetOrderInput {
  @Field()
  orderId: string;
}



