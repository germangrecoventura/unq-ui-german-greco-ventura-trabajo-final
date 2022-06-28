const Eleccion = (props) => {
    return (
      <div className="eleccion">
        <p>Jugador a elegido: {props.firstEleccion}</p>
        <p>Máquina a elegido: {props.secondEleccion}</p>
      </div>
    );
  };
  
  export default Eleccion;
  