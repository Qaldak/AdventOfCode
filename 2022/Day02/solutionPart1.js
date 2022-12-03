const fs = require("fs");
const path = require("path");

const gameplay = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
const games = gameplay.split("\n");

let totalScore = 0;

for (let game of games) {
  totalScore =
    totalScore +
    getGamePoints(game.replace(" ", "")) +
    getMovePoints(game.charAt(2));
}

console.log("Total score: " + totalScore);

function getGamePoints(game) {
  switch (game) {
    // Won games
    case "AY":
    case "BZ":
    case "CX":
      return 6;

    // Drawn games
    case "AX":
    case "BY":
    case "CZ":
      return 3;

    // Lost games
    default:
      return 0;
  }
}

function getMovePoints(move) {
  switch (move) {
    case "X":
      return 1;
    case "Y":
      return 2;
    default:
      return 3;
  }
}
