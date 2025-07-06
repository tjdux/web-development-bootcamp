## Hook

- 클래스 컴포넌트에서만 가능했던 state (상태관리)와 lifecycle (라이프사이클)이 가능하도록 돕는 기능
- 컴포넌트에서 상태와 기능을 쉽게 사용할 수 있게 해주는 react 규칙
- 사용 규칙
  - 최상위 스코프 (함수 컴포넌트의 최상위 레벨)에서만 호출 가능
    - 최상위 컴포넌트 🙅‍♀️
    - 반복문, 조건문, 중첩된 함수 내부에서 호출 불가
  - React 함수형 컴포넌트 안에서만 호출 가능
  - 커스텀 훅은 `use` 접두사 필수
- 대표적인 내장 훅
  - `useState` : 상태 관리
  - `useEffect` : side-effect
  - `useContext` : 중앙 관리
  - `useRef`
  - `useMemo`, `useCallback` : 최적화 (useMemo: 변수 최적화, useCallback: 함수 최적화)
