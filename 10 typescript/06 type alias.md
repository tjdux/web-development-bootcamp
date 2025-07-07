## 타입 별칭

- 기존 타입에 새로운 이름 (별칭)을 부여하는 데 사용
- `type` 키워드를 사용하여 정의
- 인터페이스와 달리 객체 타입 뿐만 아니라 원시 타입, 유니온 타입, 튜플, 함수 시그니처 등 거의 모든 ts 타입에 별칭 부여 가능
- 특징
  - 모든 타입에 적용 가능
  - 복잡한 타입 단순화
  - 타입 조합
  - 선언적 병합 불가

```typescript
// 1️⃣ 원시 타입에 별칭 부여
type Age = number;
type UserName = string;
const userAge: Age = 30;
const greetingName: UserName = "ts";
console.log(`${greetingName}의 나이: ${userAge}`);

// 2️⃣ 유니온 타입에 별칭 부여
type ResultStatus = "success" | "failure";
type IdOrNAME = number | string;

function showStatus(status: ResultStatus): void {
  console.log(`처리 상태: ${status}`);
}
showStatus("success");

// 🙅‍♀️
//showStatus("pending")

// 3️⃣ 객체 타입에 별칭 부여 (인터페이스와 유사)
type Coords = {
  x: number;
  y: number;
};

const point: Coords = { x: 10, y: 20 };
console.log(`좌표: ${point.x}, ${point.y}`);

// 4️⃣ 함수 시그니처에 별칭 부여
type GreetFunction = (name: string) => string;

const sayHello: GreetFunction = (name) => `Hello, ${name}`;
console.log(sayHello("홍길동"));

// 5️⃣ 타입 조합
type PersonInfo = {
  name: string;
  age: number;
};

type EmployeeInfo = PersonInfo & {
  employeeId: string;
  department: string;
};

const employee: EmployeeInfo = {
  name: "kim",
  age: 30,
  employeeId: "001",
  department: "s/w",
};

// interface  -- type
// extends --- &
type Subjects = "math" | "science" | "sociology";
type Grades = {
  [key in Subjects]: string;
};
```
