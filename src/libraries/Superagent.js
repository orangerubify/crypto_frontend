// let config = require('config').default;
let Cookies = require('js-cookie');

var superagent = require('superagent-defaults')();
superagent.on('request', (request) => {
  if(request.url[0] === '/') {
    request.url = 'http://localhost:3000' + request.url;
  }//end if

  let authenticationToken = Cookies.get('user-authentication-token');
  if(authenticationToken) {
    request.set('authorization-token', authenticationToken);
  }//end if
});

const end = superagent.request.Request.prototype.end;
superagent.request.Request.prototype.end = function(callback) {
  return end.call(this, (error, response) => {
    if(response && response.statusCode === 401) {
      Cookies.remove('user-authentication-token');
      document.location = '#/login';
    } else {
      callback(error, response);
    }
  });
}

export default superagent;
