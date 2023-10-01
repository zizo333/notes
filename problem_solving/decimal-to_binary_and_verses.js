console.log(calcBitwise(7, 12, bitwiseAND));
console.log(calcBitwise(7, 12, bitwiseOR));
console.log(calcBitwise(7, 12, bitwiseXOR));

function bitwiseAND(n1, n2) {
  return n1 & n2;
}
function bitwiseOR(n1, n2) {
  return n1 | n2;
}
function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

function calcBitwise(n1, n2, operation) {
  let b1 = convertFromDecimalToBinary(n1);
  let b2 = convertFromDecimalToBinary(n2);
  let result = "";

  for (let i = 0; i < b1.length; i++) {
    result += operation(+b1[i], +b2[i]);
  }

  return convertFromBinaryToDecimal(result);
}

function convertFromBinaryToDecimal(binary) {
  let base = 2;
  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    let index = binary.length - i - 1;
    if (index !== 0) {
      let pow = base ** i;
      result += pow * binary[index];
    }
  }
  return result;
}

function convertFromDecimalToBinary(decimal) {
  let binary = "";
  let base = 2;

  while (decimal > 0) {
    binary = `${decimal % base}${binary}`;
    decimal = ~~(decimal / base);
  }

  return to_8_digits(binary);

  //   return to_8_digits(decimal.toString(2));
}

function to_8_digits(binary) {
  let length = 8 - binary.length;
  for (let i = 0; i < length; i++) binary = `0${binary}`;

  return binary;
  //   return binary.padStart(8, "0");
}
