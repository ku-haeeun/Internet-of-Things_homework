function a() {
    var x = 1; // 수집 대상 1(매개변수 선언)
    console.log(x); // (1)
    var x; // 수집 대상 2(변수 선언)
    console.log(x); // (2)
    var x = 2; // 수집 대상 3(변수 선언)
    console.log(x); // (3)
  }
  a();

  // 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 상태.