var Person = function(name) {
    this.name = name;
  };
  Person.prototype.getName = function() {
    return this.name;
  };
  
  var iu = new Person('지금');
  iu.getName = function() {
    return '바로 ' + this.name;
  };
  console.log(iu.getName()); 

  //메서드 오버라이드
  //_proto__에 있는 메서드는 자신에게 있는 메서드보다 검색 순서에 밀려 호출되지 않음.