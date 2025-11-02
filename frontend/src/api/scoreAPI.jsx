import { LOCALURL } from "../App";

const ROOT_URL = window.location.origin; // Use once hosted

export const getAllScores = async () => {
  const scores = fetch(`${LOCALURL}/score/getAllScores`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
  if (!scores) {
    console.error("Could not find any scores.");
    return;
  }
  return scores;
};

export const getFirst10Scores = async () => {
  const scores = fetch(`${LOCALURL}/score/getFirst10Scores`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
  if (!scores) {
    console.error("Could not find any scores.");
    return;
  }
  return scores;
};

export const getTopTenScoresWithSpecificNumberOfRounds = async (rounds) => {
  console.log(`api call: rounds = ${rounds}`);
  const scores = fetch(
    `${LOCALURL}/score/getTopTenScoresWithSpecificNumberOfRounds/${rounds}`
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));
  if (!scores) {
    console.error("Could not find any scores.");
    return;
  }
  return scores;
};
