var createCar = function() {
    var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
    var power = Math.ceil(Math.random() * 3 + 2); // 연비(km / L)
    var moved = 0; // 총 이동거리
    return {
      get moved() {
        return moved;
      },
      run: function() {
        var km = Math.ceil(Math.random() * 6);
        var wasteFuel = km / power;
        if (fuel < wasteFuel) {
          console.log('이동불가');
          return;
        }
        fuel -= wasteFuel;
        moved += km;
        console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
      },
    };
  };
  var car = createCar();

  //접근 권한에는 public, private, protected, 세 종류.
  // 자바스크립트는 변수 자체에 이러한 접근 권한을 직접 부여하도록 설계되어 있진 않지만 
  //클로저를 이용해 함수 차원에서 public 한 값과 private 한 값을 구분하는 것이 가능함