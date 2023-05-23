var count = 0;
var cbFunc = function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);

// -- 실행 결과 --
// 0  (0.3초)
// 1  (0.6초)
// 2  (0.9초)
// 3  (1.2초)
// 4  (1.5초)

// timer에는 setInterval 의 id가 담김  
// 콜백 함수 내부에서 count 을 출력.