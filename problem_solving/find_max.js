function findMax1(arr) {
  if (arr.length === 0) return 0;
  let max = 0;

  for (let num of arr) {
    max = Math.max(max, num);
  }
  return max;
}

function findMax2(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  let v1 = arr[0];
  let v2 = findMax2(arr.slice(1));
  return Math.max(v1, v2);
}

function findMax3(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = arr.length - 1;
  let max = 0;
  while (left <= right) {
    max = Math.max(max, Math.max(arr[left], arr[right]));
    left++;
    right--;
  }
  return max;
}

console.log(findMax3([2, 3, 1, 5, 4]));
