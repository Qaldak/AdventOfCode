const { inspect } = require("util");
const { readInputFile } = require("../helper");

const commandList = readInputFile(__dirname).split("\n");

const rootDir = {
  parentDirectory: null,
  name: "/",
  size: 0,
  subDirectories: [],
};

let currentDirectory = rootDir;
readFileystem();

let bigEnoughDirectories = [];
sumDirSize(rootDir);

console.log("Delete dir with size " + Math.min(...bigEnoughDirectories));

bigEnoughDirectories.sort(function (a, b) {
  return a - b;
});
console.log("Delete dir with size " + bigEnoughDirectories[0]);

function readFileystem() {
  for (let command of commandList) {
    if (command.includes("$ cd ..")) {
      currentDirectory = currentDirectory.parentDirectory;
    } else if (command.includes("$ cd /")) {
      currentDirectory = rootDir;
    } else if (command.includes("$ cd")) {
      currentDirectory.subDirectories.forEach((dir) => {
        if (dir.name === command.split(" ")[2]) {
          currentDirectory = dir;
        }
      });
    }

    if (command.includes("dir")) {
      currentDirectory.subDirectories.push({
        parentDirectory: currentDirectory,
        name: command.split(" ")[1],
        size: 0,
        subDirectories: [],
      });
    }

    if (command.match(new RegExp(/^\d/)) !== null) {
      addFile(currentDirectory, parseInt(command.split(" ")[0]));
    }
  }

  function addFile(dir, size) {
    dir.size += size;
    if (dir.parentDirectory !== null) {
      addFile(dir.parentDirectory, size);
    }
  }
}

function sumDirSize(dir) {
  let neededSpace = 30000000 - (70000000 - rootDir.size);
  if (dir.size >= neededSpace) {
    bigEnoughDirectories.push(dir.size);
  }

  dir.subDirectories.forEach((dir) => {
    sumDirSize(dir);
  });
}
