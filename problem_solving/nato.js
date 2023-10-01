function nato1(word) {
  let str = "";
  for (let i = 0; i < word.length; i++) {
    str = str + getOneWord(word[i]) + (i === word.length - 1 ? "" : " ");
  }

  return str;
}

function nato2(word) {
  return word
    .split("")
    .map((ch) => getOneWord(ch))
    .join(" ");
}

function getOneWord(ch) {
  return {
    a: "Alpha",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliett",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "X-ray",
    y: "Yankee",
    z: "Zulu",
  }[ch.toLowerCase()];
}

console.log(nato2("hi"), "Hotel India");
console.log(nato2("abc"), "Alpha Bravo Charlie");
console.log(nato2("babble"), "Bravo Alpha Bravo Bravo Lima Echo");
console.log(nato2("Banana"), "Bravo Alpha November Alpha November Alpha");
