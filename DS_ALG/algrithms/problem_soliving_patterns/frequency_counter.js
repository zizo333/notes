function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let isExist = false;
  let indexes = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] ** 2 === arr2[j] && !indexes.includes(j)) {
        isExist = true;
        indexes.push(j);
        break;
      } else {
        isExist = false;
      }
    }
    if (!isExist) {
      break;
    }
  }
  return isExist;
}

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let n of arr1) {
    let correctIndex = arr2.indexOf(n ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function same3(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let n of arr1) {
    freqCounter1[n] = (freqCounter1[n] || 0) + 1;
  }
  for (let n of arr2) {
    freqCounter2[n] = (freqCounter2[n] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter1[key ** 2] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(same3([1, 2, 3], [1, 4, 9]));

/************************* */
function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let ch of str1) {
    freqCounter1[ch] = (freqCounter1[ch] || 0) + 1;
  }

  for (let ch of str2) {
    freqCounter2[ch] = (freqCounter2[ch] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }
  return true;
}

function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  let obj = {};

  for (let ch of first) {
    obj[ch] = (obj[ch] || 0) + 1;
  }

  for (let ch of second) {
    if (!obj[ch]) return false;
    obj[ch]--;
  }
  return true;
}

console.log(validAnagram2("rat", "car"));

/************************ */

function sameFrequency(num1, num2) {
  let frequency1 = generateFrequency(num1);
  let frequency2 = generateFrequency(num2);

  if (Object.keys(frequency1).length !== Object.keys(frequency2).length) {
    return false;
  }
  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
}

function generateFrequency(num) {
  let frequency = {};
  while (num > 0) {
    let digit = num % 10;
    frequency[digit] = (frequency[digit] || 0) + 1;
    num = ~~(num / 10);
  }
  return frequency;
}

console.log(sameFrequency(182, 281));

/************************ */
function areThereDuplicates(...args) {
  let frequency = {};
  for (let arg of args) {
    frequency[arg] = (frequency[arg] || 0) + 1;
    if (frequency[arg] > 1) {
      return true;
    }
  }

  return false;
}
