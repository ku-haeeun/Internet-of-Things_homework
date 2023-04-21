var obj = {
    method: function(x) {
      console.log(this, x);
    },
  };
  obj.method(1); // { method: f } 1
  obj['method'](2); // { method: f } 2

  // 메서드로서 호출 - 점 표기법, 대괄호 표기법
  // 어떤 함수를 호출할 때 그 함수 이름 앞에 객체가 명시돼 있는 경우에는 메서드로 호출한 것이고, 그렇지 않은 경우에는 함수로 호출한 것.