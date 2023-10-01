console.log(removeSpace2(" hel l o ! "));

function removeSpace1(str) {
  let newStr = "";
  for (let ch of str) if (ch !== " ") newStr += ch;

  return newStr;
}

function removeSpace2(str) {
  return str.split(" ").join("");
}
