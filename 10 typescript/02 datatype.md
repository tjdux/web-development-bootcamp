```typescript
// string
let userName: string = "Alice";
let message: string = `Hello, ${userName}`;

// number
// 🎇 NaN, Infinity <- 숫자로 취급
let age: number = 27;
const PI: number = 3.14;

// boolean
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

// null, undefined
// tsconfig에서 strictNullChecks가 true여야 사용 가능
let nothing: null = null;
let notAssigned: undefined = undefined;

// any
// any 사용 지양
let data: any = 123;
data = "문자열도 가능";
data = true;

// unknown
// unknown의 any와의 차이점: 실행되기 전에 무조건 타입 검사를 한번 함
// any보다는 안전한 타입
let value: unknown = "문자열";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// void
// 함수에만 쓰임 (함수가 값을 반환하지 않을 때 사용)
// 변수에도 사용은 가능하나 잘 사용하지 않음
function logMessage(message: string): void {
  console.log(message);
}

// never
// 절대 반환하지 않는 함수에 사용 (에러 함수, 무한 루프 함수에 사용)
function throwError(): never {
  throw new Error("예외 발생!");
}

// object
let obj: object = { name: "Alice" };
// 구조 분해 형태로 더 많이 작성
let obj2: { name: string } = { name: "Alice" };

// 배열의 경우...
let fruits: string[] = ["banana", "apple"];

// 위는 모두 명시적 타입 선언
// 타입 추론
let userName1 = "Alice";
//userName1 = 1; //error: 최초에 타입이 결정되어 에러
```
