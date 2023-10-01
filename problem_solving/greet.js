console.log(greet("zizo"));

function greet(name) {
  return name === "Zizo"
    ? "Hello, my love!"
    : `Hello ${toFirstUpperCase2(name)}!`;
}

function toFirstUpperCase1(str) {
  let code = str.charCodeAt(0);
  if (code < 97 || code > 122) return str;

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += i === 0 ? String.fromCharCode(code - 32) : str[i];
  }

  return newStr;
}

function toFirstUpperCase2(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
