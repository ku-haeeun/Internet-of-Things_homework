var obj1 = {
    name: 'obj1',
    func: function() {
      var self = this;
      return function() {
        console.log(self.name);
      };
    },
  };
  var callback = obj1.func();
  setTimeout(callback, 1000);

  //콜백 함수 내부의 this에 다른 값을 바인딩하는 방법 -> 전통적인 방식