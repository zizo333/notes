function distinct1(arr) {
  let result = [];
  for (let item of arr) {
    if (!result.includes(item)) result.push(item);
  }
  return result;
}

function distinct2(arr) {
  return [...new Set(arr)];
}

function distinct3(arr) {
  return arr.filter((item, i) => arr.indexOf(item) === i);
}

console.log(distinct3([1, 1, 2]));
