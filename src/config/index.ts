import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/test",
};

export default config;
