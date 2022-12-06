const { readInputFile } = require("../helper");

const input = readInputFile(__dirname).split("\n\n");

const cratesInput = input[0].split("\n").reverse();
const crates = Array.from(Array(9), () => []);

for (let i = 1; i < cratesInput.length; i++) {
  const row = cratesInput[i].match(/.{1,4}/g);

  for (let j = 0; j < row.length; j++) {
    let crate = row[j]
      .replace("[", "")
      .replace("]", "")
      .replace(" ", "")
      .replace("   ", "");
    if (crate.length) {
      crates[j].push(crate);
    }
  }
}

const movesInput = input[1].split("\n");

for (let i = 0; i < movesInput.length; i++) {
  const move = movesInput[i]
    .replace("move ", "")
    .replace("from ", "")
    .replace("to ", "")
    .split(" ")
    .map(Number);

  moveCrates(move[0], move[1] - 1, move[2] - 1);
}

let result = getResult();
console.log("result: " + result);

function getResult() {
  let result = "";
  for (let c = 0; c < crates.length; c++) {
    let topCrate = crates[c].length - 1;
    let stack = crates[c];
    result = result + stack[topCrate];
  }
  return result;
}

function moveCrates(quantity, source, target) {
  let movingCrates = crates[source].slice(-quantity);

  for (let i = 0; i < quantity; i++) {
    crates[source].pop();
    let crate = movingCrates.shift();
    crates[target].push(crate);
  }
}
