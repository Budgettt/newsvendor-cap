import { useState } from "react";
import "../styles/GamePage.css";

const GameStats = ({
  demandType,
  totalProfit,
  endDemandAvg,
  endStandardDev,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gamehelp-container">
      <button className="button-tips" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ Hide Ongoing Statistics" : "▶ Show Ongoing Statistics"}
      </button>
      {isOpen && (
        <>
          <div>
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
        </>
      )}
    </div>
  );
};

export default GameStats;
