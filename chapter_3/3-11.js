var obj = {
    outer: function() {
      console.log(this); // (1) { outer: f }
      var innerFunc = () => {
        console.log(this); // (2) { outer: f }
      };
      innerFunc();
    },
  };
  obj.outer();

  // this를 바인딩하니 않는 함수 