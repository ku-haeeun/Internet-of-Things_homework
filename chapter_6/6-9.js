Object.prototype.getEntries = function() {
    var res = [];
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        res.push([prop, this[prop]]);
      }
    }
    return res;
  };
  var data = [
    ['object', { a: 1, b: 2, c: 3 }], // [["a",1], ["b", 2], ["c",3]]
    ['number', 345], // []
    ['string', 'abc'], // [["0","a"], ["1","b"], ["2","c"]]
    ['boolean', false], // []
    ['func', function() {}], // []
    ['array', [1, 2, 3]], // [["0", 1], ["1", 2], ["2", 3]]
  ];
  data.forEach(function(datum) {
    console.log(datum[1].getEntries());
  });
  
  //object.protype에 추가한 메서드에 접근
  //생성자 함수인 Object와 인스턴스인 객체 리터럴 사이 this를 이용한 연결이 불가능해 this 사용을 포기하고 대상 인스턴스를 직접 주입하는 방식으로 구현되어 있습니다.
 //같은 이유에서 Object.prototype에는 어떤 데이터에서도 활용할 수 있는 범용적인 메서드가 있습니다. 
 //toString, hasOwnProperty, valueOf, isPrototypeOf 등은 변수가 자신의 메서드인 것처럼 호출이 가능합니다.