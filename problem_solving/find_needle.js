console.log(findNeedle2(["zizo", "Ali", "needle", "hello"]));

function findNeedle1(arr) {
  let position = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "needle") {
      position = i;
      break;
    }
  }
  return position === -1
    ? "Not found"
    : `Found the needle at position ${position}`;
}

function findNeedle2(arr) {
  return `Found the needle at position ${arr.indexOf("needle")}`;
}
