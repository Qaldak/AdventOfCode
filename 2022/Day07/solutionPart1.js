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
console.log("Total size <= 100000: " + sumDirSize(rootDir));

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
  let dirSize = 0;
  if (dir.size <= 100000) {
    dirSize += dir.size;
  }

  dir.subDirectories.forEach((dir) => {
    dirSize += sumDirSize(dir);
  });
  // console.log(dir.name + " " + dir.size);

  return dirSize;
}
