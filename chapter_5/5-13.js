var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  };
  var addPartial = add.bind(null, 1, 2, 3, 4, 5);
  console.log(addPartial(6, 7, 8, 9, 10)); // 55

  //즉, return을 활용해 (클로저) 외부 스코프에서 함수 내부의 변수들 중 선택적으로 일부의 변수에 대한 접근 권한을 부여 가능.