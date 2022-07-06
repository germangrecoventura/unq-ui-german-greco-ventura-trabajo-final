const PossibleCases = [
  {
    choice: "Rock",
    defeat: ["Lizard", "Scissors"],
  },
  {
    choice: "Paper",
    defeat: ["Rock", "Spock"],
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
    defeat: ["Scissors", "Rock"],
  },
];

export default PossibleCases;
