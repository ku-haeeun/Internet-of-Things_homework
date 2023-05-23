var count = 0;
var timer = setInterval(function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);

// 콜백함수는 다른 코드의 인자로 넘겨주는 함수!
// 콜백 함수를 넘겨받은 코드는 콜백 함수를 필요에 따라 적절한 시점에서 실행됨.