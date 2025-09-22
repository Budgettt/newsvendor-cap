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

const schemas = { Test };

export default schemas;
