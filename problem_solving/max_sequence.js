// const maxSequence = function (arr, n) {
//   if (arr.length === 0 || n > arr.length || isAllNegative(arr)) return 0;

//   let initSum = 0;
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum = initSum += arr[i];
//   }

//   for (let i = 0, j = n; j < arr.length; i++, j++) {
//     initSum += arr[j] - arr[i];
//     if (initSum > sum) sum = initSum;
//   }
//   // for (let i = 0; i <= arr.length - n; i++) {
//   //   let tempSum = 0;
//   //   for (let j = i; j < n + i; j++) {
//   //     tempSum += arr[j];
//   //   }
//   //   if (tempSum > sum) sum = tempSum;
//   // }

//   return sum;
// };

const maxSequence = function (arr) {
  let sum = 0;

  for (tempSum = 0, i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (tempSum < 0) tempSum = 0;
    if (tempSum > sum) sum = tempSum;
  }

  return sum;
};

const isAllNegative = function (arr) {
  let isNegative = true;
  for (let item of arr) {
    if (item > 0) {
      isNegative = false;
      break;
    }
  }
  return isNegative;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
