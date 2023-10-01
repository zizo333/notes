function duplicateCount1(text) {
  let obj = {};
  let count = 0;

  text = text.toLowerCase();

  for (let ch of text) {
    obj[ch] ? obj[ch]++ : (obj[ch] = 1);
  }

  for (let key in obj) {
    if (obj[key] > 1) count++;
  }

  return count;
}

function duplicateCount2(text) {
  let arr = text.toLowerCase().split("").sort();
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && !newArr.includes(arr[i])) newArr.push(arr[i]);
  }

  return newArr.length;
}

function duplicateCount3(text) {
  const obj = text
    .toLowerCase()
    .split("")
    .reduce((obj, curr) => {
      obj[curr] ? obj[curr]++ : (obj[curr] = 1);
      return obj;
    }, {});
  console.log(Object.values(obj));

  return Object.values(obj).filter((value) => value > 1).length;
}

console.log(duplicateCount3("ABbcCde11"));
