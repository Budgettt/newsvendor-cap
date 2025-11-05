import "../styles/GamePage.css";
import { useEffect, useState } from "react";

const RoundResults = ({ demand, orderQty, surplus, profit }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [profitState, setProfitState] = useState(true);

  useEffect(() => {
    const checkProfit = () => {
      if (profit > 0) {
        setProfitState(true);
      } else {
        setProfitState(false);
      }
    };
    checkProfit();
  }, [profit]);

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
            Round Profit:{" "}
            <strong className={profitState ? "strong-green" : "strong-red"}>
              ${profit}
            </strong>{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default RoundResults;
