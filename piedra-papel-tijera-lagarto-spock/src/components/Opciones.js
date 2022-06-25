const Opciones  =  [
    {
      eleccion: "Piedra",
      derrota: ["Lagarto", "Tijera"],
    },
    {
      eleccion: "Papel",
      derrota: ["Piedra", "Spock"],
    },
    {
      eleccion: "Tijera",
      derrota: ["Papel", "Lagarto"],
    },
    {
      eleccion: "Lagarto",
      derrota: ["Spock", "Papel"],
    },
    {
      eleccion: "Spock",
      derrota: ["Tijera", "Piedra"],
    },
  ];
  
  export default Opciones;