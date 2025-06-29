## `useEffect()`

- 부수 효과(side effect)를 처리하는 훅
- 화면이 렌더링될 때마다 특정 부수 작업(네트워크 요청, 타이머 설정 등)을 수행하도록 설정
  - effect: React에서 DOM 변경 외의 모든 작업
  - **side effect: 랜더링 자체와 직접적으로 관련 없는 작업**

| 작업 예시                             | 부수 효과인 이유                  |
| ------------------------------------- | --------------------------------- |
| 콘솔 출력 (console.log)               | UI에 직접 영향을 주지 않음        |
| 타이머 설정 (setInterval)             | 상태 변화 외의 외부 시스템 사용   |
| API 요청 (fetch, axios)               | 외부 네트워크 호출                |
| 이벤트 리스너 추가                    | DOM 밖에서 발생하는 일 처리       |
| 브라우저 타이틀 변경 (document.title) | DOM 렌더링과 무관한 브라우저 조작 |
| localStorage 읽고 쓰기                | 브라우저 저장소 조작              |

<br/>

## 문법

```javascript
useEffect(() => {
  // 실행할 작업

  return () => {
    // clean-up 함수 (선택사항)
  };
}, [의존성 배열; deps]);
```

```javascript
// 컴포넌트 mount 시 API 호출
import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); // 빈 배열 → 최초 1번만 실행

  return user ? <p>이름: {user.name}</p> : <p>로딩 중...</p>;
}
```

```javascript
useEffect(() => {
  const id = setInterval(() => {
    console.log("1초마다 실행");
  }, 1000);

  return () => clearInterval(id); //컴포넌트가 사라질 때 정리
}, []);
```

### 동작 시점

#### mount

```javascript
useEffect(() => {
  console.log("mount");
}, []); // deps가 빈 배열
```

#### update

```javascript
useEffect(() => {
  console.log("count가 변경될 때 실행");
}, [count]); // deps에 count
// 처음 마운트 시에도 실행됨

// 마운트 시 실행을 막고 싶다면
const isFirstRender = useRef(true);
useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  console.log("업데이트 시에만 실행");
}, [count]);
```

#### unmount

```javascript
vuseEffect(() => {
  return () => {
    console.log("unmount");
  }; //clean-up 함수 사용
}, []);
```

### 주의사항

- 의존성 누락 🙅‍♀️: 의존성 배열이 정확하지 않으면 버그 발생 가능
- 비동기 함수 직접 사용 🙅‍♀️: `useEffect(async () => { ... })` → 내부에 async 함수 따로 정의해야 함
- 정리 (cleanup) 필수: 이벤트 리스너, 타이머, 구독 등은 반드시 `return` 함수로 정리

```javascript
// 정리 (cleanup) 필수
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("컴포넌트 사라짐: 타이머 정리됨");
      clearInterval(timer);
    };
  }, []);

  return <p>{seconds}초 경과</p>;
}
```

- `useState()`와 `useEffect()`의 관계

```javascript
import { useState, useEffect } from "react";

function DynamicDocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click</button>;
}
```
