const Contador = (props) => {
  let isMachine;

  if (props.isMachine === true) {
    isMachine = "la CPU";
  } else {
    isMachine = "el Jugador 2";
  }
  return (
    <div className="contador">
      <p>Partidas ganadas por el Jugador 1: {props.firstCount}</p>
      <p>
        Partidas ganadas por {isMachine}: {props.secondCount}
      </p>
    </div>
  );
};

export default Contador;
