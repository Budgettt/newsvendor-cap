import schemas from "../models/schema.js";

// Get all the scores
export const getAllScores = async (_, res) => {
  try {
    const scores = await schemas.Score.find({}).sort({
      averageProfitDifference: "ascending",
    });
    if (!scores) {
      res.status(404).json({ message: "Error: Failed to get all scores." });
      return;
    }
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Submit new score
export const postSubmitScore = async (req, res) => {
  try {
    const result = await schemas.Score.create(req.body);
    if (!result) {
      res.status(500).json({ message: "Error: Failed to submit score." });
      return;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
