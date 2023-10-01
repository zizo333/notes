console.log(reverse2("Hello Zizo"));

function reverse1(str) {
  let arr = [];
  for (let s of str.split(" ")) {
    arr.unshift(s);
  }
  return arr.join(" ");
}

function reverse2(str) {
  return str.split(" ").reverse().join(" ");
}
