import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Opcion from "./Opcion";
import { useState } from "react";

function App() {
  const [eleccionJugador, setEleccionJugador] = useState("");
  const [eleccionMaquina, setEleccionMaquina] = useState("");
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
    setEleccionJugador(event.target.textContent);
    eleccionRival()
  };

  const eleccionRival = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)].eleccion;
    setEleccionMaquina(eleccion);
  }

  return (
    <div className="App">
      <div className="jugador">
        Jugador
      </div>
      <div className="eleccion">
        {eleccionJugador}
        <p></p>
      </div>
      <div className="maquina">
        Maquina
      </div>
      <div className="eleccion">
        {eleccionMaquina}
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
