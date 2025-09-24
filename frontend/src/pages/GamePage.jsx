import { useEffect, useState } from "react";
import "../styles/GamePage.css";

import SettingsForm from "../components/GameSettingsForm";
import GameForm from "../components/GameForm";
import RoundResults from "../components/GameRoundResults";
import GameHistory from "../components/GameHistory";
import GameOverScreen from "../components/GameOverScreen";

// Game Balancing
const ROUND_LIMIT = 20;
// Random Uniform
const MIN_DEMAND = 50;
const MAX_DEMAND = 150;
// Random Normal
const MIN_STD = 10;
const MAX_STD = 40;
const MIN_AVG = 75;
const MAX_AVG = 125;

const randomiseInRange = (max, min) => {
  const x = Math.random() * (max - min) + min;
  return x;
};

const GamePage = () => {
  // Initial Game Variables setup
  const nSTD = randomiseInRange(MAX_STD, MIN_STD);
  const nAVG = randomiseInRange(MAX_AVG, MIN_AVG);

  // Settings state
  const [playerName, setPlayerName] = useState("");
  const [maxRounds, setMaxRounds] = useState(5);
  const [demandType, setDemandType] = useState("Random (Uniform)");
  const [costPerUnit, setCostPerUnit] = useState(10);
  const [sellingPrice, setSellingPrice] = useState(20);
  const [settingsConfirmed, setSettingsConfirmed] = useState(false);
  const [normalSTD, setNormalSTD] = useState(nSTD);
  const [normalAVG, setNormalAVG] = useState(nAVG);

  // Table states
  const [round, setRound] = useState(1);
  const [orderQty, setOrderQty] = useState("");
  const [demand, setDemand] = useState(null);
  const [profit, setProfit] = useState(null);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [surplus, setSurplus] = useState(null);

  // GameOver Stats States
  const [totalProfit, setTotalProfit] = useState(0);
  const [optimalProfit, setOptimalProfit] = useState(0);
  const [profitDifference, setProfitDifference] = useState("");
  const [endDemandAvg, setEndDemandAvg] = useState(null);
  const [endStandardDev, setEndStandardDev] = useState(null);

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
    const demand = Math.round(z * normalSTD + normalAVG);

    return demand;
  };

  const getNewNormalVariables = () => {
    const nSTD = randomiseInRange(MAX_STD, MIN_STD);
    const nAVG = randomiseInRange(MAX_AVG, MIN_AVG);
    setNormalSTD(nSTD);
    setNormalAVG(nAVG);
  };

  const calculateProfitDifference = () => {
    let difference = optimalProfit - totalProfit;
    let percentDifference = (100 * difference) / optimalProfit;
    percentDifference = percentDifference.toFixed(2);
    setProfitDifference(percentDifference);
  };

  const calculateGameOverStats = () => {
    let sumDemandAverage = 0;
    let squaredDiffSum = 0;

    for (let i = 0; i < history.length; i++) {
      sumDemandAverage = sumDemandAverage + history[i].demand;
    }
    const demandAverage = sumDemandAverage / history.length;

    for (let i = 0; i < history.length; i++) {
      const diff = history[i].demand - demandAverage;
      squaredDiffSum = squaredDiffSum + diff * diff;
    }
    const variance = squaredDiffSum / history.length;
    const standardDev = Math.sqrt(variance);

    setEndDemandAvg(demandAverage.toFixed(2));
    setEndStandardDev(standardDev.toFixed(2));
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
    const roundOptimalProfit = currentDemand * (sellingPrice - costPerUnit);
    const newOptimalProfit = optimalProfit + roundOptimalProfit;

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
      optimalProfit: roundOptimalProfit,
      lostSales,
      surplus,
    };

    setHistory([...history, newEntry]);
    setOptimalProfit(newOptimalProfit);
    setTotalProfit(newTotalProfit);
    setDemand(currentDemand);
    setProfit(roundProfit);
    setSurplus(surplus);

    if (round >= maxRounds) {
      setGameOver(true);
    } else {
      setRound(round + 1);
    }
  };

  const handleRestart = () => {
    // Reset States
    setRound(1);
    setOrderQty("");
    setDemand(null);
    setProfit(null);
    setHistory([]);
    setTotalProfit(0);
    setOptimalProfit(0);
    setGameOver(false);
    setSettingsConfirmed(false);
    getNewNormalVariables();
  };

  useEffect(() => {
    calculateProfitDifference();
  }, [profit]);

  useEffect(() => {
    calculateGameOverStats();
  }, [history]);

  return (
    <div className="game-container">
      <h1>📰 Newsvendor Game</h1>

      {!settingsConfirmed ? (
        <SettingsForm
          playerName={playerName}
          costPerUnit={costPerUnit}
          sellingPrice={sellingPrice}
          maxRounds={maxRounds}
          roundLimit={ROUND_LIMIT}
          demandType={demandType}
          setPlayerName={setPlayerName}
          setCostPerUnit={setCostPerUnit}
          setSellingPrice={setSellingPrice}
          setMaxRounds={setMaxRounds}
          setDemandType={setDemandType}
          onSubmit={handleSettingsSubmit}
        />
      ) : (
        <>
          <p>Player: {playerName}</p>
          <p>
            <strong>
              Round {round} of {maxRounds}
            </strong>
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
              endDemandAvg={endDemandAvg}
              endStandardDev={endStandardDev}
              onRestart={handleRestart}
            />
          )}

          {demand !== null && profit !== null && !gameOver && (
            <RoundResults
              demand={demand}
              orderQty={orderQty}
              surplus={surplus}
              profit={profit}
            />
          )}

          {history.length > 0 && <GameHistory history={history} />}

          <button className="quit-button" onClick={handleRestart}>
            Quit Game
          </button>
        </>
      )}
    </div>
  );
};

export default GamePage;
