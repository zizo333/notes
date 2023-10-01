// O(n ^ 2) - O(n)  / space O(1)
function insertionSort(arr) {
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
