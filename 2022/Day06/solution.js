const { readInputFile } = require("../helper");

const inputList = readInputFile(__dirname).split("\n");

getStartMarker(4);
getStartMarker(14);

function getStartMarker(distinctChars) {
  for (let signal of inputList) {
    let startPoint = 0;
    while (true) {
      let marker = signal.substr(startPoint, distinctChars);

      let hasDuplicates = checkDuplicates(marker);

      if (!hasDuplicates) {
        console.log("marker after: " + (startPoint + distinctChars));
        break;
      }

      startPoint++;
      continue;
    }
  }
}

function checkDuplicates(marker) {
  return new Set(marker).size !== marker.length;
}
