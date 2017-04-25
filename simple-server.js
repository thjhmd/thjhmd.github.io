var http = require('http');
var url = require('url');
var port = 3000;

http.createServer((request, response) => {
  let urlObject = url.parse(request.url, true),
      pathname = urlObject.pathname,
      strName = urlObject.query.name,
      strGender = urlObject.query.gender,
      result;

  if(pathname === '/api/greeting') {
    result = greeting(strName, strGender);
  }

  if(result) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
}).listen(port);

function greeting(strName, strGender) {
  return {
    'greeting': 'Hi ' + strName + '!',
    'gender': 'You are a ' + strGender,
  };
}
