function maxSubArraySum1(arr, n) {
  if (arr.length < n) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[j + i];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

function maxSubArraySum2(arr, n) {
  if (arr.length < n) return null;
  let temp = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  temp = maxSum;

  for (let i = n; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - n];
    maxSum = Math.max(temp, maxSum);
  }

  return maxSum;
}

console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 9));

/************************ */

function maxSubarraySum(arr, length) {
  if (length > arr.length) return null;

  let max = 0;
  let temp = 0;
  for (let i = 0; i < length; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = 0; i < arr.length - length; i++) {
    temp = temp + arr[length + i] - arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

/****************** */
function minSubArrayLen(arr, n) {
  let total = 0;
  let left = 0;
  let right = 0;
  let minLength = Infinity;

  while (left < arr.length) {
    if (total < n && right < arr.length) {
      total += arr[right];
      right++;
    } else if (total >= n) {
      minLength = Math.min(minLength, right - left);
      total -= arr[left];
      left++;
    } else {
      break;
    }
  }
  return minLength == Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2);
