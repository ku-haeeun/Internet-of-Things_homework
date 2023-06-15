var extendClass3 = function(SuperClass, SubClass, subMethods) {
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
  // 클래스 상속 및 추상화 방법- object.create를 활용