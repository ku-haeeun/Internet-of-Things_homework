var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(obj1.name);
    },
  };
  setTimeout(obj1.func, 1000);

  // 콜백함수 내부에서 this 를 사용하지 않은경우