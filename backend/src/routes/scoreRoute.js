import express from "express";
import {
  getAllScores,
  postSubmitScore,
} from "../controllers/scoreController.js";

const router = express.Router();

router.get("/getAllScores", getAllScores);
router.post("/postSubmitScore", postSubmitScore);

export default router;
