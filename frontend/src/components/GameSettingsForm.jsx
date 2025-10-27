import "../styles/GamePage.css";

const SettingsForm = ({
  playerName,
  costPerUnit,
  sellingPrice,
  maxRounds,
  roundLimit,
  demandType,
  setPlayerName,
  setCostPerUnit,
  setSellingPrice,
  setMaxRounds,
  setDemandType,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="settings-form">
    <h2>Game Setup</h2>
    <label>
      Player Name:
      <input
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        required
      />
    </label>
    <label>
      Number of rounds:
      <input
        type="number"
        value={maxRounds}
        onChange={(e) => setMaxRounds(Number(e.target.value))}
        min="1"
        max={roundLimit}
        required
      />
    </label>

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

    <label>
      Demand distribution:
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
    </label>

    <button type="submit">Start Game</button>
  </form>
);

export default SettingsForm;
