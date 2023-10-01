function getVowelsCount1(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let ch of str) {
    switch (ch) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
    }
  }
  return count;
}

function getVowelsCount2(str) {
  return str
    .split("")
    .filter(
      (ch) => ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"
    ).length;
}

function getVowelsCount3(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

function getVowelsCount4(str) {
  return str.split("").filter((ch) => "aeiouAEIOU".includes(ch)).length;
}

function getVowelsCount5(str) {
  return str.match(/[aeiou]/g).length;
}

console.log(getVowelsCount5("abracadabra"));
