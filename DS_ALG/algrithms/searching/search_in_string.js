function searchInString1(longStr, shortStr) {
  if (shortStr.length > longStr.length) return 0;

  let count = 0;
  for (let i = 0, j = 0; i < longStr.length; i++) {
    if (longStr[i] === shortStr[j] && j === shortStr.length - 1) {
      j = 0;
      count++;
    } else if (longStr[i] === shortStr[j]) {
      j++;
    } else {
      j = 0;
    }
  }
  return count;
}

function searchInString2(longStr, shortStr) {
  if (shortStr.length > longStr.length) return 0;

  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    if (shortStr === longStr.slice(i, shortStr.length + i)) {
      count++;
    }
  }

  return count;
}

function searchInString3(longStr, shortStr) {
  if (shortStr.length > longStr.length) return 0;

  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        break;
      }
      if (j === shortStr.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(searchInString3("wowomgzomgddomg", "omg"));
