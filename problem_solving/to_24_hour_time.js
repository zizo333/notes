function to24hourtime1(hour, minute, period) {
  let time = "";
  let m = `${minute > 9 ? minute : `0${minute}`}`;

  if (period === "am") {
    hour %= 12;
    time = `${hour > 9 ? `${hour}` : `0${hour}`}${m}`;
  } else {
    time = `${hour === 12 ? hour : hour + 12}${m}`;
  }

  return time;
}

function to24hourtime2(hour, minute, period) {
  //   if (period === "am" && hour === 12) hour = 0;
  //   else if (period === "pm" && hour !== 12) hour += 12;
  if (period === "pm" && hour !== 12) hour += 12;
  else hour %= 12;

  return `${hour.toString().padStart(2, "0")}${minute
    .toString()
    .padStart(2, 0)}`;
}

console.log(to24hourtime2(1, 0, "am"), "0100", "Input =  1:00 am");
console.log(to24hourtime2(1, 0, "pm"), "1300", "Input =  1:00 pm");
console.log(to24hourtime2(12, 0, "am"), "0000", "Input = 12:00 am");
console.log(to24hourtime2(12, 0, "pm"), "1200", "Input = 12:00 pm");
console.log(to24hourtime2(6, 30, "am"), "0630", "Input =  6:30 am");
console.log(to24hourtime2(9, 45, "pm"), "2145", "Input =  9:45 pm");
