## 자바스크립트의 역할
- 웹 페이지에 인터랙션(행동)을 추가
<br/>

## 자바스크립트 삽입 방법
### HTML 내부에 작성
#### `<head>`안에 삽입
- HTML은 `<head>`부터 해석됨
- HTML 요소가 모두 로딩되기 전에 실행됨
- ➡️ DOM 요소를 찾지 못할 수 있음
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>head에 script</title>
  <script>
    const btn = document.getElementById('myBtn');
    console.log(btn); // null (아직 HTML 요소가 로드되지 않음)
  </script>
</head>
<body>
  <button id="myBtn">버튼</button>
</body>
</html>
```
#### `<body>`끝에 삽입
- HTML 요소가 로딩된 후 실행됨 
- ➡️ DOM 조작에 유리
- **DOM 요소를 조작해야 한다면 `<body>`끝에 삽입하는 것이 안전**
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>body 끝에 script</title>
</head>
<body>
  <button id="myBtn">버튼</button>

  <script>
    const btn = document.getElementById('myBtn');
    console.log(btn); // <button id="myBtn">버튼</button>
  </script>
</body>
</html>
```
### HTML 요소 속성에 작성 (인라인 이벤트 방식)
- 유지보수와 보안상 문제로 현재는 잘 사용하지 않음
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>인라인 이벤트</title>
</head>
<body>
  <button onclick=test()>클릭</button>
  <script>
	  function test(){
		  alert('버튼이 클릭되었습니다!')
	  }
  </script>
</body>
</html>
```
### 외부 자바스크립트 파일 불러오기
- `<script>` 태그에 `src` 속성을 사용
- 코드 재사용과 유지보수가 편리
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>외부 스크립트</title>
  <script src="app.js"></script> <!-- JS 파일 불러오기 -->
</head>
<body>
  <h1>자바스크립트 분리</h1>
  <button id="myBtn">클릭</button>
</body>
</html>
```
```javascript
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function () {
  alert('버튼이 클릭되었습니다!');
});
```
- ⚠️ `<script src="..."></script>`는 `body` 하단에 두는 것이 안전
  - 동기 / 지연 로딩 옵션: `defer`, `async`