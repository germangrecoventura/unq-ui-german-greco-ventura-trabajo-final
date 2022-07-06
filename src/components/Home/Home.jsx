import React from "react";
import "./Home.css";
import onePlayer from "./images/OnePlayer.png";
import twoPlayer from "./images/TwoPlayer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="tittle-game">
          <h1> Rock, Paper, Scissors, Lizard, Spock</h1>
          <h2> Select your game mode</h2>
          <div className="selector-games">
            <Link to="/one-player">
              <img src={onePlayer} alt="player-vs-ia" className="image-game"/>
            </Link>
            <Link to="/two-players" >
              <img src={twoPlayer} alt="player-vs-player" className="image-game" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
