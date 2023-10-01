console.log(
    countPositivesSumNegatives(
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      -11,
      -12,
      -13,
      -14,
      -15
    )
  );
  
  function countPositivesSumNegatives(...numbers) {
    let result = new Array(0, 0);
  
    numbers.forEach((number) => {
      if (number > 0) result[0]++;
      else result[1] += number;
    });
  
    return result;
  }
  