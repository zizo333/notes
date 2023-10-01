function stringy1(size) {
    let result = "";
    for (let i = 1; i <= size; i++) {
      // result += result.endsWith("1") ? "0" : "1";
      result += i % 2;
    }
    return result;
  }
  
  function stringy2(size) {
    return "".padStart(size, "10");
  }
  
  function stringy3(size) {
    return "10".repeat(size).slice(0, size);
  }
  
  console.log(stringy3(5));
  