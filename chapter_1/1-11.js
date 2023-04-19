var user = {
    name: 'Hae eun',
    gender: 'female',
  };
  
  var changeName = function(user, newName) {
    return {                            // 새로운 object를 마들어 그 주소를 return 함.
      name: newName,
      gender: user.gender,
    };
  };
  
  var user2 = changeName(user, 'Ku');
  
  if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
  }
  console.log(user.name, user2.name); // Hae eun Ku
  console.log(user === user2); // false

  // 객체의 가변성에 따른 문제점의 해결 방법