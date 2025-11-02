import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import HomeLeaderboard from "../components/HomeLeaderboard";
import HomeInfo from "../components/HomeInfo";
import { getFirst10Scores } from "../api/scoreAPI";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const scores = await getFirst10Scores();
      setScoreData(scores);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <>
      <div className="homepage-container">
        <h1>Loading...</h1>
      </div>
    </>
  ) : (
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
        <HomeLeaderboard scores={scoreData} setScoreData={setScoreData} />
      </section>

      <footer className="homepage-footer">
        <p>📰 Newsvendor Game</p>
      </footer>
    </div>
  );
};

export default HomePage;
