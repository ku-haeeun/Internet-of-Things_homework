var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2 = { c: 20, d: 'ddd' };

// 변수 복사 이후 값 변경 결과 ==> 객체의 프로퍼티 변경
// 기존 c와 d는 변하지 않음 - 불변성