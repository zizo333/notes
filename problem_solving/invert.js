console.log(invert2([1, -2, 3, 4, -6]));

function invert1(arr) {
  return arr.map((item) => -item);
}

function invert2(arr) {
  let newArr = [];

  for (let item of arr) {
    newArr.push(-item);
  }
  return newArr;
}
