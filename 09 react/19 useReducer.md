## `useReducer`

- 현재 상태와 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수

```javascript
const reducer = (prevNumber, action) => {
  switch (action) {
    case "INCREMENT":
      return prevNumber + 1;
    case "DECREMENT:
      return prevNumber - 1;
    case "RESET"
      return 0;
    default:
      return prevNumber;
  }
}

const [number, dispatch] = useReducer(reducer, 0);

return (
  <div>
    <h2>{number}</h2>
    <button onClick={() => dispatch("INCREMENT")}>Plus</button>
    <button onClick={() => dispatch("DECREMENT")}>Minus</button>
    <button onClick={() => dispatch("RESET")}>Reset</button>
  </div>
)
```

<br/>

## `useReducer()` vs. `useState()`

- `useReducer()`가 무조건 더 좋은 것이 아님
- 상황에 따라 적절한 hook 사용!
  - state가 단순하다면 `useState()`
  - state가 복잡하다면 (객체, 배열 같이 하위 요소가 많은 경우) `useReducer()`
