import mongoose from "mongoose";

//function to connect to the mongodb
export const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('✅ Database Connected'));

await mongoose.connect(process.env.MONGODB_URI);


  } catch (error) {
    console.log('❌ MongoDB Connection Error:', error);
    process.exit(1); // exit if DB fails to connect
  }
};
