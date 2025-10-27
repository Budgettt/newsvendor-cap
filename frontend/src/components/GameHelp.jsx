import "../styles/GamePage.css";

const GameHelp = ({}) => (
  <div className="gamehelp-container">
    <h3>How to Play</h3>
    <p>
      You are in responsible for runnning a small store which sells weekly
      newspapers. Before each week begins, you place a{" "}
      <strong>bulk order</strong> to your supplier for the latest newspapers.
      These newspapers cost you <strong>$10</strong> per unit to order. During
      the week you sell each newspaper at <strong>$20</strong> per unit. Any{" "}
      <strong>unsold</strong> newspapers at the end of the week are{" "}
      <strong>discarded</strong> as they are outdated and cannot be sold.
    </p>
    <p>
      Without any historical data, the suggested ordering quantity for the first
      week is <strong>100 units.</strong>
    </p>
    <p>
      Your goal is the predict the optimal ordering quantity each week to
      maximise profits for your store.
    </p>
  </div>
);

export default GameHelp;
