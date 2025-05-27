## express
- 웹 서버를 생성하는 것과 관련된 기능을 담당하는 프레임워크
- 웹 애플리케이션을 만들기 위한 각종 메소드와 미들웨어 등이 내장
- http 모듈의 낮은 코드 가독성과 확장성을 보완 
<br/>

## .gitignore
- git 버전 관리에서 제외할 파일 목록을 지정하는 파일
- node_modules 폴더 꼭 .gitignore에 추가하기!
- `*.txt`: 확장자가 txt로 끝나는 파일 모두 무시
- `!test.txt`: test.txt는 무시되지 않음
- `test/`: 모든 test 폴더 내부의 모든 파일 무시
- `/test`: test 폴더 내에 존재하는 모든 파일 무시
<br/>

## express 사용
```javascript
const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', function(req, res) {
  res.send('hello express');
})

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`)
})
```
- `express()`: express aplication을 만듦
- app 객체: `express()`를 호출함으로써 만들어진 express application
<br/>

## EJS 템플릿
- 템플릿 엔진: 문법과 설정에 따라 파일을 html 형식으로 변환시키는 모듈
- ejs: Embedded Javascript의 약자로, 자바스크립트가 내장되어 있는 html 파일
```javascript
// views/test.ejs
<html>
  <head>
    <title>EJS TEST</title>
  </head>
  <body>
    <% for (let i = 0; i < 5; i++) {%>
      <h1>안녕</h1>
    <%} %> 
  </body>
</html>
```
- `<% %>`: 자바스크립트 코드가 들어가야 하고, 줄바꿈을 할 경우에는 새로운 `<% %>` 삽입
- `<%= %>`: 값을 출력할 때 사용
- `<%- include("view의 상대주소") %>`: 다른 view 파일을 불러올 때 사용 
<br/>

## 미들웨어
- 요청이 들어옴에 따라 응답까지의 중간 과정을 함수로 분리한 것
- 서버와 클라이언트를 이어주는 중간 작업
- `use()`를 통해 등록
  - 사용할 경로, 라이브러리 등을 등록 
- static
  - 이미지, css, js 파일과 같은 정적 파일 제공
  - static 메소드를 이용해 미들웨어로 로드
```javascript
const express = require('express');
const app = express();
const PORT = 8000;
 
// ejs 템플릿 설정
app.set("view engine", "ejs"); 
// 템플릿 렌더링 경로 지정 
app.set("views", "./views");

// 정적 파일 로드 미들웨어 
// __dirname: 현재 최상단 경로 
// `views/style.css` 요청 시, `__dirname/views/style.css` 파일을 응답
app.use("/views", express.static(__dirname + "/views"))
app.use("/public", express.static(__dirname + "/public"))

app.get('/', function(req, res) {
  res.send('hello express');
})

app.get('/test', function(req, res) {
  res.render('test'); // ejs 렌더링
})

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`)
})
```