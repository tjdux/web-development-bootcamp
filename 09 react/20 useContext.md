## `useContext()`

- 리액트의 Context API와 함께 사용되는 훅
- 컴포넌트 트리 전체에 걸쳐 데이터를 **전역적으로 공유**할 수 있도록 도와줌
- 사용 이유: props drilling 방지
- 예를 들어, 테마, 로그인 정보, 다국어 설정 등 전역 상태를 관리할 때 유용
- `useContext` 안에는 비동기 요청을 최대한 피하기
  <br/>

## 사용법

```jsx
// 1️⃣ Context 객체 생성
import { createContext } from "react";

const MyContext = createContext(defaultValue);

// 2️⃣ Provider로 값 전달
<MyContext.Provider value={공유할값}>
  <자식컴포넌트 />
</MyContext.Provider>;

// 3️⃣ 자식 컴포넌트에서 useContext 사용
import { useContext } from "react";
import { MyContext }

const value = useContext(MyContext);
```
