var user = {
    name: 'Hae eun',  // object가 가변됨
    gender: 'female',
  };
  
  var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
  };
  
  var user2 = changeName(user, 'Ku');
  
  if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
  }
  console.log(user.name, user2.name); // Ku Ku
  console.log(user === user2); // true

// 객체의 가변성에 따른 문제점