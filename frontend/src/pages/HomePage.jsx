import React from "react";
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
          The Newsvendor Problem is a classic operations research problem that
          focuses on finding the optimal inventory level to maximize profit or
          minimize cost under uncertain demand.
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
