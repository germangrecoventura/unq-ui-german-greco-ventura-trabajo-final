import { useState } from "react";
import Slider from "react-slick";
import Resultado from "./Resultado";
import Opcion from "./Opcion";

const Home = () => {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});
  const opciones = [
    {
      eleccion: "piedra",
      derrota: ["lagarto","tijera"],
      imagen: "./images/piedra.png",
    },
    {
      eleccion: "papel",
      derrota: ["piedra","spock"],
      imagen: "./images/piedra.png",
    },
    {
      eleccion: "tijera",
      derrota: ["papel","lagarto"],
      imagen: "./images/piedra.png",
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
      <Resultado
        jugador={eleccionJugador}
        maquina={eleccionMaquina}
      ></Resultado>
      <div className="jugador">Jugador</div>
      <div className="eleccion">
        {eleccionJugador.eleccion}
        <p></p>
      </div>
      <div className="maquina">Maquina</div>
      <div className="eleccion">
        {eleccionMaquina.eleccion}
        <p></p>
      </div>
      <div className="opciones">
        <Slider {...sliderSetings}>
          {opciones.map((e, index) => (
            <Opcion elegir={elegirOpcion} valor={opciones[index]} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
