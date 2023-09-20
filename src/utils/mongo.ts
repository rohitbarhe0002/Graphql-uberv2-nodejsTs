import mongoose from "mongoose";
import config from "config";

export async function connectToMongo() {
  try {
    // Set the strictQuery option to either true or false
 // or mongoose.set('strictQuery', false);
    await mongoose.connect(config.get("dbUri"));
    console.log("connected")
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
