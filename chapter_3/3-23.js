var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3
// 여러 인수를 받는 메서드에 apply를 적용.(math.max/math.min)