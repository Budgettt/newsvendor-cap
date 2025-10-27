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
}) => (
  <form onSubmit={onSubmit} className="settings-form">
    <h2>Game Setup</h2>
    <label>Player Name:</label>
    <input
      value={playerName}
      onChange={(e) => setPlayerName(e.target.value)}
      required
    />
    <label>Number of rounds: </label>
    <input
      type="number"
      value={maxRounds}
      onChange={(e) => setMaxRounds(Number(e.target.value))}
      min={roundMin}
      max={roundLimit}
      required
    />
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

export default SettingsForm;
