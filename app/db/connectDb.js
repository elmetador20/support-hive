import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/code", {
      // Optional: keeps things stable
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    
  }
};

export default connectDb;
