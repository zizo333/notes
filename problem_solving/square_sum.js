function squareSum1(numbers) {
  //   return numbers.reduce((sum, current) => sum + current ** 2, 0);
  return numbers.reduce((sum, current) => sum + Math.pow(current, 2), 0);
}

function squareSum2(numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num ** 2));
  return sum;
}

function squareSum3(numbers) {
  return numbers.length === 0
    ? 0
    : numbers[0] ** 2 + squareSum3(numbers.slice(1));
}

console.log(squareSum1([1, 2, 3]));
