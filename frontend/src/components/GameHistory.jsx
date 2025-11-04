import "../styles/GamePage.css";

const GameHistory = ({ history }) => {
  return (
    <div className="history-table">
      <h3>Game History</h3>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Demand</th>
            <th>Order Qty</th>
            <th>Sales</th>
            <th>Lost Sales</th>
            <th>Surplus</th>
            <th>Profit</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.round}</td>
              <td>{entry.demand}</td>
              <td>{entry.orderQty}</td>
              <td>{entry.unitsSold}</td>
              <td>{entry.lostSales}</td>
              <td>{entry.surplus}</td>
              <td>${entry.profit}</td>
              <td>{entry.profitDifference2Decimal}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameHistory;
