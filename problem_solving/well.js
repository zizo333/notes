function well(x) {
    //   let count = 0;
    //   x.forEach((element) => {
    //     if (element === "good") count++;
    //     if (count > 2) return;
    //   });
  
    //   return count > 2 ? "I smell a series!" : count > 0 ? "Publish!" : "Fail!";
    let count = x.reduce((count, current) => (current === "good" ? 1 : 0), 0);
    return count > 2 ? "I smell a series!" : count > 0 ? "Publish!" : "Fail!";
  }
  
  console.log(well(["bad", "bad", "bad"]), "Fail!");
  console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
  console.log(
    well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
    "I smell a series!"
  );
  