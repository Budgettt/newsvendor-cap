import express from "express";
import {
  getAllScores,
  getFirst100Scores,
  getFirst10Scores,
  getTopHundredScoresWithSpecificNumberOfRounds,
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
router.get("/getFirst100Scores", getFirst100Scores);
router.get(
  "/getTopHundredScoresWithSpecificNumberOfRounds/:rounds",
  getTopHundredScoresWithSpecificNumberOfRounds
);

router.post("/postSubmitScore", postSubmitScore);

export default router;
