class SmallestIntegerFinder {
  findSmallestInt1(args) {
    let smallest = args[0] || 0;
    for (let i = 1; i < args.length; i++) {
      if (args[i] < smallest) smallest = args[i];
    }
    return smallest;
  }

  findSmallestInt2(args) {
    return args.sort((a, b) => a - b)[0] || 0;
  }

  findSmallestInt3(args) {
    if (args.length === 0) return 0;
    return Math.min(...args);
  }

  findSmallestInt4(args) {
    return args.reduce((prev, curr) => (prev < curr ? prev : curr));
  }
}

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt4([1, 56, 232, 12, 8]));
