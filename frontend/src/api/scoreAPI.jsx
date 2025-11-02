import { LOCALURL } from "../App";

const ROOT_URL = window.location.origin; // Use once hosted

export const getAllScores = async () => {
  try {
    const scores = fetch(`${LOCALURL}/score/getAllScores`)
      .then((res) => res.json())
      .catch((error) => console.error(error));
    if (!scores) {
      console.error("Could not find any scores.");
      return;
    }
    return scores;
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};

export const getFirst10Scores = async () => {
  try {
    const scores = fetch(`${LOCALURL}/score/getFirst10Scores`)
      .then((res) => res.json())
      .catch((error) => console.error(error));
    if (!scores) {
      console.error("Could not find any scores.");
      return;
    }
    return scores;
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};

export const getTopTenScoresWithSpecificNumberOfRounds = async (rounds) => {
  try {
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
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};

export const getFirst100Scores = async () => {
  try {
    const scores = fetch(`${LOCALURL}/score/getFirst100Scores`)
      .then((res) => res.json())
      .catch((error) => console.error(error));
    if (!scores) {
      console.error("Could not find any scores.");
      return;
    }
    return scores;
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};

export const getTopHundredScoresWithSpecificNumberOfRounds = async (rounds) => {
  try {
    const scores = fetch(
      `${LOCALURL}/score/getTopHundredScoresWithSpecificNumberOfRounds/${rounds}`
    )
      .then((res) => res.json())
      .catch((error) => console.error(error));
    if (!scores) {
      console.error("Could not find any scores.");
      return;
    }
    return scores;
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};

export const postSubmitScore = async (data) => {
  try {
    const res = await fetch(`${LOCALURL}/score/postSubmitScore`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const newScore = await res.json();
    console.log(newScore);
    return newScore;
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};
