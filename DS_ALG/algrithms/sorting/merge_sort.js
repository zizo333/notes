// time O(nlogn) / space O(n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let result = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else {
      result.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    result.push(arr1[left]);
    left++;
  }
  while (right < arr2.length) {
    result.push(arr2[right]);
    right++;
  }

  return result;
}

console.log(mergeSort([3, 4, 1, 2, 6, 7, 9]));
