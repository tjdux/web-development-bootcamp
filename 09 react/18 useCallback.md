- rendering 최적화에 사용되는 Hook API
- `useMemo`와 유사: `useMemo`는 값을 최적화, `useCallback`은 다시 rendering될 때 함수를 다시 불러오는 것을 막음

```javascript
const memoizedCallback = useCallback(callback, deps);

const onClick = useCallback(
  (e) => {
    e.preventDefault();
    setNumber(number + 1);
  },
  [number]
);
```
