import { useState } from "react";
import "../styles/GamePage.css";

const GameHelp = ({ costPerUnit, sellingPrice, minDemand, maxDemand }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenTips, setIsOpenTips] = useState(false);

  return (
    <div className="gamehelp-container">
      <button className="button-tips" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ Hide All" : "▶ How to play"}
      </button>
      {isOpen && (
        <>
          <h3>Instructions</h3>{" "}
          <p>
            You are in responsible for runnning a small store which sells weekly
            newspapers. Before each week (round) begins, you place a{" "}
            <strong>bulk order</strong> to your supplier for the latest
            newspapers. These newspapers cost you{" "}
            <strong className="strong-red">${costPerUnit}</strong> per unit to
            order. During the week you sell each newspaper at{" "}
            <strong className="strong-green">${sellingPrice}</strong> per unit.
            Any <strong>unsold</strong> newspapers at the end of the week are{" "}
            <strong>discarded</strong> as they are outdated and cannot be sold.
          </p>
          <p>
            Without any historical data, the suggested ordering quantity for the
            first week (round) is{" "}
            <strong className="strong-blue">200 units.</strong> Your goal is the
            predict the optimal ordering quantity each week to maximise profits
            for your store.
          </p>
          <button
            className="button-tips"
            onClick={() => setIsOpenTips(!isOpenTips)}
          >
            {isOpenTips ? "▼ Hide Tips" : "▶ Show Tips"}
          </button>
          {isOpenTips && (
            <>
              {" "}
              <p>
                <strong>Random uniform distribution:</strong> the minimum demand
                is <strong>{minDemand}</strong> units and the maximum demand is{" "}
                <strong>{maxDemand}</strong> units each week (round).
              </p>
              <p>
                <strong>(Truncated) normal distribution:</strong> the minimum
                and maximum demand each week (round) falls within{" "}
                <strong>
                  (
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mi>&#x3bc;</mi>
                    <mo>&#xb1;</mo>
                    <mn>3</mn>
                    <mi>&#x3c3;</mi>
                  </math>
                  )
                </strong>{" "}
                where{" "}
                <strong>
                  (<mi>&#x3bc;</mi>)
                </strong>{" "}
                is the final demand average and{" "}
                <strong>
                  (<mi>&#x3c3;</mi>)
                </strong>{" "}
                is the final demand standard deviation.
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GameHelp;
