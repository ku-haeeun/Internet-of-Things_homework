const fruits = ['apple', 'banana', 'peach'];
const $ul = document.createElement('ul'); // (공통 코드)

fruits.forEach(function (fruit) { // (A) forEach 콜백
	var $li = document.createElement('li');
   $li.innerText = fruit;
   $li.addEventListener('click', function() {// (B) 클릭 이벤트 핸들러
      alert('your choice is ' + fruit); // fruit 외부 변수 참조
   });

   $ul.appendChild($li);
});

document.body.appendChild($ul);

//콜백 함수 내부에서 외부 데이터를 사용하고자 할 때--> 콜백함수를 내부함수로 선언, 외부 변수 직접 참조
//outerEnvironmentReference가 (A)의 LexicalEnvironment를 참조. 따라서 (B)함수가 참조할 예정인 변수 fruit에 대해서는 
//(A)가 종료된 후에도 가비지 컬렉터대상에서 제외되고, 계속 참조 가능함