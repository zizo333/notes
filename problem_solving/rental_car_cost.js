function rentalCarCost(d) {
    // const dayCost = 40;
    // let totalCost = dayCost * d;
  
    // if (d >= 7) totalCost -= 50;
    // else if (d >= 3) totalCost -= 20;
  
    // return totalCost;
  
    return 40 * d - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
  }
  
  console.log(rentalCarCost(8));
  