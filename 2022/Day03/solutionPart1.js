const fs = require("fs");

const listOfContent = fs.readFileSync("Day03/input.txt", "utf-8");
const contentItems = listOfContent.split("\n");

let priority = 0;

for (let item of contentItems) {
  let middle = item.length / 2;

  let itemPt1 = item.substring(0, middle);
  let itemPt2 = item.substring(middle, item.length);

  for (let i = 0; i < itemPt1.length; i++) {
    let char = itemPt1.charAt(i);
    let found = itemPt2.includes(char);
    if (found) {
      let itemPrio = getItemPriority(char);
      // console.log("item priority: " + char + " = " + itemPrio);
      priority = priority + itemPrio;
      break;
    }
  }
}

console.log("Total priority: " + priority);

function getItemPriority(char) {
  let priority = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
  };
  return priority[char];
}
