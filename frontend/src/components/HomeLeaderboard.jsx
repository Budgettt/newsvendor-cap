import "../styles/HomePage.css";
import { Link } from "react-router";

const HomeLeaderboard = ({ scores }) => {
  const render10Rows = () => {
    const first10scores = scores.slice(0, 10);

    return first10scores.map((score, i) => {
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

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
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
        <tbody>{render10Rows()}</tbody>
      </table>
      <Link to="/leaderboard" className="btn primary-btn">
        View Full Leaderboard
      </Link>
    </div>
  );
};

export default HomeLeaderboard;
