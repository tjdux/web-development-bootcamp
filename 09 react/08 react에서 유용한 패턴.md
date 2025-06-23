- **불변성 항상 유지하기**: 스프레드 연산자, map, filter 활용  
- **의미 있는 State 이름 사용**: isLoading, userInfo
- **이벤트 핸들러 분리**: 재사용 가능한 함수로 작성
- **조건부 렌더링**
  ```javascript
  	{`{isLoading && 로딩중...}
      {error && 에러: {error}}`}
  ```
- **리스트 랜더링**
  ```javascript
  {`{items.map(item => ({item.name}))}`}
  ```