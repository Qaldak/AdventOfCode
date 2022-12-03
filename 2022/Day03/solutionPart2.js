const fs = require("fs");

const listOfContent = fs.readFileSync("Day03/input.txt", "utf-8");
const contentItems = listOfContent.split("\n");

let priority = 0;

while (contentItems.length > 0) {
  let i1 = contentItems.shift();
  let i2 = contentItems.shift();
  let i3 = contentItems.shift();

  for (let c = 0; c < i1.length; c++) {
    let char = i1.charAt(c);
    let i2found = i2.includes(char);

    if (i2found) {
      let i3found = i3.includes(char);

      if (i3found) {
        let itemPrio = getItemPriority(char);
        // console.log("item priority: " + char + " = " + itemPrio);
        priority = priority + itemPrio;
        break;
      }
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
