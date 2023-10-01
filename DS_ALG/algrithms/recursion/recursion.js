function checkOddNumber(numbers) {
  if (numbers.length === 0) return false;
  return numbers[0] % 2 !== 0 ? true : checkOddNumber(numbers.slice(1));
}

console.log(checkOddNumber([2, 8, 4, 6, 10, 12]));

/*************************** */

function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  countDown(num - 1);
}

countDown(5);

/*************************** */

function factorial1(num) {
  let result = 1;
  for (let i = num; i > 0; i--) result *= i;
  return result;
}

function factorial2(num) {
  if (num <= 1) return 1;
  return num * factorial2(num - 1);
}

console.log(factorial1(3));

/***************** */
function collectOdds1(numbers) {
  let result = [];

  function helper(innerNumbers) {
    if (innerNumbers.length === 0) return;
    if (innerNumbers[0] % 2 !== 0) result.push(innerNumbers[0]);
    helper(innerNumbers.slice(1));
  }
  helper(numbers);
  return result;
}

function collectOdds2(numbers) {
  let result = [];
  if (numbers.length === 0) return result;
  if (numbers[0] % 2 !== 0) {
    result.push(numbers[0]);
  }

  return result.concat(collectOdds2(numbers.slice(1)));
}

console.log(collectOdds2([3, 4, 7, 9, 1, 11, 10]));

/******************** */
function power(b, e) {
  if (e === 0 || (b === 0 && e === 0)) return 1;
  if (e === 1) return b;
  return b * power(b, e - 1);
}

console.log(power(2, 0));

/********************** */
function productOfArray(numbers) {
  return numbers.length === 0
    ? 1
    : numbers[0] * productOfArray(numbers.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

/************************** */

function recursiveRange(number) {
  if (number <= 1) return number;
  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(4));

/*************************** */

function fib1(num) {
  let prev = 0;
  let sec = 1;
  let temp = 0;
  for (let i = 0; i < num - 1; i++) {
    temp = sec;
    sec = prev + sec;
    prev = temp;
  }
  return sec;
}

function fib2(num) {
  let prev = 0;
  let next = 1;

  function helper(num) {
    if (num <= 1) return;
    let sum = prev + next;
    prev = next;
    next = sum;
    helper(num - 1);
  }
  helper(num);

  return next;
}

function fib3(num) {
  if (num <= 2) return 1;
  return fib3(num - 1) + fib3(num - 2);
}

console.log(fib3(10));
/********************* */

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("zizo"));
/***************** */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("alnsnla"));
/***************** */

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
/***************** */
function flatten(arr) {
  let newArr = [];

  for (let item of arr) {
    if (item instanceof Object && Array.isArray(item)) {
      newArr = newArr.concat(flatten(item));
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6, [7, 8]], 9]));
/***************** */
function capitalizeFirst(arr) {
  const toUpperCase = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

  if (arr.length === 0) return [];
  return [toUpperCase(arr[0])].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["zizo", "basma", "Ali"]));
/***************** */
