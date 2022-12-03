const fs = require("fs");
const path = require("path");

function readInputFile(__dirname) {
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
  return input;
}

module.exports = { readInputFile };
