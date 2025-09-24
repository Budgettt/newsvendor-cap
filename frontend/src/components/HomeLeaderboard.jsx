import "../styles/HomePage.css";
import { Link } from "react-router";

const HomeLeaderboard = ({}) => (
  <div className="leaderboard-container">
    <h2>Leaderboard Preview (Placeholder)</h2>
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
          <th>Rounds Played</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>920</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>870</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Charlie</td>
          <td>860</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
    <Link to="/leaderboard" className="btn primary-btn">
      View Full Leaderboard
    </Link>
  </div>
);

export default HomeLeaderboard;
