
import mongoose from "mongoose";


export const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ECommerce");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};


