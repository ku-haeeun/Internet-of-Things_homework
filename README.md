# __IOT_homework__
+ 단원별 정리
## **Chapter 1**

### *1. 데이터 타입 종류*
+  기본형(원시형, primitive type)
    + number(숫자), string(문자열), boolean(불리언), null, undefined, symbol(심볼, ES6)
+ 참조형(reference type)
    + object(객체), array(배열), Map (ES6), WeakMap (ES6), Set (ES6), WeakSet (ES6)

### *2. 메모리*
+ 자바스크립트는 숫자의 경우 정수형(integer)인지 부동소수형(float)인지를 구분하지 않고 64bit, 즉 8Byte를 확보한다.
+ 각 비트는 고유한 식별자를 지닌다. 바이트 역시 시작하는 비트의 식별자로 위치를 파악할 수 있다.
+ 모든 데이터는 바이트 단위의 식별자, 더 정확하게는 메모리 주소값 (memory address) 을 통해 서로 구분하고 연결할 수 있다.

### *3. 변수 선언과 데이터 할당*
1. 변수 선언
```
var a;
// 변할 수 있는 데이터를 만들겠다.
// 이 데이터의 식별자는 'a'로 한다.
```

2. 데이터 할당
 ```
var a;     // 변수 a 선언
a = 'abc'  // 변수 a 데이터 할당

var a = 'abc'  // 변수 선언과 할당을 한번에(=초기화)

// 선언과 할당 과정을 나눠서하든, 동시에(=초기화)하든 자바스크립트 엔진은 같은 동작을 수행한다.
```