var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
  };
  Array.prototype.push.call(obj, 'd');
  console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }
  
  var arr = Array.prototype.slice.call(obj);
  console.log(arr); // [ 'a', 'b', 'c', 'd' ]

  //유사배열객체에 배열 메서드를 적용
  //객체에는 배열 메서드를 직접 적용할 수 없음