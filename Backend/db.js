import mongoose from 'mongoose';

// Replace with your actual MongoDB URI
const mongoURI = "mongodb://localhost:27017/inotebook";

export const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI); // No need for deprecated options
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
