## 생명 주기

- 컴포넌트 생명주기: 컴포넌트가 생성되고, 업데이트되고, 사라질 때까지의 일련의 과정
- 적절한 시점에 필요한 작업 (데이터 fetch, 정리 등)을 넣는 것이 중요

### 클래스 컴포넌트의 생명 주기

- 라이프사이클 메서드로 생명 주기 제어
- mount: 컴포넌트가 처음 랜더링 되었을 때
  - `constructor` → render → `componentDidMount`
- update: 리랜더링
  - `shouldComponentUpdate` → render → `componentDidUpdate`
- unmount : 죽었을 때
  - `componentWillUnmount`

### 함수형 컴포넌트의 생명 주기 (useEffect)

- 훅 (`useEffect`)로 라이프 사이클을 제어할 수 있게 제공 ➡️ 의존성 배열에 따라 동작이 달라짐
- mount: 최초에 한 번만 실행

```jsx
useEffect(() => {
  console.log("mount");
}, []);
// componentDidMount 역할을 대신 해 줌
```

- update

```jsx
// mount & udpate 시
useEffect(() => {
  console.log("update");
}, [todos]);
// componentDidUpdate 역할을 대신 해 줌
```

- unmount

```jsx
useEffect(() => {
  return () => console.log("unmount");
}, []);

// e.i.
useEffect(() => {
  return () => clearInterval(id);
}, []);
```
