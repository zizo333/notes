function validParentheses1(parenStr) {
  while (parenStr.includes("()")) {
    parenStr = parenStr.split("()").join("");
  }

  return parenStr.length === 0;
}

function validParentheses2(parenStr) {
  let curr = 0;

  for (let ch of parenStr) {
    if (ch === "(") curr++;
    else curr--;
    if (curr < 0) return false;
  }

  return curr === 0;
}

console.log(validParentheses2("()))"));
