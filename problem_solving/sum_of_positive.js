console.log(sumOfPositive1([1, -3, 5, 8, -2]));

function sumOfPositive1(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

function sumOfPositive2(numbers) {
  return numbers
    .filter((num) => num > 0)
    .reduce((prev, current) => prev + current, 0);
}
