## react-router-dom

- **페이지 이동(라우팅) 기능**을 담당하는 라이브러리
- SPA(Single Page Application)에서 URL에 따라 **컴포넌트를 조건부로 렌더링**하게 해줌

<br/>

## 핵심 개념

SPA(Single Page Application)에서 URL에 따라 컴포넌트를 조건부로 렌더링하게 해줌

- 핵심 개념 정리
  | 기능 | 설명 | 사용 예 |
  | --------------- | --------------------------------------------- | --------------------------------------------- |
  | `BrowserRouter` | 라우팅 기능을 적용하기 위한 **루트 컴포넌트** | `<BrowserRouter>...</BrowserRouter>` |
  | `Routes` | 여러 Route를 묶는 **라우터 그룹** | `<Routes>...</Routes>` |
  | `Route` | 특정 경로에 컴포넌트를 연결 | `<Route path="/about" element={<About />} />` |
  | `Link` | 페이지 이동을 위한 링크 컴포넌트 | `<Link to="/about">About</Link>` |
  | `useNavigate` | 코드 상에서 페이지 이동 | `navigate('/about')` |
  | `useParams` | URL 파라미터 추출 | `/user/:id` → `const { id } = useParams();` |
  | `useLocation` | 현재 URL 정보 확인 | `const location = useLocation();` |
  | `Outlet` | 중첩 라우팅 시 자식 요소 출력 | 중첩된 Route 내부에서 사용 |

<br/>

## 기본 예시

```javascript
// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

```javascript
// pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>홈</h1>
      <Link to="/about">소개 페이지로 이동</Link>
    </div>
  );
}
```

<br/>

## useNavigate

- react-router-dom에서 프로그래밍 방식으로 페이지를 이동할 때 사용하는 훅(Hook)
- `Link`가 JSX 안에서 이동을 처리한다면, `useNavigate`는 버튼 클릭, 로그인 성공 등 이벤트 발생 시 코드로 이동을 처리

```javascript
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>로그인</button>;
}
```

| 기능             | 설명                                 | 예시                                            |
| ---------------- | ------------------------------------ | ----------------------------------------------- |
| 특정 경로로 이동 | 원하는 경로로 이동                   | `navigate("/home")`                             |
| 뒤로 가기        | 이전 페이지로 이동                   | `navigate(-1)`                                  |
| 앞으로 가기      | 다음 페이지로 이동                   | `navigate(1)`                                   |
| 히스토리 덮기    | replace: true 옵션으로 히스토리 대체 | `navigate("/login", { replace: true })`         |
| 쿼리 파라미터    | URL에 직접 포함 가능                 | `navigate("/search?query=react")`               |
| 상태 전달        | location.state를 통해 값 전달        | `navigate("/result", { state: { score: 90 } })` |

<br/>

## 동적 라우팅

- URL 경로 일부를 변수처럼 사용하여 유동적인 페이지를 만들 수 있는 기능
- 예를 들어 `/user/1`, `/user/2`, `/user/3` 이런 URL로 각각 다른 사용자 정보를 보여주고 싶다면, 그 숫자 부분을 동적 파라미터(`/user/:id`)로 처리

```javascript
<Route path="/user/:id" element={<User />} />
```

```javascript
// pages/User.jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h1>사용자 ID: {id}</h1>;
}
```

<br/>

## 중첩 라우팅

- 라우트 안에 또 다른 라우트를 넣는 것
- 대규모 애플리케이션에서 레이아웃을 공유하면서 각 페이지를 나눠서 관리할 때 매우 유용

```javascript
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>
```

```javascript
// DashboardLayout.jsx
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h2>대시보드</h2>
      <Outlet />
    </div>
  );
}
```
