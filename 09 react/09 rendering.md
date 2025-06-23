## rendering
- 컴포넌트가 현재 props와 state를 기반으로 UI를 어떻게 구성할지 결정하는 과정
- 🌟 **랜더링 되는 경우**
  - 앱이 처음 실행될 때 (최초 랜더링)
  - state 변경
  - props 변경
  - 부모 component가 리랜더링되는 경우
```javascript
import { useState } from 'react';

const App = () => {
  return(
    <div>
      <h1>렌더링 예제</h1>
      <Counter/>
    </div>
  )
}

const Counter = () => {
  console.log('counter rendering')
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>increase</button>
    </div>
  )
}
```
<br/>

## 리액트 랜더링 vs. 브라우저 랜더링
- 리액트 랜더링
  1. 컴포넌트 함수 호출: props와 state를 기반으로 JSX 생성
  2. Virtual DOM 비교: 이전 결과와 새 결과 차이점 찾기
  3. DOM 업데이트: 변경된 부분만 실제 DOM에 반영
- 브라우저 랜더링
  1. 스타일 계산: CSS를 파싱하여 스타일 규칙 계산
  2. 레이아웃 계산: 요소의 위치와 크기 결정
  3. 페인팅: 실제 화면에 픽셀로 그리기