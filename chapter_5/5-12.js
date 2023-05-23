var createCar = function() {
    var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
    var power = Math.ceil(Math.random() * 3 + 2); // 연비(km / L)
    var moved = 0; // 총 이동거리
    var publicMembers = {
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
    Object.freeze(publicMembers);
    return publicMembers;
  };
  var car = createCar();

  //클로저를 활용하면 외부 스코프에서 함수 내부의 변수들 중 일부의 변수에 대한 접근 권한을 부여. 
  // 클로저를 활용해 접근권한을 제어하는 방법은 외부에 제공하고자 하는 정보들 
  //즉, return 한 변수들은 공개 멤버가 되고, 그렇지 않은 변수들은 비공개 멤버가 됨.