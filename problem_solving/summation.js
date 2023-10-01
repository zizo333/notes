console.log(summation1(8));

function summation1(num) {
  let result = 0;
  for (var i = 1; i <= num; i++) result += i;
  return result;
}

function summation2(num) {
  return num ? num + summation2(num - 1) : num;
}

function summation3(num) {
  return (num * (num + 1)) / 2;
}
