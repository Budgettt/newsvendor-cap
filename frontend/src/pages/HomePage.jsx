import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import HomeLeaderboard from "../components/HomeLeaderboard";
import HomeInfo from "../components/HomeInfo";

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

      <section className="homepage-info">
        <HomeInfo />
      </section>

      <section className="homepage-leaderboard">
        <HomeLeaderboard />
      </section>

      <footer className="homepage-footer">
        <p>📰 Newsvendor Game 📰</p>
      </footer>
    </div>
  );
};

export default HomePage;
