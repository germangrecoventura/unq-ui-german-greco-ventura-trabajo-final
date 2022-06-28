import { useState } from "react";
import Slider from "react-slick";
import Option from "../Option";
import Counter from "../Counter";
import possibleCases from "../Option/PossibleCases"
import Choice from "../Choice/Choice";
import Result from "../Result";

const GamePlayerCPU = () => {
  const [choicePlayer, setElectionPlayer] = useState({});
  const [electionMachine, setElectionMachine] = useState({});
  const [playerVictoryCounter, setPlayerAccounter] = useState(0);
  const [MachineVictoryCounter, setMachineVictoryCounter] = useState(0);

  const chooseOption = (event) => {
    const player = possibleCases.find(
      (e) => e.choice === event.target.textContent
    );
    setElectionPlayer(player);
    electionRival();
  };

  const electionRival = () => {
    const choice =
      possibleCases[Math.floor(Math.random() * possibleCases.length)];
    setElectionMachine(choice);
  };

  const contabilizarVictoriaJugador = () => {
    /* setContadorDeVictoriasDelJugador(ca => ca + 1) */
    /*     setContadorDeVictoriasDelJugador(contadorDeVictoriasDelJugador + 1);
     */
  };

  const contabilizarVictoriaMaquina = () => {
    /*     setContadorDeVictoriasDeDeLaMaquina(contadorDeVictoriasDeLaMaquina + 1);
     */
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
        isMachine={true}
        firstCount={playerVictoryCounter}
        secondCount={MachineVictoryCounter}
      />
      <Choice
        isMachine={true}
        firstEleccion={choicePlayer.choice}
        secondEleccion={electionMachine.choice}
      />
      <div className="available-options">
        <Slider {...sliderSetings}>
          {possibleCases.map((e, index) => (
            <Option
              choose={chooseOption}
              value={possibleCases[index]}
              key={index}
            />
          ))}
        </Slider>
      </div>
      <Result
        isMachine={true}
        firstPlayer={choicePlayer}
        secondPlayer={electionMachine}
        /*     victoriaJugador={() =>
          setContadorDeVictoriasDelJugador(contadorDeVictoriasDelJugador + 88)
        }
        victoriaMaquina= {() => setContadorDeVictoriasDeLaMaquina(c => c + 1)} */
      ></Result>
    </>
  );
};

export default GamePlayerCPU;
