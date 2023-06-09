var Person = function(name) {
    this._name = name;
  };
  Person.prototype.getName = function() {
    return this._name;
  };
  var suzi = new Person("Suzi");
  suzi.__proto__.getName(); // undefined
  suzi.getName(); // Suzi

  // 프로토 타입
  // this 를 사용해서 프로토타입을 확인한다.