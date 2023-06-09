var arr = [1, 2];
Array.prototype.constructor === Array; // true
arr.__proto__.constructor === Array; // true
arr.constructor === Array; // true

var arr2 = new arr.constructor(3, 4);
console.log(arr2); // [3, 4]

// 인스턴스의 __proto__ 객체 내부에도 마찬가지이다.
// 이 프로퍼티는 단어 그대로 원래의 생성자 함수를 참조한다.