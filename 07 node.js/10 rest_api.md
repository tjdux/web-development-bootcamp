## API
### API (Application Programming Interface)
- 서로 다른 프로그램끼리 정보를 주고받기 위해 약속된 규칙 (인터페이스)
- "어떤 정보를 어떻게 요청할 것인가?", "응답은 어떤 형식으로 받을 것인가?" 등을 이미 정의한 것
### API 작성
- 프런트엔드에서 원하는 기능을 수행하는 URL과 인터페이스를 제공한다는 의미 
- 원하는 데이터를 받아 데이터를 저장하고, 저장되어 있는 데이터를 읽어서 프론트엔드에 제공하는 행위를 통해 사용자가 원하는 목적을 이룰 수 있게 함
<br/>

## REST API
### REST API
- Representational State Transfer
- **웹의 HTTP 프로토콜을 기반**으로 자원을 정의하고, 자원에 대한 **행위를 명확한 규칙**으로 나타낸 API 형태
- www와 같은 분산 하이퍼미디어 시스템을 위해 네트워크 상에서 자원을 쉽고 명확하게 식별하고 조작할 수 있게 도와주는 소프트웨어 아키텍처의 한 형식

|구성요소|설명|
|---|---|
|자원 (Resource)|URI로 표현되는 대상 (`/users`, `/posts/1`)|
|행위 (Verb)|HTTP 메서드 (`GET`, `POST`, `PUT`, `DELETE`)로 정의된 동작|
|표현 (Representation)|JSON, XML 등으로 데이터 표현 (`Content-Type: application/json`)|

### REST API 설계 규칙
- URI는 **명사**를 사용: `/users` ⭕, `/getUsers` ❌
- 자원은 **단수/복수 구분**이 명확해야 함: `/users` ← 사용자 목록, `/users/1` ← 특정 사용자
- **행위는 HTTP 메서드**로 표현: `/users`에 POST → 사용자 생성, `/users/1`에 DELETE → 사용자 삭제
- **무상태성**(Stateless)
  - 서버는 클라이언트의 상태를 저장하지 않음
  - 모든 요청은 독립적으로 처리되어야 함
- 계층 구조 (Hierachical URI): `/users/1/posts/2` → 사용자 1의 게시글 2번
### 주의 사항
- REST는 규칙이지 표준이 아님
- 간단한 경우에는 RESTful에 덜 엄격하게 설계해도 됨 