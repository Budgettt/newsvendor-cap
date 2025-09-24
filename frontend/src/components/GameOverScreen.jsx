import "../styles/GamePage.css";

const GameOverScreen = ({
  demandType,
  totalRounds,
  totalProfit,
  optimalProfit,
  profitDifference,
  onRestart,
}) => (
  <div className="game-over">
    <h2>Game Over</h2>
    <p>
      Demand Type: <strong>{demandType}</strong>
    </p>
    <p>
      Total rounds: <strong>{totalRounds}</strong>
    </p>
    <p>
      Your total profit: <strong>${totalProfit}</strong>
    </p>
    <p>
      Optimal profit: <strong>${optimalProfit}</strong>
    </p>
    <p>
      Difference: <strong>{profitDifference}%</strong>
    </p>
    <button onClick={onRestart}>Play Again</button>
  </div>
);

export default GameOverScreen;
