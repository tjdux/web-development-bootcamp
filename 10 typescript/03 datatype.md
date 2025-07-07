## boolean

- 참 (true) 또는 거짓 (false) 두 가지 값만을 나타냄
- 주로 조건문 (e.g. `if`문), 비교 연산 (e.g. `a===b`), 그리고 어떤 상태의 유효성 검사 등에서 사용
- 2가지 상태를 표현할 때는 boolean 사용
- 3가지 이상의 상태를 표현하고 싶다면 `enum`이나 `string` 또는 다른 복합 타입을 사용해야 함

```typescript
function checkUserStatus(isLoggedIn: boolean): string {
  if (isLoggedIn) {
    return "사용자가 로그인 되어 있습니다.";
  } else {
    return "사용자가 로그인되어 있지 않습니다.";
  }
}

const currentUserLoggedIn: boolean = true;
const message = checkUserStatus(currentUserLoggedIn);
console.log(message);
const guestUserLoggedIn: boolean = false;
console.log(checkUserStatus(guestUserLoggedIn));
```

## number

- ts에서 모든 종류의 숫자를 나타냄
- 일반적인 프로그래밍 언어에서는 정수 (integer)와 실수 (float/double)를 구분하여 다른 타입을 사용하지만, ts에서는 number 타입 하나로 이 모든 것을 처리
- 심지어 2진수, 8진수, 16진수 리터럴까지도 number 타입으로 표현 가능
- 모든 수치 연산에 사용되는 값은 "number" 타입으로 명시

```typescript
function calculateDiscountPrice(
  originalPrice: number,
  discountRate: number
): number {
  return originalPrice * (1 - discountRate);
}

const productPrice: number = 12500.5;
const discount: number = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount);
console.log(
  `원가 ${productPrice}에서 ${
    discount * 100
  }% 할인된 가격: ${finalPrice.toFixed(2)}원`
);

const hexValue: number = 0xff;
console.log(hexValue);
```

## string

- 텍스트 데이터를 나타냄
- 작은따옴표, 큰따옴표, 백쿼트를 사용하여 문자열을 표현
- 백쿼트(``)는 ES6부터 도입된 템플릿 리터럴 (template literal)을 사용할 때 쓰이며, 문자열 내부에 변수나 표현식을 쉽게 삽입할 수 있도록 해줌
- 텍스트를 조작하거나, 다른 텍스트와 합치거나, 특정 문자열을 찾고 대체하는 등 다양한 텍스트 관련 작업에 활용

```typescript
function generateWelcomeMessage(userName: string, appName: string): string {
  return `안녕하세요, ${userName}님! ${appName}에 오신 것을 환영합니다.`;
}

const user: string = "홍길동";
const app: string = "ts 시작";
const welcomeMessage = generateWelcomeMessage(user, app);
console.log(welcomeMessage);

const oldWayMessage: string =
  "안녕하세요, " + user + "님! " + app + "에 오신 것을 환영합니다.";
console.log(oldWayMessage);
```

## array

- 같은 타입의 여러 원소들을 순서대로 저장하는 자료구조
- 특정 타입 뒤에 []를 붙여 명시

```typescript
function calculateAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }
  let sum: number = 0;
  for (const grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

const studentGrades: number[] = [88, 92, 75, 95, 80];
const averageGrade = calculateAverage(studentGrades);
console.log(`학생 평균 점수: ${averageGrade.toFixed(2)}점`);
const fruits: string[] = ["사과", "바나나", "오렌지"];
fruits.push("포도");
console.log(fruits);
```

## tuple

- 서로 다른 타입의 원소들을 정해진 순서와 개수에 맞게 가질 수 있는 특수한 형태의 배열
- 각 위치에 올 수 있는 원소의 타입을 미리 명확하게 정의해야 됨
- 튜플과 배열의 차이
  - 가장 큰 차이는 원소의 타입 규칙
  - 배열: string[] => 무조건 string 타입의 원소들만 들어 갈 수 있음
  - 튜플: [string, string, number] => 각 위치에 오는 타입이 다를 수 있음, 다만 순서와 개수를 미리 지정해야 함

```typescript
const userInfo: [string, number, boolean] = ["이순신", 35, true];
console.log(`이름: ${userInfo[0]}, 나이: ${userInfo[1]}, 활성: ${userInfo[2]}`);

// 🙅‍♀️
//const userInfo: [string, number, boolean] = ["이순신", true, 35];

// 원소를 새로 넣을 수는 있으나 ts의 본래 목적이 사라지므로 사용 지양
// userInfo.push();
```

## enum

- 열거형 데이터 타입이라고 불림
- 관련된 상수값의 집합에 의미있는 이름을 부여하여 코드를 더 쉽게 관리할 수 있게 만들어주는 타입
- enum 내부의 각 요소는 별로 설정 값을 지정하지 않으면, 0으로 시작됨
- enum의 요소로는 숫자, string만 할당 가능
- 명확하게 관련된 상수 값들을 그룹화하여 코드를 더 읽기 쉽게 만들고 싶을 때 사용하는 것이 좋음
- 하지만 값의 수가 적거나, 값들 사이의 관계가 뚜렷하지 않으면 string 리터럴 유니온 타입 등을 고려하는 것이 더 나을 수 있음

```typescript
enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}

enum DayOfWeek {
  SUNDAY, // SUNDAY = 0
  MONDAY, // MONDAY = 1
  TUESDAY, // TUESDAY = 2
  WEDNESDAY, // WEDNESDAY = 3
  THURSDAY, // THURSDAY = 4
  FRIDAY, // FRIDAY = 5
  SATURDAY, // SATURDAY = 6
}
const today: DayOfWeek = DayOfWeek.MONDAY;
console.log(`현재 요일: ${DayOfWeek[DayOfWeek.MONDAY]}`);
```

## readonly

- ts에서만 사용되는 키워드
- 클래스의 속성(property)나 인터페이스의 속성을 불변(Immutable)으로 만들 때 사용
- readonly로 선언된 속성은 생성자 (constructor) 내부에서 한 번만 초기화될 수 있으며, 그 이후로는 값 변경 불가능
- 💚 const가 변수 자체의 재할당을 막는다면, readonly는 객체 속성의 재할당을 막는 데 특화
- const와 readonly 둘 다 불변성을 보장하는데 사용함

```typescript
class Product {
  readonly productId: string;
  productName: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.productId = id;
    this.productName = name;
    this.price = price;
  }
}

const laptop = new Product("LAPTOP001", "최신형 노트북", 1500000);
console.log(`제품 ID: ${laptop.productId}`);
console.log(`제품명: ${laptop.productName}`);

laptop.productName = "고급형 노트북";
console.log(`변경 제품명: ${laptop.productName}`);

// 🙅‍♀️
//laptop.productId = "Laptop"
```

## any

- 모든 타입의 슈퍼 타입
- any 타입으로 선언된 변수에는 어떤 타입의 값이든 저장할 수 있다는 의미
- js의 object처럼, 모든 값을 수용할 수 있는 "만능" 타입
- 사용 최대한 지양: any 타입은 ts의 타입 안정성을 포기하게 만드는 가장 위험한 도구
- any를 사용하면 ts의 타입 검사 기능이 무력화되어, 잠재적인 런타임 오류를 컴파일 시점에 잡아내지 못하게 됨

```typescript
let flexibleValue: any;

flexibleValue = 10;
console.log(flexibleValue);
flexibleValue = "자유로운 문자열";
console.log(flexibleValue);
flexibleValue = { id: 1, type: "data" };
console.log(flexibleValue);

// number는 any 안에 속해있는 타입
let num: number = flexibleValue;
console.log(num); // { id: 1, type: 'data' }
```

## unknown

- any와 비슷하게 모든 타입의 값을 저장 가능
- any와는 다르게 더 안전한 방식으로 동작
- unknown 타입의 변수에 할당된 값을 다른 특정 타입의 변수에 할당하거나, 그 값을 직접 사용하려면 명시적으로 타입이 무엇인지 확인
- 즉, 사용하기 전에 반드시 타입 체크를 하도록 강제하도록 만듦

## union

- unknown 타입은 안전하게 타입을 다룰 수 있지만, 결국 값을 사용할 때마다 매번 타입을 확인해야 하는 번거로움
- 변수가 여러 타입 중 하나를 가질 수 있도록 선언할 때 사용
- `A 또는 B 또는 C`와 같은 논리적 OR(|) 연산자처럼, 정의된 여러 타입 중 하나만 만족 ok

```typescript
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`ID는 문자열입니다: ${id.toUpperCase()}`);
  } else {
    console.log(`ID는 숫자입니다: ${id.toFixed(2)}`);
  }
}

printId("spartan1234");
printId(756861);
```

## 주의점 💡

- ts 사용 목적: 코드의 안정성과 유지보수성을 높이기 위해
- any, unknown을 남용 최대한 지양!!
- 변수가 가질 수 있는 타입을 최대한 구체적으로 명시하려는 습관을 들이는 것이 중요!
- union 타입과 같은 기능을 적극적으로 활용하여 불필요한 타입 오류를 방지하고, 더 견고하고 예측 가능한 코드를 작성
