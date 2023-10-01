function billboard(name, price = 30) {
    let result = 0;
    for (let i = 0; i < name.length; i++) result += price;
  
    return result;
  }
  
  function billboard2(name, price = 30) {
    return name.length === 1 ? price : price + billboard2(name.slice(1), price);
  }
  
  function billboard3(name, price = 30) {
    //   return name.split("").reduce((sum, _) => sum + price, 0);
    return [...name].reduce((sum, _) => sum + price, 0);
  }
  
  function billboard4(name, price = 30) {
    return name.length / (1 / price);
  }
  
  function billboard5(name, price = 30) {
    return name.repeat(price).length;
  }
  
  function billboard6(name, price = 30) {
    return Math.imul(name.length, price);
  }
  
  console.log(billboard3("Hadufuns John", 20));
  