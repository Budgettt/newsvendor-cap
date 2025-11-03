import "../styles/GamePage.css";
import { useState } from "react";

const RoundResults = ({ demand, orderQty, surplus, profit }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="round-results">
      <button className="button-tips" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ Round Results" : "▶ Round Results"}
      </button>
      {isOpen && (
        <>
          <p>
            Demand: <strong>{demand}</strong>
          </p>
          <p>
            Sales: <strong>{Math.min(orderQty, demand)}</strong>
          </p>
          <p>
            Surplus: <strong>{surplus}</strong>
          </p>
          <p>
            Round Profit: <strong>${profit}</strong>{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default RoundResults;
