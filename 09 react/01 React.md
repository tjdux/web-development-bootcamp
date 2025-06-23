## React 특징
### 단방향 데이터 흐름
- 양방향 데이터 바인딩 (e.g. Angular JS)은 규모가 커질수록 데이터의 흐름을 추적하기 힘들고 복잡해지는 경향
### Component 기반 구조
- **Component** 
  - 독립적인 단위의 소프트웨어 모듈
  - 소프트웨어를 독립적인 하나의 부품으로 만드는 방법
- React는 UI를 여러 Component로 쪼개고 이를 조립하여 화면을 구성
- Component 구조의 장점
  - 전체 코드를 파악하기 쉬움
  - 높은 재사용성: 기능 단위, UI 단위로 캡슐화시켜 코드를 관리하기 때문
  - 간편함: 코드를 반복할 필요 없이 Component만 import해서 사용
  - 용이한 코드 유지보수, 관리
```javascript
const App = () => {
  return (
    <Layout>
      <Header />
      <Navigation />
      <Content>
        <Sidebar></Sidebar>
        <Router />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
```
### Virtual DOM
[!img](https://velog.velcdn.com/images/dongjun187/post/d87f9425-b92b-4a96-8a53-d55fd87dbbc6/image.png)
- DOM Tree 구조와 동일한 구조의 Virtual DOM
- 변경된 부분만 찾아서 가상 DOM에 효율적으로 업데이트 → 불필요한 랜더링을 최소화하여 성능 개선 
- 실제 대신 메모리에 저장되어 있는 DOM의 복사본 → 빠른 동작
- 가상 DOM이 동작하는 방식
  - diffing으로 변경점을 효율적으로 감지
  - batch update로 모든 변경을 한번에 처리
  - reconciliation으로 최소한의 dom 조작
  - 1️⃣ 화면이 갱신되기 전 구조가 담겨있는 가상 DOM 객체, 화면 갱신 후 보여야 할 가상 DOM 객체 2개의 가상 DOM 객체를 가지고 있음 
  - 2️⃣diffing: 두 개의 가상 dom 객체를 비교 → 변경된 부분을 체크 (어느 부분 (엘리먼트)에서 변화가 일어났는지를 빠르게 파악) 
  - 3️⃣ 재조정 (reconciliation): 변경이 일어난 그 부분만 실제 dom에 적용 
    - batch update: 한건 한건 적용시키는 것이 아니라, 변경 사항을 모두 모아 한 번만 적용
    - 갱신이 많을수록 리액트로 개발하는 것이 훨씬 빠름
### Props & State
- Props
  - 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 데이터
  - 자식에서는 props 변경 불가, props를 전달한 부모 컴포넌트에서만 변경 가능
- State
  - 컴포넌트 내부에서 선언되고 내부에서 값 변경 가능
  - 각각의 state는 독립적
### JSX
- JSX = JavaScript + XML
- JSX 사용이 필수는 아니지만 편의성을 위해 대부분의 프로젝트에서 JSX 사용 
- Javascript를 확장한 문법으로 React Element를 생성 
### 선언형 프로그래밍
- 명령형 프로그래밍 vs. 선언형 프로그래밍
  - 명령형 프로그래밍
    - 어떻게 (HOW)를 중심으로 프로그래밍
    - DOM을 직접 조작하여 단계별로 명령 실행 
  - 선언형 프로그래밍
    - 무엇을 (WHAT)을 중심으로 프로그래밍 ➡️ react 개발할 때는 “무엇을 만드는지”에 집중!
    - 원하는 UI 상태를 선언하면 REACT가 알아서 만듦
    - 리액트가 DOM 조작을 알아서 하기 때문에 개발자의 실수로 인한 버그 방지 
    - 복잡한 DOM 조작을 빠르게 할 수 있음
    - jsx로 데이터와 화면 구조를 한 파일에서 관리하여 유지보수 향상 
```javascript
// 명령형 프로그래밍
// 1. 요소 찾기
const container = documnet.getElementById('root')
// 2. 요소 생성
const heading = document.createElement('h1')
// 3. 텍스트 설정
heading.textContent = "Title"
// 4. 스타일 설정
heading.style.color = "red"
heading.style.fontSize = "3rem"
// 5. DOM에 추가
container.appendChild(heading)


// 선언형 프로그래밍
const App = () => {
  return(
    <div>
	    <h1 style={{color: "red", fontSize: "3rem"}}>Title<h1>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
```
### SPA
- SPA: 페이지 새로고침 없음
- MPA: 페이지 새로고침 발생
- React Router를 통해 SPA 구현 
<br/>

## Babel
- 최신 JS 문법을 이전 버전의 JS 문법으로 변환 ➡️ 다양한 브라우저에서 호환성에 문제 없이 코드 실행 가능

## Webpack
- 자바스크립트 모듈 번들러 (Module Bundler)
- 여러 개의 파일과 모듈을 하나의 파일로 합쳐줌
- 코드 변경사항 발생 시 바로 반영되는 기능 
<br/>

## React 프로젝트 생성
`npx create-react-app <react app name>`
- npx: npm의 자식 명령어로 npm보다 가볍게 패키지를 구성 
### 프로젝트 구조
- `/node_modules`: 모듈과 관련된 정보
- `/public`: 가상 DOM을 위한 html 파일이 들어있는 곳
- `/src`: 실제 React 코드 (컴포넌트)를 작성하는 곳