function a(x) {
    // 수집 대상 1(매개변수)
    console.log(x); // (1)
    var x; // 수집 대상 2(변수 선언)
    console.log(x); // (2) undefined
    var x = 2; // 수집 대상 3(변수 선언)
    console.log(x); // (3)
  }
  a(1);

  // 매개변수와 변수에 대한 호이스팅--> 변수 정보를 수집하는 과정을 이해하기 쉽게 대체한 가상의 개념