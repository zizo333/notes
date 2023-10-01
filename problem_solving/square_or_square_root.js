console.log(squareOrSquareRoot(4, 3, 9, 7, 2, 1));

function squareOrSquareRoot(...array) {
  //   let result = [];

  //   array.forEach((item) => {
  //     let sqrt = Math.sqrt(item);
  //     if (~~sqrt === sqrt) {
  //       result.push(sqrt);
  //     } else {
  //       result.push(item ** 2);
  //     }
  //   });

  //   return result;

  return array.map((item) =>
    Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : item * item
  );
}
