var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
      result[prop] = target[prop];
    }
    return result;
  };

  // 기존 정보를 복사해서 새로운 객체를 반환하는 함수
  //copyObject는 for in 문법을 이용해서 result 객체에 target 객체의 프로퍼티들을 복사하는 함수.