var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
      result[prop] = target[prop];
    }
    return result;
  };
  
  var user = {
    name: 'Haeeun',
    urls: {
      portfolio: 'https://github.com/ku-haeeun/Internet-of-Things_homework',
      blog: 'http://blog.com',
      facebook: 'http://facebook.com/abc',
    },
  };
  var user2 = copyObject(user);
  user2.name = 'Ku';
  
  console.log(user.name === user2.name); // false
  
  user.urls.portfolio = 'http://portfolio.com';
  console.log(user.urls.portfolio === user2.urls.portfolio); // true
  
  user2.urls.blog = '';
  console.log(user.urls.blog === user2.urls.blog); // true

  //중첩된 객체에 대한 얕은 복사