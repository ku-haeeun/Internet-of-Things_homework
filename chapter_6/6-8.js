var arr = [1, 2];
Array.prototype.toString.call(arr); // 1,2
Object.prototype.toString.call(arr); // [object Array]
arr.toString(); // 1,2

arr.toString = function() {
  return this.join('_');
};
arr.toString(); // 1_2

// 메서드 오버라이드와 프로토 타입 체이닝
// 어떤 데이터의 __proto__ 내부의 proto를 연쇄적으로 이어져 따라가는 것이 프로토타입 체인. 따라해서 검색해 들어가는 것은 프로토타입 체이닝이라 함.
