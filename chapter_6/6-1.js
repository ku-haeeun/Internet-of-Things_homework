var Person = function(name) {
    this._name = name;
  };
  Person.prototype.getName = function() {
    return this._name;
  };


  // 프로토 타입
  // this 를 사용해서 프로토타입을 확인한다.