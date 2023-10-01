console.log(countSheep([true, false, false, true, true, true, true]));

function countSheep(sheeps) {
  if (!Array.isArray(sheeps) || sheeps.length === 0) return 0;

  let count = 0;
  for (let sheep of sheeps) {
    if (typeof sheep !== "boolean") {
      count = 0;
      break;
    }
    if (sheep === true) count++;
  }

  return count;
}
