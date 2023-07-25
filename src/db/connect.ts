import mongoose from "mongoose";

// Connects to mongoDB
export const connectDB = function (url: string) {
  return mongoose.connect(url);
};
