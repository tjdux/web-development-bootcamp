## class

- 객체의 설계도
- 현실 세계의 구조와 행동을 코드로 추상화한 것

### 클래스의 구성 요소

- 클래스에서는 같은 종류의 객체들이 공통으로 가지는 속성 (attribute)과 메서드(method)를 정의
- **속성**은 **객체의 성질**
  - 객체: 클래스를 기반으로 생성되며 클래스의 인스턴스 (instance)

### 생성자

- 클래스의 인스턴스를 생성하고 초기화하는데 사용되는 특별한 메서드
- 클래스 내에서 constructor라는 이름으로 정의
- 인스턴스를 생성할 때 자동으로 호출
- 클래스 내에 오직 하나만 존재할 수 있음
- 보통, 생성자로 객체 속성을 초기화 하는 것 뿐 아니라 객체가 생성될 때 꼭 되어야 하는 초기화 로직을 집어넣기도 함

```typescript
class Coffee {
  coffeType: string;
  shot: number;
  constructor(public type: string, public shots: number) {
    this.coffeType = type;
    this.shot = shots;
  }

  describe() {
    console.log(`${this.shot}샷이 들어간 ${this.coffeType} 커피입니다.`);
  }
}

const temp1 = new Coffee("에스프레소", 10);
const temp2 = new Coffee("아메리카노", 1);

// 🧼 클래스는 타입으로도 활용 가능
const coffee: Coffee = {
  coffeType: "",
  shot: 1,
  describe() {},
};
```

<br/>

## 접근 제한자

- 클래스에서는 속성과 메서드에 접근 제한자를 사용해 접근을 제한할 수 있음

### `public`

- 클래스 외부에서도 접근이 가능한 접근 제한자
- 접근 제한자가 선언이 안되어있다면 기본적으로 접근 제한자는 public
- 클래스의 함수 중 민감하지 않은 객체 정보를 열람할 때나 누구나 해당 클래스의 특정 기능을 사용해야 할 때 많이 사용

### `private`

- 클래스 내부에서만 접근이 가능한 접근 제한자
- 보통은 클래스의 속성은 대부분 private으로 접근 제한자를 설정 (외부에서 직접적으로 객체의 속성을 변경할 수 없게 제한)
- 클래스의 속성을 보거나 편집하고 싶다면 별도의 getter/setter 메서드를 준비해놓는 것이 관례
  - setter <- 데이터를 직접적으로 바꿀 때만 사용

### `protected`

- 클래스 내부와 해당 클래스를 상속받은 자식 클래스에서만 접근이 가능한 접근 제한자

```typescript
class BankAccount {
  private balance: number;

  constructor(startingBalance: number) {
    this.balance = startingBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }
}

const test = new BankAccount(10000);
console.log(`입금 전: ${test.getBalance()}`);
test.deposit(10000);
console.log(`입금 후: ${test.getBalance()}`);
```

```ts
class Employee {
  private name: string;
  protected age: number;
  public position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("work!");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

const employee = new Employee("박서연", 27, "developer");
// 🙅‍♀️
//employee.name = "홍길동";
// employee.age = 20;
employee.position = "designer";

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 🙅‍♀️ private은 파생클래스에서도 접근 불가
  // func(){
  //   this.name
  // }

  // 🙆‍♀️ protected는 파생클래스에서 접근 가능
  func() {
    this.age;
  }
}
```

<br/>

## 상속 (inheritance)

- 코드 재사용을 위한 핵심 기능
- 객체 지향 프로그래밍에서 클래스 간의 관계를 정의하는 중요한 개념
- 상속을 통해 기존 클래스의 속성과 메서드를 물려받아 새로운 클래스를 정의
- 상속이 있어서 똑같은 코드를 계속 반복적으로 작성할 필요 없음
- 상속 이유: 코드의 재사용성을 위해
- 아래 예제에서 Vehicle이라는 클래스를 생성했으면 ElectricCar에서 클래스를 상속받고 자체적으로 필요한 속성 및 메서드를 추가하면 끝
- 오버라이딩: 부모 클래스에 정의되어 있는 메서드를 자식 클래스에서 같은 이름의 메서드로 재정의

```typescript
// 1️⃣ 상속
class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("work!");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
```

```ts
// 2️⃣ 함수 오버라이딩
class Vehicle {
  move() {
    console.log("이동 중...");
  }
}

class ElectricCar extends Vehicle {
  move() {
    console.log("조용히 이동 중...");
  }
}

class Car extends Vehicle {
  move() {
    console.log("시끄럽게 이동 중...");
  }
}

const tesla = new ElectricCar();
tesla.move();
```

<br/>

## 인터페이스와 클래스

```ts
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: number
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
```
