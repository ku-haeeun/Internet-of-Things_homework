var obj1 = {
    outer: function() {
      console.log(this); // (1)
      var innerFunc = function() {
        console.log(this); // (2) (3)
      };
      innerFunc();  // 내부 함수에서의 this
  
      var obj2 = {
        innerMethod: innerFunc,
      };
      obj2.innerMethod();
    },
  };
  obj1.outer();