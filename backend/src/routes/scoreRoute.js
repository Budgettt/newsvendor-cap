import express from "express";
import {
  getAllScores,
  getFirst100Scores,
  getFirst10Scores,
  getTopHundredScoresSpecificRoundsAndType,
  getTopHundredScoresWithSpecificNumberOfRounds,
  getTopTenScoresSpecificRoundsAndType,
  getTopTenScoresWithSpecificNumberOfRounds,
  postSubmitScore,
} from "../controllers/scoreController.js";

const router = express.Router();

// GET
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
router.get(
  "/getTopTenScoresSpecificRoundsAndType/:rounds/:demandType",
  getTopTenScoresSpecificRoundsAndType
);
router.get(
  "/getTopHundredScoresSpecificRoundsAndType/:rounds/:demandType",
  getTopHundredScoresSpecificRoundsAndType
);

//POST
router.post("/postSubmitScore", postSubmitScore);

export default router;
