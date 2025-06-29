## TanStack Query

- **서버 상태를 관리하기 위한 라이브러리**
- 데이터를 패칭하고 **캐싱, 동기화, 무효화** 등의 기능을 제공

```javascript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</React.StrictMode>;
```

```javascript
const { data, isLoading, error } = useQuery(queryKey, queryFn);
```

- `queryKey`: 캐시 구분용 고유 키 (배열 형식 추천)
- `queryFn`: 데이터를 가져오는 비동기 함수
- 반환값: `data`, `isLoading`, `isError`, `error`, `refetch`, `isFetching` 등
  <br/>

### 옵션

| 옵션                   | 설명                                                 |
| ---------------------- | ---------------------------------------------------- |
| `queryKey`             | 캐시 및 refetch 기준 키                              |
| `queryFn`              | 데이터를 가져올 비동기 함수                          |
| `enabled`              | `false`이면 자동 fetch 비활성화 (조건부 요청에 사용) |
| `staleTime`            | 데이터를 **신선한 상태**로 유지할 시간(ms)           |
| `cacheTime`            | 캐시 유지 시간(ms)                                   |
| `refetchOnWindowFocus` | 창 포커싱 시 자동 refetch 여부 (기본: `true`)        |

## 예제

### API 데이터 가져오기

```javascript
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

const UsersComponent = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

### 조건부 fetch (`enabled` 사용)

```javascript
const { data } = useQuery({
  queryKey: ["user", userId],
  queryFn: () => fetchUser(userId),
  enabled: !!userId, // userId가 존재할 때만 fetch 실행
});
```

### refetch 수동 호출

```javascript
const { data, refetch } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  enabled: false, // 자동 실행 비활성화
});

<button onClick={() => refetch()}>다시 가져오기</button>;
```
