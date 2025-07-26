import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(`${MONGODB_URI}`, {
      // Optional: keeps things stable
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    
  }
};

export default connectDb;
