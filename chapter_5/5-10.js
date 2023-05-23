var car = {
    fuel: Math.ceil(Math.random() * 10 + 10), // 연료(L)
    power: Math.ceil(Math.random() * 3 + 2), // 연비(km/L)
    moved: 0, // 총 이동거리
    run: function() {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / this.power;
      if (this.fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }
      this.fuel -= wasteFuel;
      this.moved += km;
      console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
    },
  };

  //정보은닉은 어떤 모듈의 내부 로직에 대해 외부로의 노출을 최소화해서 모듈 간의 겹합도를 낮추고 유연성을 높이기 위한 개념입니다.