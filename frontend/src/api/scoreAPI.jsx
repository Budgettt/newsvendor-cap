const ROOT_URL = window.location.origin; // Use once hosted
const LOCALURL = "http://localhost:5001";

const URL = LOCALURL;

export const getAllScores = async () => {
  try {
    const scores = fetch(`${URL}/score/getAllScores`)
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
    const scores = fetch(`${URL}/score/getFirst10Scores`)
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
      `${URL}/score/getTopTenScoresWithSpecificNumberOfRounds/${rounds}`
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
    const scores = fetch(`${URL}/score/getFirst100Scores`)
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
      `${URL}/score/getTopHundredScoresWithSpecificNumberOfRounds/${rounds}`
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

export const getTopTenScoresSpecificRoundsAndType = async (
  rounds,
  demandType
) => {
  try {
    const scores = await fetch(
      `${URL}/score/getTopTenScoresSpecificRoundsAndType/${rounds}/${demandType}`
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
  }
};

export const getTopHundredScoresSpecificRoundsAndType = async (
  rounds,
  demandType
) => {
  try {
    const scores = await fetch(
      `${URL}/score/getTopHundredScoresSpecificRoundsAndType/${rounds}/${demandType}`
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
  }
};

export const postSubmitScore = async (data) => {
  try {
    const res = await fetch(`${URL}/score/postSubmitScore`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const newScore = await res.json();
    return newScore;
  } catch (error) {
    console.error("Error: ", error);
    return;
  }
};
