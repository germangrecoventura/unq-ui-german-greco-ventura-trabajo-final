import React from "react";
import "./Home.css";
import onePlayer from "./images/OnePlayer.png";
import twoPlayer from "./images/TwoPlayer.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div class="title">Rock, Paper, Scissors, Lizard, Spock</div>
      <div className="selector-games">
        <h2> Select your game mode</h2>
        <Link to="/one-player">
          <img src={onePlayer} alt="player-vs-ia" className="image-game" />
        </Link>
        <Link to="/two-players">
          <img src={twoPlayer} alt="player-vs-player" className="image-game" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
