import "../styles/HomePage.css";
import { getAllScores } from "../api/scoreAPI";
import { useEffect, useState } from "react";
import LeaderboardTable from "../components/LeaderboardTable";

const Leaderboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const scores = await getAllScores();
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
        <h1>Leaderboard</h1>
        <p>👑 Top 100 Scores 👑</p>
      </header>

      <section className="homepage-leaderboard">
        <LeaderboardTable scores={scoreData} setScoreData={setScoreData} />
      </section>

      <footer className="homepage-footer">
        <p>📰 Newsvendor Game</p>
      </footer>
    </div>
  );
};

export default Leaderboard;
