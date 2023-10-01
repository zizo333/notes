// time O(nk) / space O(n + k)

function radixSort(numbers) {
  let count = mostDigits(numbers);

  for (let k = 0; k < count; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numbers.length; i++) {
      digitBuckets[getDigit(numbers[i], k)].push(numbers[i]);
    }
    // numbers = [];
    // for (let digitBucket of digitBuckets) {
    //   numbers.push(...digitBucket);
    // }
    numbers = [].concat(...digitBuckets);
  }
  return numbers;
}

function getDigit(num, position) {
  // if (position === 0) return num % 10;
  // return getDigit(Math.trunc(num / 10), position - 1);
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function mostDigits(numbers) {
  let maxCount = 0;
  for (let num of numbers) {
    maxCount = Math.max(getCount(num), maxCount);
  }
  return maxCount;
}

function getCount(num) {
  if (num === 0) return 1;
  // let i = 0;
  // while (num > 0) {
  //   num = ~~(num / 10);
  //   i++;
  // }
  // return i;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(radixSort([100, 200, 112, 2346, 4986, 99, 0, 10]));
