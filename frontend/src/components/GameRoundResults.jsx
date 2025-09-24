import "../styles/GamePage.css";

const RoundResults = ({ round, demand, orderQty, profit }) => (
  <div className="round-results">
    <h3>Round {round} Results</h3>
    <p>Demand: {demand}</p>
    <p>Sales: {Math.min(orderQty, demand)}</p>
    <p>Profit: ${profit}</p>
  </div>
);

export default RoundResults;
