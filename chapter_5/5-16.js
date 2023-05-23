var debounce = function(eventName, func, wait) {
    var timeoutId = null;
    return function(event) {
      var self = this;
      console.log(eventName, 'event 발생');
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func.bind(self, event), wait);
    };
  };
  
  var moveHandler = function(e) {
    console.log('move event 처리');
  };
  var wheelHandler = function(e) {
    console.log('wheel event 처리');
  };
  document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
  document.body.addEventListener(
    'mousewheel',
    debounce('wheel', wheelHandler, 700)
  );
  //디바운스: 짧은 시간 동안 동일한 이벤트가 많이 발생할 경우 이를 전부 처리하지 않고 
  //처음 또는 마지막에 발생한 이벤트에 대해 한 번만 처리하는 것으로, 프론트엔드 성능 최적화에 큰 도움을 주는 기능 중 하나임.