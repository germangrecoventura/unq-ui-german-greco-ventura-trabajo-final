import { useState } from "react";
import Slider from "react-slick";
import Resultado from "./Resultado";
import Opcion from "./Opcion";

const Home = () => {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});
  const [contadorDeVictoriasDelJugador, setContadorDeVictoriasDelJugador] =
    useState(0);
  const [contadorDeVictoriasDeLaMaquina, setContadorDeVictoriasDeDeLaMaquina] =
    useState(0);
  const opciones = [
    {
      eleccion: "Piedra",
      derrota: ["Lagarto", "Tijera"],
    },
    {
      eleccion: "Papel",
      derrota: ["Piedra", "Spock"],
    },
    {
      eleccion: "Tijera",
      derrota: ["Papel", "Lagarto"],
    },
    {
      eleccion: "Lagarto",
      derrota: ["Spock", "Papel"],
    },
    {
      eleccion: "Spock",
      derrota: ["Tijera", "Piedra"],
    },
  ];

  const elegirOpcion = (event) => {
    const jugador = opciones.find(
      (e) => e.eleccion === event.target.textContent
    );
    setEleccionJugador(jugador);
    eleccionRival();
  };

  const eleccionRival = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionMaquina(eleccion);
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
      <div className="contador">
        <p>Partidas ganadas por el jugador: {contadorDeVictoriasDelJugador}</p>
        <p>Partidas ganadas por la Máquina: {contadorDeVictoriasDeLaMaquina}</p>
      </div>
      <div className="eleccion">
        <p>Jugador a elegido: {eleccionJugador.eleccion}</p>
        <p>Máquina a elegido: {eleccionMaquina.eleccion}</p>
      </div>
      <div className="opciones">
        <Slider {...sliderSetings}>
          {opciones.map((e, index) => (
            <Opcion elegir={elegirOpcion} valor={opciones[index]} />
          ))}
        </Slider>
      </div>
      <Resultado
        jugador={eleccionJugador}
        maquina={eleccionMaquina}
      ></Resultado>
    </>
  );
};

export default Home;
