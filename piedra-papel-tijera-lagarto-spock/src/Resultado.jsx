import React from "react"

const Resultado = (props) => {
    let resultadoFinal;

    if(props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion){
        resultadoFinal = <h1>Ganador: Jugador</h1>
    } else if (props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion){
        resultadoFinal = <h1>Ganador: Máquina</h1>
    } else{
        resultadoFinal = <h1>Empate</h1>
    }
    

    return(
        <h1>{resultadoFinal}</h1>
    )
}

export default Resultado;