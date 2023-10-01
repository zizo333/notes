function rangeBitCount1(a, b) {
    let numberOfOnes = 0;
    for (let i = a === 0 ? 1 : a; i <= b; i++) {
      let binary = convertToBinary(i);
      numberOfOnes += binary.match(/1/g).length;
    }
    return numberOfOnes;
  }
  
  function convertToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = ~~(decimal / 2);
    }
    return binary;
  }
  
  function rangeBitCount2(a, b) {
    let numberOfOnes = 0;
  
    for (let i = a; i <= b; i++) {
      numberOfOnes += i.toString(2).split("1").length - 1;
    }
  
    return numberOfOnes;
  }
  
  console.log(rangeBitCount1(0, 2));
  