- HTTP: 클라이언트와 서버 간의 데이터 전송을 위한 통신 규약

|요청 방식|GET|POST|
|---|---|---|
|데이터 전송 위치|URL에 쿼리 스트링으로 포함|HTTP 메시지 본문 (Body)|
|보안성|노출(URL에 표시)|상대적으로 안전 (Body에 포함)|
|데이터 용량|URL 길이에 제한이 있음|제한 없음 (서버에 따라 다름)|
|캐싱 가능성|가능(URL에 따라)|불가능|
|브라우저 기록 저장|저장됨|저장되지 않음|
|적합한 용도|조회, 검색, 링크|로그인, 사용자 데이터 전송|

- GET
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>GET 방식 - 구글 폼 예제</title>
    </head>
    <body>
      <h2>GET 방식 - 검색 폼 예제</h2>
      <form action="https://www.google.com/search" method="GET">
        <label for="query">검색어:</label>
        <input type="text" id="query" name="q" placeholder="검색어를 입력하세요">
        <button type="submit">검색하기</button>
      </form>
    </body>
  </html>
  ```
  - `https://www.google.com/search?q=새싹`
  - input의 name과 value가 URL에 붙음
  - 검색어가 URL에 노출 ➡️ 검색 결과를 쉽게 공유 가능
  - 브라우저 히스토리에도 기록
  - 캐시 가능 ➡️ 검색 기록 다시 사용 가능
- POST
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>POST 방식 - 구글 폼 예제</title>
    </head>
    <body>
      <h2>POST 방식 - 사용자 정보 제출</h2>
      <form action="https://httpbin.org/post" method="POST">
        <label for="username">사용자 이름:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="email">이메일:</label>
        <input type="email" id="email" name="email" required><br><br>

        <button type="submit">제출하기</button>
      </form>
    </body>
  </html>
  ```
  - 사용자 로그인, 회원 가입, 설문 응답 전송, 파일 전송 등 보안이 필요한 데이터 전송에 사용
  - URL에 데이터가 노출되지 않으므로 상대적으로 높은 보안성
  - 브라우저 기록에 저장되지 않음
  