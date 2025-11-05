import { useEffect, useState } from "react";
import "../styles/HomePage.css";
import {
  getFirst100Scores,
  getTopHundredScoresSpecificRoundsAndType,
} from "../api/scoreAPI";

const LeaderboardTable = ({ scores, setScoreData }) => {
  const [roundFilter, setRoundFilter] = useState("All");
  const [demandTypeFilter, setDemandTypeFilter] = useState("All");

  const [buttonActiveAllRounds, setButtonActiveAllRounds] = useState(true);
  const [buttonActive5, setButtonActive5] = useState(false);
  const [buttonActive10, setButtonActive10] = useState(false);
  const [buttonActive20, setButtonActive20] = useState(false);

  const [buttonActiveAllDemand, setButtonActiveAllDemand] = useState(true);
  const [buttonActiveRandom, setButtonActiveRandom] = useState(false);
  const [buttonActiveNormal, setButtonActiveNormal] = useState(false);

  const renderRows = () => {
    return scores.map((score, i) => {
      return (
        <tr>
          <td key={i}>{i + 1}</td>
          <td>{score.playerName}</td>
          <td>{score.demandType}</td>
          <td>{score.endDemandAvg}</td>
          <td>{score.endStandardDev}</td>
          <td>${score.totalProfit}</td>
          <td>{score.totalRounds}</td>
          <td>{score.averageProfitDifference}%</td>
        </tr>
      );
    });
  };

  const resetRoundButtons = () => {
    setButtonActiveAllRounds(false);
    setButtonActive5(false);
    setButtonActive10(false);
    setButtonActive20(false);
  };

  const resetDemandButtons = () => {
    setButtonActiveAllDemand(false);
    setButtonActiveRandom(false);
    setButtonActiveNormal(false);
  };

  const handleClickAllRounds = () => {
    resetRoundButtons();
    setButtonActiveAllRounds(true);
    setRoundFilter("All");
  };

  const handleClick5Rounds = () => {
    resetRoundButtons();
    setButtonActive5(true);
    setRoundFilter("5");
  };

  const handleClick10Rounds = () => {
    resetRoundButtons();
    setButtonActive10(true);
    setRoundFilter("10");
  };

  const handleClick20Rounds = () => {
    resetRoundButtons();
    setButtonActive20(true);
    setRoundFilter("20");
  };

  const handleClickAllDemand = () => {
    resetDemandButtons();
    setButtonActiveAllDemand(true);
    setDemandTypeFilter("All");
  };

  const handleClickRandomDemand = () => {
    resetDemandButtons();
    setButtonActiveRandom(true);
    setDemandTypeFilter("Random (Uniform)");
  };

  const handleClickNormalDemand = () => {
    resetDemandButtons();
    setButtonActiveNormal(true);
    setDemandTypeFilter("(Truncated) Normal Distribution");
  };

  useEffect(() => {
    const getScores = async () => {
      if (roundFilter === "All" && demandTypeFilter === "All") {
        const newscores = await getFirst100Scores();
        setScoreData(newscores);
      } else {
        const newscores = await getTopHundredScoresSpecificRoundsAndType(
          roundFilter,
          demandTypeFilter
        );
        setScoreData(newscores);
      }
    };
    getScores();
  }, [roundFilter, demandTypeFilter]);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-options">
        <div className="leaderboard-buttons-box">
          <div>
            <h5 className="leaderboard-round-heading">Number of Rounds: </h5>
          </div>
          <div>
            <button
              onClick={handleClickAllRounds}
              className={
                buttonActiveAllRounds
                  ? "btn leaderboard-btn"
                  : "btn leaderboard2-btn"
              }
            >
              All
            </button>
            <button
              onClick={handleClick5Rounds}
              className={
                buttonActive5 ? "btn leaderboard-btn" : "btn leaderboard2-btn"
              }
            >
              5
            </button>
            <button
              onClick={handleClick10Rounds}
              className={
                buttonActive10 ? "btn leaderboard-btn" : "btn leaderboard2-btn"
              }
            >
              10
            </button>
            <button
              onClick={handleClick20Rounds}
              className={
                buttonActive20 ? "btn leaderboard-btn" : "btn leaderboard2-btn"
              }
            >
              20
            </button>
          </div>
        </div>
        <div className="leaderboard-buttons-box">
          <div>
            <h5 className="leaderboard-round-heading">Demand Type: </h5>
          </div>
          <div>
            <button
              onClick={handleClickAllDemand}
              className={
                buttonActiveAllDemand
                  ? "btn leaderboard-btn"
                  : "btn leaderboard2-btn"
              }
            >
              All
            </button>
            <button
              onClick={handleClickRandomDemand}
              className={
                buttonActiveRandom
                  ? "btn leaderboard-btn"
                  : "btn leaderboard2-btn"
              }
            >
              Random (Uniform)
            </button>
            <button
              onClick={handleClickNormalDemand}
              className={
                buttonActiveNormal
                  ? "btn leaderboard-btn"
                  : "btn leaderboard2-btn"
              }
            >
              (Truncated) Normal Distribution
            </button>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Demand Distribution</th>
            <th>Demand Avg.</th>
            <th>Demand Std Dev.</th>
            <th>Profit</th>
            <th>Rounds</th>
            <th>Avg. Difference</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
