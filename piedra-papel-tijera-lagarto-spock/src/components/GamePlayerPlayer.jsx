import Slider from "react-slick";
import Choice from "./Choice/Choice";
import Counter from "./Counter";
import Option from "./Option";
import possibleCases from "./Option/PossibleCases";
import { useState } from "react";
import Result from "./Result";

const GamePlayerPlayer = () => {
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);

  const chooseOptionPlayer = (event) => {
    const player = possibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionMachine({});
    setElectionPlayer({});
    setElectionPlayer(player);
  };

  const chooseOptionPlayerTwo = (event) => {
    const player = possibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionMachine(player);
  };

  const sliderSetings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Counter
        isMachine={false}
        firstCount={playerVictoryCounter}
        secondCount={MachineVictoryCounter}
      />
      <Choice
        isMachine={false}
        firstEleccion={choicePlayer.choice}
        secondEleccion={electionMachine.choice}
      />
      <div className="available-options">
        <Slider {...sliderSetings}>
          {possibleCases.map((e, index) => (
            <Option
              choose={chooseOptionPlayer}
              value={possibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <div className="available-options">
        <Slider {...sliderSetings}>
          {possibleCases.map((e, index) => (
            <Option
              background={"two"}
              choose={chooseOptionPlayerTwo}
              value={possibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <Result
        isMachine={false}
        firstPlayer={choicePlayer}
        secondPlayer={electionMachine}
      ></Result>
    </>
  );
};

export default GamePlayerPlayer;
