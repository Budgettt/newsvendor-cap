import { useState } from "react";
import "../styles/GamePage.css";

import SettingsForm from "../components/GameSettingsForm";
import GameForm from "../components/GameForm";
import RoundResults from "../components/GameRoundResults";
import GameHistory from "../components/GameHistory";
import GameOverScreen from "../components/GameOverScreen";

const GamePage = () => {
  // Set Range of generated values
  // Random Uniform
  const MIN_DEMAND = 50;
  const MAX_DEMAND = 150;
  // Random Normal
  const MIN_STD = 0.5;
  const MAX_STD = 5.0;
  const MIN_AVG = 50;
  const MAX_AVG = 150;

  // Settings state
  const [maxRounds, setMaxRounds] = useState(5);
  const [demandType, setDemandType] = useState("random");
  const [costPerUnit, setCostPerUnit] = useState(10);
  const [sellingPrice, setSellingPrice] = useState(20);
  const [settingsConfirmed, setSettingsConfirmed] = useState(false);

  // Game state
  const [round, setRound] = useState(1);
  const [orderQty, setOrderQty] = useState("");
  const [demand, setDemand] = useState(null);
  const [profit, setProfit] = useState(null);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const getRandomUniformDemand = () => {
    return (
      Math.floor(Math.random() * (MAX_DEMAND - MIN_DEMAND + 1)) + MIN_DEMAND
    );
  };

  const getRandomNormalDemand = () => {
    let x = Math.random();
    let y = Math.random();

    // Box-Muller Transform
    let z = Math.sqrt(-2.0 * Math.log(x)) * Math.cos(2.0 * Math.PI * y);

    // Shift value to match avg and std
    const avg = Math.random() * (MAX_AVG - MIN_AVG) + 1;
    const std = Math.random() * (MAX_STD - MIN_STD);
    const demand = Math.round(z * std + avg);

    console.log(`avg: ${avg}, std: ${std}, demand: ${demand}`);
    return demand;
  };

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    setSettingsConfirmed(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const qty = parseInt(orderQty, 10);
    if (isNaN(qty) || qty < 0) return;

    // Determine Demand based on type
    let currentDemand = 0;
    if (demandType === "random") {
      currentDemand = getRandomUniformDemand();
    } else if (demandType === "normal") {
      currentDemand = getRandomNormalDemand();
    }

    const unitsSold = Math.min(qty, currentDemand);
    const revenue = unitsSold * sellingPrice;
    const cost = qty * costPerUnit;
    const roundProfit = revenue - cost;
    let lostSales = 0;
    let surplus = 0;

    if (currentDemand > qty) {
      lostSales = currentDemand - qty;
    } else {
      surplus = qty - currentDemand;
    }

    const newEntry = {
      round,
      orderQty: qty,
      demand: currentDemand,
      unitsSold,
      profit: roundProfit,
      lostSales,
      surplus,
    };

    setHistory([...history, newEntry]);
    setDemand(currentDemand);
    setProfit(roundProfit);
    setOrderQty("");

    if (round >= maxRounds) {
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
    setSettingsConfirmed(false);
  };

  return (
    <div className="game-container">
      <h1>Newsvendor Game</h1>

      {!settingsConfirmed ? (
        <SettingsForm
          costPerUnit={costPerUnit}
          sellingPrice={sellingPrice}
          maxRounds={maxRounds}
          demandType={demandType}
          setCostPerUnit={setCostPerUnit}
          setSellingPrice={setSellingPrice}
          setMaxRounds={setMaxRounds}
          setDemandType={setDemandType}
          onSubmit={handleSettingsSubmit}
        />
      ) : (
        <>
          <p>
            Round {round} of {maxRounds}
          </p>

          {!gameOver ? (
            <GameForm
              orderQty={orderQty}
              setOrderQty={setOrderQty}
              onSubmit={handleSubmitOrder}
            />
          ) : (
            <GameOverScreen
              totalRounds={maxRounds}
              totalProfit={totalProfit}
              demandType={demandType}
              onRestart={handleRestart}
            />
          )}

          {demand !== null && profit !== null && !gameOver && (
            <RoundResults
              totalRounds={round}
              demand={demand}
              orderQty={orderQty}
              profit={profit}
            />
          )}

          {history.length > 0 && <GameHistory history={history} />}
        </>
      )}
    </div>
  );
};

export default GamePage;
