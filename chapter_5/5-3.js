//return 에 의한 클로저의 메모리 해제
var outer = function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner;
  };
  var outer2 = outer();
  console.log(outer2()); // 2
  console.log(outer2()); // 3
  
  //클로저는 어떤 필요에 의해 의도적으로 함수의 지역변수를 메모리를 소모하도록 함으로써 발생함