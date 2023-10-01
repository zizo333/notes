console.log(digitize1(123494));

function digitize1(n) {
  if (!n || n < 0) return [];

  let result = [];
  while (n > 0) {
    result.push(n % 10);
    // n = Math.trunc(n / 10);
    // n = ~~(n / 10);
    // n = (n / 10) >> 0;
    // n = (n / 10) << 0;
    // n = (n / 10) >>> 0;
    // n = (n / 10) | 0;
    // n = Number.parseInt(n / 10);
    // let num = n / 10;
    // n = num - (num % 1);
    let numStr = new String(n / 10);
    n = new Number(numStr.split(".")[0]);
  }

  return result;
}

function digitize2(n) {
  if (!n || n < 0) return [];

  return n
    .toString()
    .split("")
    .reverse()
    .map((n) => convertStringToNumber(n));
}

function convertStringToNumber(n) {
  //   return Math.trunc(n);

  //   return Math.floor(n);

  //   return Math.ceil(n);

  //   return Math.round(n);

  //   return parseInt(n);

  //   return parseFloat(n);

  //   return  +n;

  //   return  n * 1;

  //   return n - 0;

  return ~~n;
}
