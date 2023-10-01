function sumZero1(arr) {
  if (arr.length < 2) return undefined;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero2([-2]));
/********************* */

function countUniqueValues1(arr) {
  if (arr.length < 2) return arr.length;

  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      let temp = arr[right];
      left++;
      arr[right] = arr[left];
      arr[left] = temp;
      right++;
    } else {
      right++;
    }
  }
  return left + 1;
}

function countUniqueValues2(arr) {
  if (arr.length < 2) return arr.length;

  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

console.log(countUniqueValues2([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));

/******************** */
function areThereDuplicates1(...args) {
  args.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let i = 0;
  let j = 1;
  console.log(args);

  while (j < args.length) {
    if (args[i] === args[j]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

function areThereDuplicates2(...args) {
  return new Set(args).size != args.length;
}

console.log(areThereDuplicates1("a", "b", "c", "a"));

/********************* */

function averagePair1(numbers, avg) {
  let left = 0;
  let right = 1;

  while (right < numbers.length) {
    let average = (numbers[left] + numbers[right]) / 2;
    if (average < avg) {
      left++;
      right++;
    } else if (average > avg) {
      left--;
    } else {
      return true;
    }
  }
  return false;
}

function averagePair2(numbers, avg) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let average = (numbers[left] + numbers[right]) / 2;
    if (average < avg) {
      left++;
    } else if (average > avg) {
      right--;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair2([1, 2, 3], 2.5)); // true
console.log(averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair2([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair2([], 4)); // false

/*********************** */

function isSubsequence1(str1, str2) {
  if (str1.length > str2.length) return false;

  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function isSubsequence2(str1, str2) {
  if (str1.length > str2.length) return false;

  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  return str1.slice(0, 1) === str2.slice(0, 1)
    ? isSubsequence2(str1.slice(1), str2.slice(1))
    : isSubsequence2(str1, str2.slice(1));
}

console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("sing", "sting")); // true
console.log(isSubsequence2("abc", "abracadabra")); // true
console.log(isSubsequence2("abc", "acb")); // false (order matters)

/**************** */

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  let isSame = true;
  while (left < right) {
    if (str[left] !== str[right]) {
      isSame = false;
      break;
    }
    left++;
    right--;
  }
  return isSame;
}

console.log(isPalindrome("alnsnla"));
