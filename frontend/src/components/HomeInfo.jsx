import "../styles/HomePage.css";

const HomeInfo = ({}) => (
  <div className="info-container">
    <h2>What is the Newsvendor Problem?</h2>
    <p>
      The newsvendor problem is a supply chain management problem dealing with
      inventory management to determine the optimal order quantity under
      stochastic demand.
    </p>
    <p>
      The problem describes a decision-maker (e.g. newsvendor) who aims to
      maximise their profits by{" "}
      <strong>
        determining the optimal order quantity of a perishable product
      </strong>{" "}
      (e.g. newspapers) before each selling period
      <strong> before customer demand is known.</strong> During the end of each
      selling period, the decision-maker incurs an{" "}
      <strong>"overage cost"</strong> for each leftover unsold unit of product
      and incurs an <strong>"underage cost"</strong> each unsatisfied unit of
      demand.
    </p>
  </div>
);

export default HomeInfo;
