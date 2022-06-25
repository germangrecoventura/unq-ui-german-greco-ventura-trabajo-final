import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}></Resultado>
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
      </div> */}
      {/*       <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
