import React, { useState } from "react";
import "../styles/GamePage.css";

const COST_PER_UNIT = 5;
const SELLING_PRICE_PER_UNIT = 10;
const MAX_ROUNDS = 5;

const getRandomDemand = () => Math.floor(Math.random() * 21) + 10; // 10–30 units

const GamePage = () => {
  const [round, setRound] = useState(1);
  const [orderQty, setOrderQty] = useState("");
  const [demand, setDemand] = useState(null);
  const [profit, setProfit] = useState(null);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const qty = parseInt(orderQty, 10);
    if (isNaN(qty) || qty < 0) return;

    const currentDemand = getRandomDemand();
    const unitsSold = Math.min(qty, currentDemand);
    const revenue = unitsSold * SELLING_PRICE_PER_UNIT;
    const cost = qty * COST_PER_UNIT;
    const roundProfit = revenue - cost;

    const newEntry = {
      round,
      orderQty: qty,
      demand: currentDemand,
      unitsSold,
      profit: roundProfit,
    };

    setHistory([...history, newEntry]);
    setDemand(currentDemand);
    setProfit(roundProfit);
    setOrderQty("");

    if (round >= MAX_ROUNDS) {
      setGameOver(true);
    } else {
      setRound(round + 1);
    }
  };

  const totalProfit =
    history.reduce((sum, r) => sum + r.profit, 0) + (profit || 0);

  const handleRestart = () => {
    setRound(1);
    setOrderQty("");
    setDemand(null);
    setProfit(null);
    setHistory([]);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>Newsvendor Game</h1>
      <p>
        Round {round} of {MAX_ROUNDS}
      </p>

      {!gameOver ? (
        <form onSubmit={handleSubmit} className="game-form">
          <label htmlFor="orderQty">
            How many units would you like to order?
          </label>
          <input
            type="number"
            id="orderQty"
            value={orderQty}
            onChange={(e) => setOrderQty(e.target.value)}
            min="0"
            required
          />
          <button type="submit">Submit Order</button>
        </form>
      ) : (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>
            Your total profit: <strong>${totalProfit}</strong>
          </p>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}

      {demand !== null && profit !== null && !gameOver && (
        <div className="round-results">
          <h3>Round {round} Results</h3>
          <p>Demand: {demand}</p>
          <p>Units Sold: {Math.min(orderQty, demand)}</p>
          <p>Profit: ${profit}</p>
        </div>
      )}

      {history.length > 0 && (
        <div className="history-table">
          <h3>Game History</h3>
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th>Order Qty</th>
                <th>Demand</th>
                <th>Units Sold</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.round}</td>
                  <td>{entry.orderQty}</td>
                  <td>{entry.demand}</td>
                  <td>{entry.unitsSold}</td>
                  <td>${entry.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GamePage;
