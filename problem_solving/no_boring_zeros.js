function noBoringZeros1(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

function noBoringZeros2(n) {
  return n !== 0 && n % 10 === 0 ? noBoringZeros2(n / 10) : n;
}

console.log(noBoringZeros2(1450));
