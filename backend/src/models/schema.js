import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    age: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
const Test = mongoose.model("Test", testSchema);

const scoreSchema = new mongoose.Schema(
  {
    playerName: { type: String, required: true },
    totalRounds: { type: Number, required: true },
    totalProfit: { type: Number, required: true },
    optimalProfit: { type: Number, required: true },
    demandType: { type: String, required: true },
    averageProfitDifference: { type: Number, required: true },
    endDemandAvg: { type: Number, required: true },
    endStandardDev: { type: Number, required: true },
    history: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);
const Score = mongoose.model("Score", scoreSchema);

const schemas = { Test, Score };

export default schemas;
