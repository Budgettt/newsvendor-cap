import express from "express";
import {
  getAllScores,
  getFirst10Scores,
  getTopTenScoresWithSpecificNumberOfRounds,
  postSubmitScore,
} from "../controllers/scoreController.js";

const router = express.Router();

router.get("/getAllScores", getAllScores);
router.get("/getFirst10Scores", getFirst10Scores);
router.get(
  "/getTopTenScoresWithSpecificNumberOfRounds/:rounds",
  getTopTenScoresWithSpecificNumberOfRounds
);

router.post("/postSubmitScore", postSubmitScore);

export default router;
