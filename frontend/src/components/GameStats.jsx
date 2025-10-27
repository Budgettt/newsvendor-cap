import "../styles/GamePage.css";

const GameStats = ({
  demandType,
  totalProfit,
  endDemandAvg,
  endStandardDev,
}) => {
  return (
    <div className="game-over">
      <div>
        <h3>Ongoing Statistics</h3>
        <p>
          Demand Type: <strong>{demandType}</strong>
        </p>
        <p>
          Average Demand: <strong>{endDemandAvg}</strong>
        </p>
        <p>
          Standard Deviation: <strong>{endStandardDev}</strong>
        </p>
        <p>
          Total Profit: <strong>${totalProfit}</strong>
        </p>
      </div>
    </div>
  );
};

export default GameStats;
