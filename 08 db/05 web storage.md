## 웹 스토리지

- 웹 브라우저에 기본적으로 내장되어 있는 데이터베이스
- 별도의 프로그램, 라이브러리 설치 필요 X
- 자바스크립트 내장함수 만으로 접근 가능

### Session Storage

```
sessionStorage.setItem(key, value);
sessionStorage.getItem(key);
```

- 브라우저 탭 별로 데이터 보관
- 탭이 종료되기 전에는 데이터 유지 (새로고침)
- 탭이 종료되거나 꺼지면 데이터 삭제

### Local Storage

```
localStorage.setItem(key, value);
localStorage.getItem(key);

localStorage.setItem("test", "hello");
⚠️localStorage.setItem("person", JSON.stringify({ name: "park" }));

console.log(localStorage.getItem("test"));
⚠️console.log(JSON.parse(localStorage.getItem("person")));
    // JSON.parse(undefined||null) -> 오류 발생
    
localStorage.removeItem("test");
localStorage.removeItem("person");
```

- 사이트 주소별로 데이터 보관
- 사용자가 직접 삭제하기 전까지 데이터 보관
- localStorage는 문자열 형태만 저장 가능 ➡️ **객체를 저장할 때는 문자열로 변환하여 저장하고, 다시 사용할 때는 파싱해야 함**
