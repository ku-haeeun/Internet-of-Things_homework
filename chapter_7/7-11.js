var extendClass1 = function(SuperClass, SubClass, subMethods) {
    SubClass.prototype = new SuperClass();
    for (var prop in SubClass.prototype) {
      if (SubClass.prototype.hasOwnProperty(prop)) {
        delete SubClass.prototype[prop];
      }
    }
    SubClass.prototype.consturctor = SubClass;
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
// 클래스 상속 및 추상화 방벙 - 프로퍼티 제거