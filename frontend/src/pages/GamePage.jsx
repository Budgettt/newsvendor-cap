import { useEffect, useState } from "react";
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
  const STD = 15;
  const AVG = 100;

  // Settings state
  const [maxRounds, setMaxRounds] = useState(5);
  const [demandType, setDemandType] = useState("Random (Uniform)");
  const [costPerUnit, setCostPerUnit] = useState(10);
  const [sellingPrice, setSellingPrice] = useState(20);
  const [settingsConfirmed, setSettingsConfirmed] = useState(false);

  // Table states
  const [round, setRound] = useState(1);
  const [orderQty, setOrderQty] = useState("");
  const [demand, setDemand] = useState(null);
  const [profit, setProfit] = useState(null);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // GameOver Stats States
  const [totalProfit, setTotalProfit] = useState(0);
  const [optimalProfit, setOptimalProfit] = useState(0);
  const [profitDifference, setProfitDifference] = useState("");

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
    const demand = Math.round(z * STD + AVG);

    return demand;
  };

  const calculateProfitDifference = () => {
    let difference = optimalProfit - totalProfit;
    let percentDifference = (100 * difference) / optimalProfit;
    percentDifference = percentDifference.toFixed(2);
    setProfitDifference(percentDifference);
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
    if (demandType === "Random (Uniform)") {
      currentDemand = getRandomUniformDemand();
    } else if (demandType === "Normal Distribution") {
      currentDemand = getRandomNormalDemand();
    }

    // Calculate Variables
    const unitsSold = Math.min(qty, currentDemand);
    const revenue = unitsSold * sellingPrice;
    const cost = qty * costPerUnit;
    const roundProfit = revenue - cost;
    const newTotalProfit = totalProfit + roundProfit;
    const roundOptimalProfit = currentDemand * costPerUnit;
    const newOptimalProfit = optimalProfit + roundOptimalProfit;

    console.log(
      `roundOptimal: ${roundOptimalProfit}, newopti: ${newOptimalProfit}`
    );
    let lostSales = 0;
    let surplus = 0;

    if (currentDemand > qty) {
      lostSales = currentDemand - qty;
    } else {
      surplus = qty - currentDemand;
    }

    // Create next table entry
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
    setOptimalProfit(newOptimalProfit);
    setTotalProfit(newTotalProfit);
    setDemand(currentDemand);
    setProfit(roundProfit);
    setOrderQty("");

    if (round >= maxRounds) {
      setGameOver(true);
    } else {
      setRound(round + 1);
    }
  };

  const handleRestart = () => {
    setRound(1);
    setOrderQty("");
    setDemand(null);
    setProfit(null);
    setHistory([]);
    setTotalProfit(0);
    setOptimalProfit(0);
    setGameOver(false);
    setSettingsConfirmed(false);
  };

  useEffect(() => {
    // Update values when profit changes
    calculateProfitDifference();
  }, [profit]);

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
              demandType={demandType}
              totalRounds={maxRounds}
              totalProfit={totalProfit}
              optimalProfit={optimalProfit}
              profitDifference={profitDifference}
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
