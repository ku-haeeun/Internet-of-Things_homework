var obj = {
    outer: function() {
      console.log(this); // (1) { outer: f }
      var innerFunc1 = function() {
        console.log(this); // (2) Window { ... }
      };
      innerFunc1();
  
      var self = this;
      var innerFunc2 = function() {
        console.log(self); // (3) { outer: f }
      };
      innerFunc2();
    },
  };
  obj.outer();

  // this 바인딩에 관해서는 함수르 실행하는 당시의 주변 환경은 중요하지 않음.
  // 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지 없는지 관건.

  // 내부 함수에서의 this를 우회하는 방법