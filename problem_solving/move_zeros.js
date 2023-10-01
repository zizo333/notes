function moveZeros1(arr) {
    let newArr = [];
  
    arr.forEach((element) => {
      if (element !== 0) newArr.push(element);
    });
    newArr.push(
      ...Array.from({ length: arr.length - newArr.length }, (_, __) => 0)
    );
    return newArr;
  }
  
  function moveZeros2(arr) {
    return [
      ...arr.filter((item) => item !== 0),
      ...arr.filter((item) => item === 0),
    ];
  }
  
  console.log(moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
  