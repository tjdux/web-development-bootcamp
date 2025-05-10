## 자바스크립트의 역할
- 웹 페이지에 인터랙션(행동)을 추가
<br/>

## 자바스크립트 삽입 방법
### HTML 내부에 작성
- `<script></script>` 태그 사용 
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
- 이벤트 속성 안에 자바스크립트 코드 직접 작성 
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
  - 스크립트를 불러오는 방식을 제어하여 성능 최적화를 도와주는 속성

  |구분|`defer`|`async`|
  |---|---|---|
  |HTML 파싱|계속 진행됨|계속 진행됨|
  |스크립트 실행 시점|HTML 파싱 완료 후|JS 다운로드 완료 즉시|
  |스크립트 실행 순서|작성된 순서 보장|순서 보장 안됨(먼저 다운로드된 스크립트 먼저 실행)|
  |사용 용도|스크립트 간 순서가 중요할 때<br/>DOM이 모두 준비된 후 실행할 때|하나의 JS만 실행할 때|
  |작성 위치|`<head>`에 써도 안전|`<head>`에 써야 제대로 작동|
  - HTML 파싱
    - `<script src="...">`: HTML 파싱을 중단시키고 JS 파일을 다운로드 + 실행
    - `defer`, `async`: HTML 파싱을 중단하지 않고, 자바스크립트를 비동기적으로 다운로드 (비동기 로딩)
  - `defer` 많이 사용
  - 스크립트 실행 시점
    - `defer`: HTML 파싱이 끝난 후에 실행 ➡️ 항상 DOM을 안정적으로 다룰 수 있음
    - `async`: 스크립트 다운로드 완료 즉시 실행 ➡️ 네트워크가 빠르면 더 빨리 실행되어 DOM보다 먼저 실행될 가능성이 있음 
### 삽입 위치 별 실행 시점 비교
|위치|실행 시점|DOM 접근 가능성|특징|
|---|---|---|---|
|`<head>`안|HTML 파싱 시작할 때|❌(어려움)|JS가 DOM 전에 실행 ➡️ 요소 접근 불가능|
|`<body>`끝|HTML 파싱 완료 직후|⭕(가능)|요소 접근 안전|
|`defer`속성|HTML 파싱 완료 후, 실행|⭕(가능)|스크립트 순서 보장|
|`asnyc`속성|JS 다운로드 완료 즉시 실행|❌(불확실)|순서 보장❌, DOM 생성 전 실행 가능성 있음|
<br/>

## 기초 DOM
### DOM
- 문서 객체 모델 (Document Object Model)
- HTML 문서를 객체처럼 다룰 수 있게 해주는 구조
- DOM을 통해 웹 페이지를 동적으로 조작
- DOM Tree 구조
  - HTML 문서가 브라우저에 의해 트리(Tree) 구조로 변환
  - 각각의 HTML 태그는 하나의 노드로 변환되고, 이 노드들은 부모-자식 관계로 구성
  ```
  document
  ├── <html>
      ├── <head>
      │   └── <title>
      └── <body>
          ├── <h1>
          └── <button>
  ```
  - Node
    - HTML 문서에서 모든 요소를 구성하는 기본 단위
    - HTML 태그, 텍스트, 주석 등 모두 노드로 구성
    - 모든 node들은 속성과 메서드를 가짐
  - DOM Tree와 CSSOM Tree를 묶어서 Render Tree를 구성
    - Render Tree: 브라우저에서 실제로 렌더링되는 최종 문서 모델을 나타내는 객체의 계층 구조
    - Render Tree를 만든 뒤, 브라우저에 그림을 그리기 위한 레이아웃 계산 -> 페인팅 과정이 진행
### DOM 접근 및 제어
#### DOM 트리의 시작점 `document`
- 모든 DOM 조작은 최상위 노드인 `document` 객체에서 시작
```javascript
console.log(document);          
console.log(document.body);     
console.log(document.title);    
```
#### DOM 노드 간 탐색 
```javascript
const title = document.querySelector("h1");
console.log(title.parentNode); // 부모 노드
console.log(title.childNodes); // 자식 노드 목록 (NodeList)
```
#### DOM 요소 조작
- 내용 변경: `innerHTML`, `textContent`
- 속성 변경: `setAttribute`, `classList`
- 스타일 변경: `style`
- 추가/삭제: `appendChild`, `removeChild`, `createElement`