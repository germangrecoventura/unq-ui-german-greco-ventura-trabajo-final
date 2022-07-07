const PossibleCases = [
  {
    choice: "Stone",
    defeat: ["Lizard", "Scissors"],
  },
  {
    choice: "Paper",
    defeat: ["Stone", "Spock"],
  },
  {
    choice: "Scissors",
    defeat: ["Paper", "Lizard"],
  },
  {
    choice: "Lizard",
    defeat: ["Spock", "Paper"],
  },
  {
    choice: "Spock",
    defeat: ["Scissors", "Stone"],
  },
];

export default PossibleCases;
