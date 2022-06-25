import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Opcion from "./Opcion";
import { useState } from "react";
import Resultado from "./Resultado";
import Slider from "react-slick";

function App() {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});
  const opciones = [
    {
      eleccion: "piedra",
      derrota: "tijera",
      imagen: "./images/piedra.png"
    },
    {
      eleccion: "papel",
      derrota: "piedra",
      imagen: "./images/piedra.png"
    },
    {
      eleccion: "tijera",
      derrota: "papel",
      imagen: "./images/piedra.png"
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
    <div className="App">
      <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}></Resultado>
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
