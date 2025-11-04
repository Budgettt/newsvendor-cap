import "../styles/GamePage.css";

const GameOverScreen = ({
  demandType,
  totalRounds,
  totalProfit,
  optimalProfit,
  profitDifference,
  endDemandAvg,
  endStandardDev,
  onRestart,
  onSubmitScore,
  submittedScore,
}) => (
  <div className="game-over">
    <div className="game-over-wholepartition">
      <h2>Game Over!</h2>
    </div>

    <div className="game-over-halfpartition">
      <h3>Summary:</h3>
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
        Avg. Difference: <strong>{profitDifference}%</strong>
      </p>
    </div>

    <div className="game-over-halfpartition">
      <h3>Demand Statistics:</h3>
      <p>
        Type: <strong>{demandType}</strong>
      </p>
      <p>
        Average: <strong>{endDemandAvg}</strong>
      </p>
      <p>
        Standard Deviation: <strong>{endStandardDev}</strong>
      </p>
    </div>

    <div className="game-over-wholepartition">
      <button onClick={onRestart}>Play Again</button>
      <button onClick={onSubmitScore}>Submit Score</button>
      {submittedScore ? <h4>Score Submitted!</h4> : <></>}
    </div>
  </div>
);

export default GameOverScreen;
