console.log(doubleChar2("Hello Zizo!"));

function doubleChar1(str) {
  let newStr = "";
  for (let char of str) {
    newStr += `${char}${char}`;
  }

  return newStr;
}

function doubleChar2(str) {
  return str
    .split("")
    .map((char) => char.repeat(2))
    .join("");
}
