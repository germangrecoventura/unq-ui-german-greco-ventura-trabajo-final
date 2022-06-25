import { useState } from "react";
import Slider from "react-slick";
import Resultado from "./Resultado";
import Opcion from "./Opcion";
import lagarto from "../images/lagarto.png";
import piedra from "../images/piedra.png";
import papel from "../images/papel.png";
import tijera from "../images/tijera.png";
import spock from "../images/spock.png";

const Home = () => {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});
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
      <div className="eleccion-jugador">Jugador: {eleccionJugador.eleccion}</div>
      {/* <div className="eleccion">
        {eleccionJugador.eleccion}
   
      </div> */}
      <div className="eleccion-maquina">Maquina: {eleccionMaquina.eleccion}</div>
      {/* <div className="eleccion">
        {eleccionMaquina.eleccion}
        
      </div> */}
      <div className="opciones">
        <Slider {...sliderSetings}>
          {opciones.map((e, index) => (
            <Opcion elegir={elegirOpcion} valor={opciones[index]} />
          ))}
        </Slider>
        <Resultado
        jugador={eleccionJugador}
        maquina={eleccionMaquina}
      ></Resultado>
      </div>
    </>
  );
};

export default Home;
