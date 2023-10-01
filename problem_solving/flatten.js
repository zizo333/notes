const flatten1 = (...args) => {
  let result = [];
  for (let arg of args) {
    if (Array.isArray(arg)) {
      let innerResult = flatten1(...arg);
      result = result.concat(innerResult);
      // //   for (let item of innerResult) {
      // //     result.push(item);
      // //   }
    } else {
      result.push(arg);
    }
  }
  return result;
};

const flatten2 = (...args) => args.toString().split(",");

const flatten3 = (...args) =>
  args.reduce(
    (result, arg) => result.concat(Array.isArray(arg) ? flatten3(...arg) : arg),
    []
  );

console.log(flatten3(1, [2, 3], 4, 5, [6, [7, [8, 9]]]));
