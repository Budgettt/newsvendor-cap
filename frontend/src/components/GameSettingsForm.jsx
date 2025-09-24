import "../styles/GamePage.css";

const SettingsForm = ({
  costPerUnit,
  sellingPrice,
  maxRounds,
  demandType,
  setCostPerUnit,
  setSellingPrice,
  setMaxRounds,
  setDemandType,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="settings-form">
    <h2>Game Settings</h2>
    <label>
      Number of rounds:
      <input
        type="number"
        value={maxRounds}
        onChange={(e) => setMaxRounds(Number(e.target.value))}
        min="1"
        required
      />
    </label>
    <label>
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
    </label>

    <label>
      Demand distribution:
      <select
        value={demandType}
        onChange={(e) => setDemandType(e.target.value)}
        required
      >
        <option value="random">Random (Uniform)</option>
        <option value="normal">Normal Distribution</option>
      </select>
    </label>

    <button type="submit">Start Game</button>
  </form>
);

export default SettingsForm;
