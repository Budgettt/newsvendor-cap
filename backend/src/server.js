import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/db.js";

import testRoutes from "./routes/testRoute.js";

dotenv.config();

// Server
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/test", testRoutes);

// Start server
connectMongoDB().then(() =>
  app.listen(PORT, (err) => {
    if (err) {
      console.log("Error: ", err);
      throw err;
    }
    console.log(`Server started on port: ${PORT}`);
  })
);
