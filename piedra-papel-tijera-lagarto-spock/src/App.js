import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Opcion from "./Opcion";
import { useState } from "react";
import Resultado from "./Resultado";

function App() {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});
  const opciones = [
    {
      eleccion: "piedra",
      derrota: "tijera",
    },
    {
      eleccion: "papel",
      derrota: "piedra",
    },
    {
      eleccion: "tijera",
      derrota: "papel",
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
        {opciones.map((e, index) => (
          <Opcion elegir={elegirOpcion} valor={opciones[index]} />
        ))}
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
