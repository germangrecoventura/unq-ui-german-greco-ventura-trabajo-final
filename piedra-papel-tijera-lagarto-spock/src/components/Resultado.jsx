import React from "react";

const Resultado = (props) => {
  let resultadoFinal;
  if (
    props.jugador.eleccion &&
    props.jugador.derrota.includes(props.maquina.eleccion)
  ) {
    resultadoFinal = <h1>Ganador: Jugador</h1>;
  } else if (
    props.jugador.eleccion &&
    props.maquina.derrota.includes(props.jugador.eleccion)
  ) {
    resultadoFinal = <h1>Ganador: Máquina</h1>;
  } else if (
    props.jugador.eleccion &&
    props.jugador.eleccion === props.maquina.eleccion) {
    resultadoFinal = <h1>Empate</h1>;
  }

  return <>{resultadoFinal}</>;
};

export default Resultado;
