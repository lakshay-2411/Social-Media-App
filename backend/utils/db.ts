import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Mongo URI is missing");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
