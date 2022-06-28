import { useState } from "react";
import Slider from "react-slick";
import Resultado from "./Resultado";
import Opcion from "./Opcion";
import opciones from "./Opciones";
import Contador from "./Contador";
import Eleccion from "./Eleccion";

const Home = () => {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});
  const [contadorDeVictoriasDelJugador, setContadorDeVictoriasDelJugador] =
    useState(0);
  const [contadorDeVictoriasDeLaMaquina, setContadorDeVictoriasDeLaMaquina] =
    useState(0);

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

  const contabilizarVictoriaJugador = () => {
    /* setContadorDeVictoriasDelJugador(ca => ca + 1) */
    /*     setContadorDeVictoriasDelJugador(contadorDeVictoriasDelJugador + 1);
     */
  };

  const contabilizarVictoriaMaquina = () => {
    /*     setContadorDeVictoriasDeDeLaMaquina(contadorDeVictoriasDeLaMaquina + 1);
     */
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
      <Contador
        isMachine={false}
        firstCount={contadorDeVictoriasDelJugador}
        secondCount={contadorDeVictoriasDeLaMaquina}
      />
      <Eleccion
        firstEleccion={eleccionJugador.eleccion}
        secondEleccion={eleccionMaquina.eleccion}
      />
      <div className="opciones">
        <Slider {...sliderSetings}>
          {opciones.map((e, index) => (
            <Opcion elegir={elegirOpcion} valor={opciones[index]} key={index} />
          ))}
        </Slider>
      </div>
      <Resultado
        jugador={eleccionJugador}
        maquina={eleccionMaquina}
    /*     victoriaJugador={() =>
          setContadorDeVictoriasDelJugador(contadorDeVictoriasDelJugador + 88)
        }
        victoriaMaquina= {() => setContadorDeVictoriasDeLaMaquina(c => c + 1)} */
      ></Resultado>
    </>
  );
};

export default Home;
