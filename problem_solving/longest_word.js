function lognestWord(str) {
  let long = "";

  for (let word of str.split(" ")) {
    if (word.length > long.length) {
      long = word;
    }
  }
  return long;
}

console.log(lognestWord("hello my world dear"));
