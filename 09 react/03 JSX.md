## JSX
- JavaScript + XML
- 브라우저는 JSX 파일을 직접 해석 불가
- Babel을 이용해서 자바스크립트 코드로 변환
```javascript
// JSX 파일 변환 전
const element = (
  <h1 className="hello">
    Hello, world!
  </h1>
);

// JSX -> JS 변환 후
const element = React.createElement(
  'h1',
  {className: 'hello'},
  'Hello, world!'
);
```
<br/>

## JSX 규칙
### 전체는 하나의 태그로 감싸야
- return 이후에 반드시 하나의 부모 요소가 전체 요소를 감싸는 형태
```javascript
// 🙅‍♀️
return (
  <span>{str}</span>
  <span>world</span>
)

// 🙆‍♀️
return (
  <div className="App">
    <span>{str}</span>
    <span>world</span>
  </div>
)
```
### HTML with JS
- HTML에 JS 문법을 사용하고 싶으면 {중괄호} 사용
- `return` 문 안에는 if문, for문 사용 불가
  - 사용하고 싶다면 `return` 이전에 결과값을 저장하고 사용 
```javascript
return(
  <div>
    {str === "hello" 
      ? <div><h2>react</h2></div> 
      : <div><h2>리액트</h2></div>}
  </div>
)
```
### 인라인 style
- CSS를 인라인 형태로 적용할 때는 {object} 형태로 저장
- CSS 속성은 dash-case가 아닌 camelCase로!
```javascript
export default function App() {
  return <div style={{fontSize: '32px', backgroundColor: 'crimson'}}>inline style</div>
}
```
### className & onClick
- `class` 대신 `className = '클래스 이름'`
- `onclick` 대신 `onClick = {클릭되었을 때 실행할 JS 코드}`
### closing tag
- 빈태그도 closing tag 필요
- 혹은 self-closing
```javascript
export default function App() {
  return (
    <div>
      <input type='text'></input> 
      <br></br> 
      <img src={~~}></img>
    </div>
  )
}

// 혹은 self closing tag
export default function App() {
  return (
    <div>
      <input type='text' />
      <br />
      <img src={~~} />
    </div>
  )
}

```
### 주석 사용
```javascript
export default function App() {
 // return문 밖에서는 기존 js처럼
 return(
    <div>
      주석
      {/* return문 내부 주석 */}
    </div>
 )
}
```