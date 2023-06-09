var Constructor = function(name) {
    this.name = name;
  };
  Constructor.prototype.method1 = function() {};
  Constructor.prototype.property1 = 'Constructor Prototype Property';
  
  var instance = new Constructor('Instance');
  console.dir(Constructor);
  console.dir(instance);

  //prototype과 proto
  //생성자 함수의 프로퍼티 prototye 객체 내부에는 constructor 프로퍼티가 있음. 