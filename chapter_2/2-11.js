console.log(sum(3, 4));

function sum(x, y) {  //선언
  return x + y;
}

var a = sum(1, 2);

function sum(x, y) {   //선언
  return x + ' + ' + y + ' = ' + (x + y);
}

var c = sum(1, 2);
console.log(c);

//함수 선언의 위험성