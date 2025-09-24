import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Newsvendor Simulation Game</h1>
        <p>
          Test your inventory decision-making skills in a fun and interactive
          way.
        </p>
        <div className="homepage-buttons">
          <Link to="/game" className="btn primary-btn">
            Start Game
          </Link>
          <Link to="/about" className="btn secondary-btn">
            Learn More
          </Link>
        </div>
      </header>

      <section className="homepage-features">
        <h2>What is the Newsvendor Problem?</h2>
        <p>
          The newsvendor problem is a supply chain management problem dealing
          with inventory management to determine the optimal order quantity
          under stochastic demand.
        </p>
        <p>
          The problem in its simplest form describes a decision-maker (e.g.
          newsvendor) who aims to maximise their profits by decide on an order
          quantity on a perishable product (newspapers) for each period before
          customer demand is realised.
        </p>
      </section>

      <section className="homepage-leaderboard">
        <h2>Leaderboard Preview</h2>
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
        <Link to="/leaderboard" className="btn tertiary-btn">
          View Full Leaderboard
        </Link>
      </section>

      <footer className="homepage-footer">
        <p>
          © {new Date().getFullYear()} Newsvendor Game. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
