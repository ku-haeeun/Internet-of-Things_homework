var extendClass2 = (function() {
    var Bridge = function() {};
    return function(SuperClass, SubClass, subMethods) {
      Bridge.prototype = SuperClass.prototype;
      SubClass.prototype = new Bridge();
      SubClass.prototype.consturctor = SubClass;
      Bridge.prototype.constructor = SuperClass;
      if (subMethods) {
        for (var method in subMethods) {
          SubClass.prototype[method] = subMethods[method];
        }
      }
      Object.freeze(SubClass.prototype);
      return SubClass;
    };
  })();
  // 클래스 상속 및 추상화 방법- 빈 함수를 활용