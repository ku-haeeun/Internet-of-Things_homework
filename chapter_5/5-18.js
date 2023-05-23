var curry5 = function(func) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return func(a, b, c, d, e);
            };
          };
        };
      };
    };
  };
  var getMax = curry5(Math.max);
  console.log(getMax(1)(2)(3)(4)(5));

  //인자가 많아질수록 가독성이 떨어진다는 단점이 있다. ES6의 화살표 함수(curry5)를 사용하면 한 줄에 표기할 수 있다