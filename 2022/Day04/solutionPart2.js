const { readInputFile } = require("../helper");

const assignments = readInputFile(__dirname);
const pairs = assignments.split("\n");

let overlappedSections = 0;

for (let pair of pairs) {
  let comma = pair.indexOf(",");
  let p1 = pair.substring(0, comma);
  let p2 = pair.substring(comma + 1, pair.length);

  let sectionOne = getSectionValues(p1);
  let sectionTwo = getSectionValues(p2);

  if (
    (sectionOne.start >= sectionTwo.start &&
      sectionOne.start <= sectionTwo.end) ||
    (sectionOne.end <= sectionTwo.end && sectionOne.end >= sectionTwo.start) ||
    (sectionTwo.start >= sectionOne.start &&
      sectionTwo.start <= sectionOne.end) ||
    (sectionTwo.end <= sectionOne.end && sectionTwo.end >= sectionOne.start)
  ) {
    overlappedSections = overlappedSections + 1;
  }
}

console.log("Sections overlapped: " + overlappedSections);

function getSectionValues(string) {
  let splitter = string.indexOf("-");
  let sectionStart = parseInt(string.substring(0, splitter));
  let sectionEnd = parseInt(string.substring(splitter + 1, string.length));

  return {
    start: sectionStart,
    end: sectionEnd,
  };
}
