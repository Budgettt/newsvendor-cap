import "../styles/GamePage.css";

const GameOverScreen = ({
  totalRounds,
  totalProfit,
  demandType,
  onRestart,
}) => (
  <div className="game-over">
    <h2>Game Over</h2>
    <p>
      Total rounds: <strong>{totalRounds}</strong>
    </p>
    <p>
      Your total profit: <strong>${totalProfit}</strong>
    </p>
    <button onClick={onRestart}>Play Again</button>
  </div>
);

export default GameOverScreen;
