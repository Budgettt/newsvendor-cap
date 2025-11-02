import { useEffect, useState } from "react";
import "../styles/HomePage.css";
import { Link } from "react-router";
import {
  getAllScores,
  getTopHundredScoresWithSpecificNumberOfRounds,
} from "../api/scoreAPI";

const LeaderboardTable = ({ scores, setScoreData }) => {
  const [scoreFilter, setScoreFilter] = useState("All");

  const [buttonActiveAll, setButtonActiveAll] = useState(true);
  const [buttonActive5, setButtonActive5] = useState(false);
  const [buttonActive10, setButtonActive10] = useState(false);
  const [buttonActive20, setButtonActive20] = useState(false);

  const renderRows = () => {
    return scores.map((score, i) => {
      return (
        <tr>
          <td key={i}>{i + 1}</td>
          <td>{score.playerName}</td>
          <td>{score.demandType}</td>
          <td>{score.averageProfitDifference}%</td>
          <td>{score.totalRounds}</td>
        </tr>
      );
    });
  };

  const resetButtonStates = () => {
    setButtonActiveAll(false);
    setButtonActive5(false);
    setButtonActive10(false);
    setButtonActive20(false);
  };

  const handleClickAllButton = () => {
    resetButtonStates();
    setButtonActiveAll(true);
    setScoreFilter("All");
  };

  const handleClick5Button = () => {
    resetButtonStates();
    setButtonActive5(true);
    setScoreFilter("5");
  };

  const handleClick10Button = () => {
    resetButtonStates();
    setButtonActive10(true);
    setScoreFilter("10");
  };

  const handleClick20Button = () => {
    resetButtonStates();
    setButtonActive20(true);
    setScoreFilter("20");
  };

  useEffect(() => {
    const getScores = async () => {
      if (scoreFilter === "All") {
        const newscores = await getAllScores();
        setScoreData(newscores);
      } else {
        const newscores = await getTopHundredScoresWithSpecificNumberOfRounds(
          Number(scoreFilter)
        );
        setScoreData(newscores);
      }
    };
    getScores();
  }, [scoreFilter]);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <div className="leaderboard-buttons-box">
        <div className="leaderboard-buttons-right">
          <h4>Number of Rounds: </h4>
        </div>
        <div className="leaderboard-buttons-left">
          <button
            onClick={handleClickAllButton}
            className={
              buttonActiveAll ? "btn leaderboard-btn" : "btn leaderboard2-btn"
            }
          >
            All
          </button>
          <button
            onClick={handleClick5Button}
            className={
              buttonActive5 ? "btn leaderboard-btn" : "btn leaderboard2-btn"
            }
          >
            5
          </button>
          <button
            onClick={handleClick10Button}
            className={
              buttonActive10 ? "btn leaderboard-btn" : "btn leaderboard2-btn"
            }
          >
            10
          </button>
          <button
            onClick={handleClick20Button}
            className={
              buttonActive20 ? "btn leaderboard-btn" : "btn leaderboard2-btn"
            }
          >
            20
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Demand Distribution</th>
            <th>Avg. Difference</th>
            <th>Rounds</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
