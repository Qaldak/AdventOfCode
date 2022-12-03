const fs = require("fs");
const path = require("path");

const caloriesByElf = fs.readFileSync(
  path.join(__dirname, "input.txt"),
  "utf-8"
);
const sum = (prev, curr) => prev + curr;

let sortedElves = caloriesByElf
  .trim()
  .split(/\r?\n\r?\n/)
  .map((elf) =>
    elf
      .split(/\r?\n/)
      .map((x) => parseInt(x))
      .reduce(sum, 0)
  )
  .sort((a, b) => a - b);

console.log("Total calories carried by elf: " + sortedElves.at(-1));
console.log(
  "Total calories carried by top 3 elves: " +
    sortedElves.slice(-3).reduce(sum, 0)
);
