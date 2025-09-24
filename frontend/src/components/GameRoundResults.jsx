import "../styles/GamePage.css";

const RoundResults = ({ demand, orderQty, surplus, profit }) => (
  <div className="round-results">
    <h3>Round Results</h3>
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
      Profit: <strong>${profit}</strong>{" "}
    </p>
  </div>
);

export default RoundResults;
