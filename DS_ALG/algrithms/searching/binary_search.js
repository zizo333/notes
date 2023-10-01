// O(logn)  -  O(1)
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let average = ~~((left + right) / 2);
    if (arr[average] === value) return average;
    else if (value > arr[average]) {
      left = average + 1;
    } else {
      right = average - 1;
    }
  }
  return -1;
}

console.log(binarySearch([10, 15, 20, 25, 30], 15)); // 1
console.log(binarySearch([100], 200)); // -1
