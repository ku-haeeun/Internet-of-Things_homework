var Grade = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
    this.length = args.length;
  };
  var g = new Grade(100, 80);

  // 다중 프로토타입 체인
  //인스턴스에서 배열 메서드를 직접 쓸 수 있게끔 하고 싶을 때는 Grade의 prototype이 배열의 인스턴스를 바라보게 하면 됩니다.