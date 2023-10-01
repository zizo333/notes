function eliminateUnsetBits(numbers) {
  //   let filteredNumbers = "";

  //   for (let ch of numbers) {
  //     if (ch === "1") filteredNumbers += "1";
  //   }
  //   return convertBinaryToDecimal(
  //     numbers.split("").filter((number) => number == 1)
  //   );
  return parseInt(numbers.split("0").join(""), 2) || 0;
}

function convertBinaryToDecimal(numbers) {
  let base = 2;
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += base ** i * numbers[numbers.length - 1 - i];
  }

  return result;
}

console.log(eliminateUnsetBits("000000"));
