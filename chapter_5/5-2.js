var outer = function() {
    var a = 1;
    var inner = function() {
      return ++a;
    };
    return inner();
  };
  var outer2 = outer();
  console.log(outer2); // 2

  //일반적인 함수 및 내부 함수에서의 동작과 차이 없음
// outer의 LexicalEnvironment에 속하는 변수가 모두 가비지 컬렉팅 대상에 포함됨