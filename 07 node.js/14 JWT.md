## OAuth (Open Authorization)
- 인터넷 사용자들이 비밀번호를 직접 제공하지 않고 **다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 어플리케이션의 접근 권한을 부여**할 수 있는 공통적인 수단으로서 사용되는, 접근 위임을 위한 개방형 표준
- 서드파티 어플리케이션이 사용자의 일부 리소스에 제한적으로 접근할 수 있도록 권한을 위임받는 프로토콜
### OAuth 1.0
- 서드파티 어플리케이션이 사용자의 데이터에 접근할 권한을 얻기 위해 서명된 요청을
사용
- 요청의 서명 부분은 어플리케이션의 비밀 키와 사용자의 토큰을 조합하여 생성되며, 이를 통해 보안 유지
### OAuth 2.0
- 기본적으로 **인증과 권한을 분리**하여 다루는 것이 특징
- Access Token을 통해 권한을 부여하고, 사용자의 실제 비밀 정보를 공유하지 않음
- 서드파티 앱은 Access Token을 이용해 제한된 정보를 받아옴 
- Bearer Token 인증 방식을 지원: 클라이언트가 발급받은 JWT를 "Authorization" 헤더에 담아 요청을 보내면, 서버는 해당 JWT의 유효성을 검사하여 권한을 부여


## JWT (JSON Web Token)
- 웹 애플리케이션에서 서버와 클라이언트가 서로 신뢰할 수 있는 방식으로 정보를 주고받기 위해 사용하는 데이터 포맷(**JSON 기반 Access Token 형식**)
- ⚠️ JWT는 Access Token의 여러 형식 중 하나인 데이터 포맷, Access Token은 JWT 형식일 수도 있고 아닐 수도 있음 
- 사용자가 로그인하면 서버가 "너는 인증된 사용자야!" 라는 정보를 담은 전자 티켓(JWT)을 발급하고, 클라이언트는 이 티켓을 가지고 서버에 자신의 신원을 증명하는 방식으로 작동
- 정보를 담고 있는 동시에, 이 정보가 **위변조되지 않았음을 확인**할 수 있는 메커니즘을 제공 ➡️ 웹 환경에서 **사용자 인증 및 권한 부여에 매우 효율적인 방법**으로 사용
- 예시 시나리오
  - 1️⃣ 사용자가 다이어트 앱(서드파티 앱)에서 "카카오로 로그인"을 클릭
  - 2️⃣ 카카오는 사용자에게 권한 동의 요청
  - 3️⃣ 사용자가 "이 앱이 내 이메일 주소를 볼 수 있도록 허용" 클릭
  - 4️⃣ 카카오는 Access Token을 다이어트 앱에 전달함
    ```javascript
    // 카카오에서 JWT 생성
    jwt.sign(payload, secretOrPrivateKey, [options, callback])
    ```
  - 5️⃣ 이 토큰이 JWT 형식일 수도 있고 아닐 수도 있음
  - 6️⃣ 이 후 데이터 요청 시 다이어트 앱은 이 JWT를 Authorization 헤더에 넣어 카카오 API에 요청
  ```http
  GET /userinfo
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
  ```
  - 7️⃣ 카카오는 JWT 검증 (verify)을 거쳐 데이터 응답 
    ```javascript
    // JWT 검증
    jwt.verify(token, secretOrPrivateKey, [options, callback])
    ```
### JWT 특징
- 자체적으로 **서명을 포함하므로 위조 방지 가능**
- Base64로 인코딩된 JSON이라 읽고 해석하기 쉬움
- 서버가 따로 세션 상태를 기억할 필요 없음 (stateless)
  - 전통적인 세션 방식 (stateful)
    - 1️⃣ 사용자가 로그인함
    - 2️⃣ 서버가 세션 ID를 생성하고, 사용자 정보는 서버 메모리나 DB에 저장
    - 3️⃣ 서버는 클라이언트에게 Set-Cookie: sessionId=abc123을 줌
    - 4️⃣ 이후 클라이언트가 요청을 보낼 때마다 이 세션 ID를 함께 보냄
    - 5️⃣ 서버는 세션 ID를 통해 서버에 저장된 사용자 정보를 조회
    - ❗ 단점
      - 서버가 사용자 상태(세션 데이터)를 계속 저장하고 관리해야 함 → stateful
      - 서버가 많아지면 세션 공유(=세션 클러스터링)가 복잡해짐
  - JWT 방식 (stateless)
    - 1️⃣ 사용자가 로그인함
    - 2️⃣ 서버가 **사용자 정보 등을 인코딩해서 JWT(토큰)**를 생성함
    - 3️⃣ 이 JWT를 클라이언트에게 전달
    - 4️⃣ 이후 클라이언트는 요청마다 이 JWT를 헤더에 담아서 보냄
    - 5️⃣ 서버는 이 JWT 안에 포함된 정보를 그 자리에서 검증하고 해석함
    - 💡 특징
      - **서버는 토큰을 따로 저장하지 않음**
      - 요청마다 들어오는 JWT만으로 누군지, 어떤 권한이 있는지 확인 가능 → stateless (서버는 상태를 기억하지 않아도 됨)
### JWT 구성 요소
#### Header
- 토큰의 타입(type)과 **사용한 암호화 알고리즘(alg) 정보**를 포함
- 일반적으로 `typ`은 `JWT`로 고정, `alg`는 `HS256`, `RS256` 등 서명에 사용될 암호화 알고리즘을 지정 
```JSON
{
  "alg": "HS256",
  "typ": "JWT"
}
```
- 이 JSON 객체를 Base64Url 인코딩한 것이 JWT의 첫 번째 부분
#### Payload
- **실제로 전달하고 싶은 정보**인 "클레임(Claim)"들을 담고 있음
- 클레임: 이름(key) + 값(value)으로 구성된 한 쌍의 정보
  - 등록된 클레임 (Registered Claims)
    - 미리 정의된 클레임들
    - `iss`(발급자), `exp`(만료 시간), `sub`(주제), `aud`(대상)...
  - 공개 클레임 (Public Claims)
    - JWT를 사용하는 사람들이 충돌을 피하기 위해 정의하는 클레임들
    - 특정 URL 형태로 정의 가능
  - 비공개 클레임 (Private Claims)
    - 서버와 클라이언트 간에 협의하여 사용하는 사용자 정의 클레임
    - e.g. `userId`, `email`...
```JSON
{
  "userId": 100,
  "name": "Kim",
  "iat": 1678886400, // Issued At (발급 시간)
  "exp": 1678890000  // Expiration Time (만료 시간)
}
```
- 이 JSON 객체를 Base64Url 인코딩한 것이 JWT의 두 번째 부분
- **Payload는 누구나 Base64Url 디코딩을 통해 내용을 쉽게 열어볼 수 있음 ➡️ 민감한 정보를 Payload에 직접 담아서는 안됨** 
#### Signature
- **토큰의 위변조 여부를 확인**하는 데 사용되는 부분
- JWT의 주요 목적은 정보 보호가 아닌 **위조 방지** ➡️ Signature를 통해 무결성을 보장하며, 비밀키가 노출되지 않는 한, 토큰의 내용이 위조되더라도 서명을 통해 위조된 토큰을 걸러낼 수 있음 
- Signature 생성 과정
  - 1️⃣ Base64Url 인코딩된 Header와 Base64Url 인코딩된 Payload를 점(.)으로 연결
  - 2️⃣ 연결된 문자열을 헤더에 명시된 암호화 알고리즘과 서버만이 알고 있는 
비밀키(Secret Key)를 사용하여 암호화(해싱)
- 토큰의 무결성을 보장 
```javascript
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```
