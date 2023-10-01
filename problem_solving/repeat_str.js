console.log(repeatStr1("hello", 10));

function repeatStr1(n, s) {
  let result = s;

  for (let i = 0; i < n - 1; i++) {
    result += s;
  }

  return result;
}

function repeatStr2(n, s) {
  if (n === 1) return s;
  // return str + repeatStr2(count - 1, str);
  return s.concat(repeatStr2(n - 1, s));
}

function repeatStr3(n, s) {
  return s.repeat(n);
}
