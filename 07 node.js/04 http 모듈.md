## http 모듈
- 웹 서버를 구동하기 위한 node.js 내장 웹 모듈
- server 객체, request 객체, response 객체 사용
  - server 객체: 웹 서버를 생성할 때 사용하는 객체
    - `listen()`: 서버를 실행하고 클라이언트를 기다림
    - `close()`: 서버 종료
    - `on()`: server 객체에 이벤트 등록
    - `request`: 클라이언트가 요청할 때 발생하는 이벤트
    - `connection`: 클라이언트가 접속할 때 발생하는 이벤트
    - `close`: 서버가 종료될 때 발생하는 이벤트
    - `checkContinue`: 클라이언트가 지속적인 연결을 하고 있을 때 발생하는 이벤트
    - `upgrade`: 클라이언트가 http 업그레이드를 요청할 때 발생하는 이벤트
    - `clientError`: 클라이언트에서 오류가 발생할 때 발생하는 이벤트  
  - request 객체: 응답 메시지를 작성할 때 첫 번째 매개변수로 전달되는 객체
  - response 객체: 응답 메시지를 작성할 때 두 번째 매개변수로 전달되는 객체
<br/>

## http 모듈 서버 만들기
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('<h1>Hello!</h1>');
  res.end("<p>End</p>")
});

server.listen(8080, function() {
  console.log('8080 포트로 실행')
})
```
- Response 객체
  - writeHead: 응답 헤더 작성
  - write: 응답 본문 작성
  - end: 응답 본문 작성 후 응답 종료 
<br/>

## server 객체 - 이벤트
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('<h1>Hello!</h1>');
  res.end("<p>End</p>")
});

server.on('request', function(code){
  console.log("request 이벤트")
})

server.on('connection', function(code){
  console.log('connection 이벤트')
})

server.listen(8080, function() {
  console.log('8080 포트로 실행')
})
```
<br/>

## html 파일 전송
```html
<!-- index.html -->
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTTP 모듈</title>
</head>
<body>
  <h1>hello http</h1>
  <p>p태그</p>
</body>
</html>
```
```javascript
const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('index.html');
    res.writeHead(200);
    res.write(data);
    res.end()
  } catch (err){
    console.log(err);
    res.writeHead(404);
    res.write(err.message);
    res.end()
  }
})

server.listen(8000, () => {
  console.log('http://localhost:8000')
})
```
<br/>

## http 응답
- 1xx: 처리중
- 2xx: 성공
- 3xx: 리다이렉트 (다른 페이지로 이동)
- 4xx: 요청 오류
- 5xx: 서버 오류