// 1️⃣ string
let userName: string = "Alice";
let message: string = `Hello, ${userName}`;

// 2️⃣ number
// 🎇 NaN, Infinity <- 숫자로 취급
let age: number = 27;
const PI: number = 3.14;

// 3️⃣ boolean
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

// 4️⃣ null, undefined
// tsconfig에서 strictNullChecks가 true여야 사용 가능
let nothing: null = null;
let notAssigned: undefined = undefined;
// 🙅‍♀️ let numA: number = null;

// 5️⃣ any
// any 사용 지양
let data: any = 123;
data = "문자열도 가능";
data = true;

// 6️⃣ unknown
// unknown의 any와의 차이점: 실행되기 전에 무조건 타입 검사를 한번 함
// any보다는 안전한 타입
let value: unknown = "문자열";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 7️⃣ void
// 함수에만 쓰임 (함수가 값을 반환하지 않을 때 사용)
// 변수에도 사용은 가능하나 잘 사용하지 않음
function logMessage(message: string): void {
  console.log(message);
}

let a: void;
a = undefined;
// 🙅‍♀️
// a = 1;
// a = "hello";
// a = {};

// 8️⃣ never
// 절대 반환하지 않는 함수에 사용 (에러 함수, 무한 루프 함수에 사용)
function func(): never {
  while (true) {}
}

function throwError(): never {
  throw new Error("예외 발생!");
}

let b: never;
// 🙅‍♀️
// b = undefined;
// b = 1;
// b = "hello";
// b = {};
// b = anyVar;

// 9️⃣ object
let obj: object = { name: "Alice" };
// 점 표기법으로 접근 불가 obj.name
// 구조 분해 형태로 더 많이 작성
// 구조를 기준으로 타입 정의 -> 구조적 타입 시스템 (property based type system)
let obj2: { name: string } = { name: "Alice" };

let user: {
  id?: number; // 선택적 프로퍼티 (옵셔널 프로퍼티)
  name: string;
} = {
  id: 1,
  name: "박서연",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "my api key",
};

// 🙅‍♀️
// config.apiKey = "hacked"

// 🔟 배열의 경우...
let fruits: string[] = ["banana", "apple"];

// 🌱 리터럴 타입: 값 그 자체가 타입
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
// 🙅‍♀️
//numA = 0;
//strA = "hi"
// boolA = false;

// 📽️ 위는 모두 명시적 타입 선언
// 타입 추론
let userName1 = "Alice";
//userName1 = 1; //error: 최초에 타입이 결정되어 에러
