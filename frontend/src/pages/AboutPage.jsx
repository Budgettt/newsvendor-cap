import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About this Project</h1>
        <p>
          This newsvendor simulation game was developed as part of a university
          capstone project to explore and demonstrate the newsvendor problem, a
          classic model in operations and supply chain management. The goal of
          the project is to provide an interactive and engaging way for players
          to understand the challenges of inventory decision-making under
          uncertainty. Players take on the role of a newsvendor who must decide
          how many newspapers to order before demand is known, balancing the
          risks of overstocking and understocking. Through gameplay, players
          gain insights into demand forecasting, cost optimization, and profit
          maximization.
        </p>
      </header>

      <footer className="about-footer">
        <p>📰 Newsvendor Game</p>
      </footer>
    </div>
  );
};

export default AboutPage;
