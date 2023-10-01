function removeFirstAndLastChar1(string) {
  let arr = string.split(",");
  return arr.length < 3 ? null : arr.slice(1, -1).join(" ");
}

function removeFirstAndLastChar2(string) {
  let arr = [];
  let result = "";
  for (let ch of string) {
    if (ch !== ",") arr.push(ch);
  }

  if (arr.length < 3) return null;
  for (let i = 1; i < arr.length - 1; i++) {
    result += arr[i] + `${i === arr.length - 2 ? "" : " "}`;
  }

  return result;
}

console.log(removeFirstAndLastChar2("1,2,3,A1,A2"));
