// worst case O(n ^ 2) / best case O(n) with noSwap var / space O(1)

function bubbleSort(arr) {
  let noSwap;
  // every loop i can get the largest number then the one befor t
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function swap(arr, index1, index2) {
  // let temp = arr[index1];
  // arr[index1] = arr[index2];
  // arr[index2] = temp;
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

console.log(bubbleSort([2, 3, 5, 1, 9, 6, 8, 7]));
