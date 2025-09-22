import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/router.js";

const MONGO_URI =
  "mongodb+srv://admin123:irAWPW76bsMwf3r2@cluster0.7u7zm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParser());

// Establish connection to MongoDB
async function connectMongoDB() {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err}`);
  }
}
connectMongoDB();

// Establish routes
app.use("/", router());

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error: ", err);
    throw err;
  }
  console.log(`Server started on port: ${PORT}`);
});
