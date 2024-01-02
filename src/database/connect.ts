import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGODBURL;
async function connectDatabase() {
  try {
    if (!MONGO_URL) {
      throw new Error("MONGO_URL is undefined");
    }
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", (error as Error).message);
    process.exit(1);
  }
}

export default connectDatabase;
