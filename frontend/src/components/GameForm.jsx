import "../styles/GamePage.css";

const GameForm = ({ orderQty, setOrderQty, onSubmit }) => (
  <form onSubmit={onSubmit} className="game-form">
    <label htmlFor="orderQty">How many units would you like to order?</label>
    <input
      className="game-form-input"
      type="number"
      id="orderQty"
      value={orderQty}
      onChange={(e) => setOrderQty(e.target.value)}
      min="0"
      required
      max="500"
    />
    <button type="submit">Submit Order</button>
  </form>
);

export default GameForm;
