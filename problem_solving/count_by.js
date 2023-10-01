console.log(countBy(1, 10));

function countBy(x, n) {
  //   let result = [];
  //   for (let i = 1; i <= n; i++) {
  //     result.push(x * i);
  //   }

  //   return result;

  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}
