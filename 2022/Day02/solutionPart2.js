const fs = require("fs");

const gameplay = fs.readFileSync("Day02/input.txt", "utf-8");
const games = gameplay.split("\n");

let totalScore = 0;

for (let game of games) {
  let gameScore = getGamePoints(game.replace(" ", ""));
  game = getMove(game.charAt(2), game.charAt(0));
  totalScore = totalScore + gameScore + getMovePoints(game.charAt(2));
}

console.log("Total score: " + totalScore);

function getMove(end, oppMove) {
  switch (end) {
    case "X":
      if (oppMove === "A") {
        return "A Z";
      } else if (oppMove === "B") {
        return "B X";
      } else {
        return "C Y";
      }
    case "Y":
      if (oppMove === "A") {
        return "A X";
      } else if (oppMove === "B") {
        return "B Y";
      } else {
        return "C Z";
      }

    default:
      if (oppMove === "A") {
        return "A Y";
      } else if (oppMove === "B") {
        return "B Z";
      } else {
        return "C X";
      }
  }
}

function getGamePoints(game) {
  switch (game) {
    // Won games
    case "AZ":
    case "BZ":
    case "CZ":
      return 6;

    // Drawn games
    case "AY":
    case "BY":
    case "CY":
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
