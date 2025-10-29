import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/db.js";

import testRoutes from "./routes/testRoute.js";
import scoreRoutes from "./routes/scoreRoute.js";

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
app.use("/score", scoreRoutes);

// Start server
connectMongoDB().then(() =>
  app.listen(PORT, (error) => {
    if (error) {
      console.log("Error: ", error);
      throw error;
    }
    console.log(`Server started on port: ${PORT}`);
  })
);
