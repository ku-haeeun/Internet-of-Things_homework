var a = 1;
delete window.a; // false
console.log(a, window.a, this.a); // 1 1 1

var b = 2;
delete b; // false
console.log(b, window.b, this.b); // 2 2 2

window.c = 3;
delete window.c; // true
console.log(c, window.c, this.c); // Uncaught ReferenceError: c is not defined

window.d = 4;
delete d; // true
console.log(d, window.d, this.d); // Uncaught ReferenceError: d is not defineds

// 전역변수를 선언하면 자바스크립트 엔진이 자동으로 전역객체의 프로퍼티로 할당하면서 추가적으로 해당 프로퍼티의 속성을 false로 정의