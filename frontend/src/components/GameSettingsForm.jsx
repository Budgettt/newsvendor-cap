import { useState } from "react";
import "../styles/GamePage.css";

const SettingsForm = ({
  playerName,
  costPerUnit,
  sellingPrice,
  maxRounds,
  roundLimit,
  roundMin,
  demandType,
  setPlayerName,
  setCostPerUnit,
  setSellingPrice,
  setMaxRounds,
  setDemandType,
  onSubmit,
}) => {
  const [selectedRounds, setSelectedRounds] = useState(5);

  const handleChange = (e) => {
    setSelectedRounds(Number(e.target.value));
    setMaxRounds(Number(e.target.value));
  };

  return (
    <form onSubmit={onSubmit} className="settings-form">
      <h2>Game Setup</h2>
      <label>Player Name:</label>
      <input
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        required
      />
      <label>Number of rounds: </label>
      <label className="settings-form-radio-label">
        <input
          type="radio"
          value="5"
          checked={selectedRounds === 5}
          onChange={handleChange}
        />
        5
      </label>
      <label className="settings-form-radio-label">
        <input
          type="radio"
          value="10"
          checked={selectedRounds === 10}
          onChange={handleChange}
        />
        10
      </label>
      <label className="settings-form-radio-label">
        <input
          type="radio"
          value="20"
          checked={selectedRounds === 20}
          onChange={handleChange}
        />
        20
      </label>
      {/* <input
      type="number"
      value={maxRounds}
      onChange={(e) => setMaxRounds(Number(e.target.value))}
      min={roundMin}
      max={roundLimit}
      required
    /> */}
      {/* <label>
      Cost per unit:
      <input
        type="number"
        value={costPerUnit}
        onChange={(e) => setCostPerUnit(Number(e.target.value))}
        min="1"
        required
      />
    </label>
    <label>
      Selling price per unit:
      <input
        type="number"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(Number(e.target.value))}
        min="1"
        required
      />
    </label> */}
      <label>Demand distribution:</label>
      <select
        value={demandType}
        onChange={(e) => setDemandType(e.target.value)}
        required
      >
        <option value="Random (Uniform)">Random (Uniform)</option>
        <option value="(Truncated) Normal Distribution">
          Normal Distribution (Truncated)
        </option>
      </select>
      <button type="submit">Start Game</button>
    </form>
  );
};

export default SettingsForm;
