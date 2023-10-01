console.log(sumArray1(3, 5, 7, 3));

function sumArray1(arr) {
  let newArr = filter(arr);
  let sum = 0;
  for (let item of newArr) sum += item;

  return sum;
}

function filter(arr) {
  if (!arr || arr.length === 0) return [];
  let newArr = [];
  let maxIndex = 0;
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i === minIndex || i === maxIndex) continue;
    newArr.push(arr[i]);
  }

  return newArr;
}

function sumArray2(arr) {
  return !arr
    ? 0
    : arr
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((prev, current) => prev + current, 0);
}
