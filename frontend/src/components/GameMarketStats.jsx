import { useState } from "react";
import "../styles/GamePage.css";

function GameMarketStats({ costPerUnit, sellingPrice, totalProfit }) {
  const [isOpen, setIsOpen] = useState(true);

  const profitPerSale = sellingPrice - costPerUnit;

  return (
    <div className="market-stats">
      <button className="button-tips" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ Market Stats" : "▶ Market Stats"}
      </button>
      {isOpen && (
        <>
          <div>
            <p>
              Cost per Unit{" "}
              <strong className="strong-red">${costPerUnit}</strong>
            </p>
            <p>
              Selling Price:{" "}
              <strong className="strong-green">${sellingPrice}</strong>
            </p>
            <p>
              Profit per Sale:{" "}
              <strong className="strong-blue">${profitPerSale}</strong>
            </p>
            <p>
              Current Total Profit: <strong>${totalProfit}</strong>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default GameMarketStats;
