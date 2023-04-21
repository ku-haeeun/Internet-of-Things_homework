var func = function(x) {
    console.log(this, x);
  };
  func(1); // Window { ... } 1
  
  var obj = {
    method: func,
  };
  obj.method(2); // { method: f } 2

  // 함수로서 호출, 메서드로서 호출
  // 어떤 함수를 객체의 프로퍼티에 할당한다고 해서 그 자체로서 무조건 메서드가 되는 것이 아니라 객체의 메서드로서 호출할 경우에만 메서드로 동작하고, 그렇지 않으면 함수로 동작하게 됨.