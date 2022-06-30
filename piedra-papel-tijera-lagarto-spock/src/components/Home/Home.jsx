import React from "react";
import "./Home.css";
import onePlayer from "./images/OnePlayer.png";
import twoPlayer from "./images/Two Player.png";

function Home() {
  return (
    <div>
      <div className="banner">
        <div className="tittle-game">
          <h1> Rock, Paper, Scissors, Lizard, Spock</h1>
          <h2> Select your game mode</h2>
          <div className="selector-games">
            <img src={onePlayer} className="image-game" />
            <img src={twoPlayer} className="image-game" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
