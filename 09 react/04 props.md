## props
- 컴포넌트 속성을 설정할 때 사용하는 요소
- 컴포넌트끼리 값을 전달하는 수단
- 단방향 데이터 흐름: **상위** 컴포넌트에서 **하위** 컴포넌트로 전달
- 읽기 전용: props는 반드시 읽기 전용이며, 직접적으로 변경하지 않음 
- 객체 (Object) 형태의 데이터 → 구조 분해 할당을 활용
<br/>

## props drilling
- <부모> → <자식 1> → <자식 2> → <자식 3>
- 자식 3에게 props를 전달하기 위해 자식 1, 2를 거쳐야 함
- props drilling의 문제점
    - 중간 컴포넌트들이 사용하지 않는 props를 계속 전달해야 함
    - 코드가 복잡해지고 유지보수가 어려워짐
    - 컴포넌트 간 의존성이 높아짐 (상위 컴포넌트에 의존)
- ➡️ props drilling 문제를 해결하기 위해  Redux, Context API와 같은 상태관리 도구를 이용

## 함수형 컴포넌트 props
```javascript
<FuncComponent name={name} />

const FuncComponent = ({ name }) => {
  return (
    <>
      <div>안녕, {name}</div>
      <div>반가워!</div>
    </>
  )
}
```

## defaultProps
```javascript
<FuncComponent />

const FuncComponent = ({ name = "John" }) => {
  return (
    <>
      <div>안녕, {name}</div>
      <div>반가워!</div>
    </>
  )
}
```
<br/>

## props.children
- 부모 컴포넌트에서 자식 컴포넌트를 호출할 때 태크 사이에 작성한 문자열
```javascript
<FuncComponent name={name}>자식 내용</FuncComponent>

const FuncComponent = ({ name = "John" }) => {
  return (
    <>
      <div>안녕, {name}</div>
      <div>반가워!</div>
      <h4>{props.children}</h4>
    </>
  )
}
```
```javascript
const App = () => {
  return (
    <div>
      <Layout>
        <h1>홈페이지</h1>
        <p>
          메인 컨텐츠
        </p>
      </Layout>
    </div>
  )
}

function Layout({children}) {
  return (
    <div className='container'>
      <header>공통 header</header>
        <main>{children}</main>
      <footer>공통 footer</footer>
    </div>
  )
}
```
<br/ >

## 클래스형 컴포넌트 props
```javascript
class ClassComponent extends Component{
  render(){
    return(
      <h1>Class Component, 이름은 {this.props.name}</h1>
    )
  }

  static defaultProps = {
    name: "John"
  }
}
```