import express from "express";
import { getTest } from "../controllers/testController.js";

const router = express.Router();

router.get("/get", getTest);
// router.post("/post");
// router.put("/put");
// router.delete("/delete");

export default router;
