import "../styles/HomePage.css";
import { Link } from "react-router";

const HomeLeaderboard = ({}) => (
  <div className="leaderboard-container">
    <h2>Leaderboard Preview (Placeholder)</h2>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Player</th>
          <th>Profit Difference</th>
          <th>No# of Rounds</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Alice</td>
          <td>4.3%</td>
          <td>6</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bob</td>
          <td>5.6%</td>
          <td>6</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Charlie</td>
          <td>7.9%</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
    <Link to="/leaderboard" className="btn primary-btn">
      View Full Leaderboard
    </Link>
  </div>
);

export default HomeLeaderboard;
