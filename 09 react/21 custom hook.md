- 훅과 목적은 동일
- 커스텀 혹은 여러 컴포넌트에서 반복되는 로직 (예: 데이터 fetch, 폼 관리 등)을 재사용하기 위해 직접 만드는 훅
- `use` 접두사 꼭 붙여야 함 (e.i. `useFetch`)
- 커스텀 혹은 반복되는 훅 로직을 함수로 빼서 여러 컴포넌트에서 재사용 할 수 있게 만들어주는 나만의 훅

```jsx
export const useTodos = function () {
  const [todos, setTodos] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      });
  }, []);

  return { todos, IsLoading };
};

// 사용 예시
function TodoList() {
  const { todos, IsLoading } = useTodos();

  if (IsLoading) return <div>로딩 중...</div>;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```
