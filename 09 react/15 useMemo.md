## `useMemo()`

```javascript
useMemo(() => {
  // 계산 함수 (return 값이 있어야 함)
  return 결과;
}, [의존성1, 의존성2]);

const memoizedValue = useMemo(() => computeSomething(a, b), [a, b]);
```

- React 컴포넌트에서 연산 결과를 메모이제이션(캐싱) 해서, 불필요한 재계산을 막고 성능을 최적화할 수 있게 도와주는 훅
- `useMemo`는 두 번째 인자인 `deps`(의존성 배열)의 값이 **변할 때만** 첫 번째 인자인 함수를 실행해서 결과를 다시 계산함
- `deps`가 변하지 않으면 이전 계산 값을 **재사용(캐시)** 함.
- 사용 상황: 무거운 계산이 컴포넌트가 리렌더링 될 때마다 반복될 때
  <br/>

## 예제

```javascript
const heavyCalculation = (num) => {
  console.log("무거운 계산 중...");
  let result = 0;
  for (let i = 0; i < 1e7; i++) result += num * i;
  return result;
};

const MyComponent = ({ value }) => {
  const computed = useMemo(() => heavyCalculation(value), [value]);

  return <div>결과: {computed}</div>;
};
```

```javascript
// 날짜별 데이터 정리
const grouped = useMemo(() => {
  const result = {};
  data.forEach((item) => {
    const date = item.date;
    if (!result[date]) result[date] = [];
    result[date].push(item);
  });
  return result;
}, [data]);
```

<br/>

## 주의사항

- useMemo를 무조건 사용하면 안됩니다.
  - 단순한 값은 `useMemo`를 쓰는 게 오히려 느려 질 수 있음
- 의존성 배열 정확히 설정
  - `[a, b]` 등 관련 값이 바뀔 때만 계산하게 해야 함
- 연산이 "비싼" 경우에만 사용
  - 숫자 계산, 배열 필터링, 정렬, 그룹화 등
- 함수 캐싱엔 `useCallback`을 사용
  - `useMemo(() => fn, [...])`보다는 `useCallback(fn, [...])`
- 언제 꼭 써야 할까?
  - `filter`, `sort`, `map`, `reduce` 같은 배열 처리 연산이 포함된 경우
  - `React.memo`와 함께 렌더링 최적화를 할 때 props로 계산된 값을 넘길 경우
  - chart, date group, virtual scroll처럼 **대량 데이터**를 다룰 때

### `useMemo()` vs. `useCallback()`

| 훅                      | 목적             | 반환값                     |
| ----------------------- | ---------------- | -------------------------- |
| `useMemo(fn, deps)`     | 연산 결과 캐싱   | `fn()`의 **결과값**        |
| `useCallback(fn, deps)` | 함수 자체를 캐싱 | `fn` 자체 (함수 참조 유지) |
