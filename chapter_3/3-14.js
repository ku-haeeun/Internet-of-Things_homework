var func = function(a, b, c) {
    console.log(this, a, b, c);
  };
  
  func(1, 2, 3); // Window{ ... } 1 2 3
  func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

  //call 메서드 -> 임의의 객체를 this로 지정할 수 있음.