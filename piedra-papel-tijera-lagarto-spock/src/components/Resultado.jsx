import React from "react";

const Resultado = (props) => {
  let resultadoFinal;
  if (
    props.jugador.eleccion &&
    props.jugador.derrota.includes(props.maquina.eleccion)
  ) {
    /* props.victoriaJugador */
    resultadoFinal = <h1>Ganador: Jugador</h1>;
  } else if (
    props.jugador.eleccion &&
    props.maquina.derrota.includes(props.jugador.eleccion)
  ) {
    /* props.victoriaMaquina */
    resultadoFinal = <h1>Ganador: Máquina</h1>;
  } else if (
    props.jugador.eleccion &&
    props.jugador.eleccion === props.maquina.eleccion
  ) {
    resultadoFinal = <h1>Empate</h1>;
  }

  return <div className="resultado">{resultadoFinal}</div>;
};

export default Resultado;
