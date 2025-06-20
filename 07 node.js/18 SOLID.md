## SOLID
- 객체 지향 설계의 5가지 핵심
- 유지보수성과 확장성을 위해 고안
### 단일 책임 원칙 (SRP)
- 각 클래스는 하나의 책임만 가져야 함
- 클래스는 하나의 기능에만 집중해야 하며, 다른 기능은 다른 클래스가 담당
```javascript
// 🙅‍♀️
class UserService {
  createUser(user) {
    // 사용자 생성 로직
  }

  sendWelcomeEmail(user) {
    // 이메일 전송 로직
  }
}

// 🙆‍♀️
class UserService {
  createUser(user) {
    // 사용자 생성 로직
  }
}

class EmailService {
  sendWelcomeEmail(user) {
    // 이메일 전송 로직
  }
}
```
### 개방-폐쇄 원칙 (OCP)
- 객체는 확장에는 열려 있어야 하지만, 변경에는 닫혀 있어야 함
- 새로운 기능을 추가할 때 기존 코드를 변경하지 않고, 확장 가능한 방식으로 코드를 설계
- 코드의 변경 없이 새로운 요구사항에 대응 가능
```javascript
// 🙅‍♀️
class Discount {
  getDiscount(userType) {
    if (userType === 'VIP') return 0.2;
    if (userType === 'Regular') return 0.1;
    return 0;
  }
}


// 🙆‍♀️
class Discount {
  getDiscount(user) {
    return user.getDiscount();
  }
}

class VIPUser {
  getDiscount() {
    return 0.2;
  }
}

class RegularUser {
  getDiscount() {
    return 0.1;
  }
}
```
### 리스코프 치환 원칙 (LSP)
- 상위 타입의 객체를 하위 타입의 객체로 치환해도 프로그램이 정상적으로 동작해야 함
- 상위 타입의 객체와 하위 타입의 객체는 상호 교환이 가능해야 함
- 자식 클래스가 부모 클래스의 기능을 오염시키거나, 행동을 변경시키거나, 부모 클래스가 기대한 행동(계약)을 깨뜨려서는 안 됨
- 의도: 상속받은 클래스가 부모 클래스의 기능을 해치지 않게 해야 함
- 이유: 다형성을 안정적으로 보장하려면 자식 클래스가 부모의 계약을 지켜야 함
- 리스코프 치환 원칙을 지키기 위한 팁 
  - 행동 보장: 자식 클래스는 부모 클래스가 기대하는 모든 메서드의 의미를 지켜야 함
  - 메서드 계약 유지: 메서드 시그니처뿐 아니라, 반환값 의미, 부작용도 동일하게 작동해야 함
  - 예외 주의: 부모는 성공하는데 자식만 예외를 던지면 LSP 위반
  - 계층 재설계 고려: 동작이 다른 객체를 같은 계층에 넣기보다는, 계층 구조를 재설계하는 것이 안전
```javascript
// 🙅‍♀️
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("I can't fly!");
  }
}

function letBirdFly(bird) {
  bird.fly();
}

const birds = [new Bird(), new Ostrich()];

birds.forEach(letBirdFly); // ❌ 여기서 오류 발생 (Ostrich는 Bird를 완전 대체 불가능)

// 🙆‍♀️
class Bird {
  move() {
    console.log("Moving");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  walk() {
    console.log("Walking");
  }
}

function letBirdMove(bird) {
  bird.move(); // 모든 새는 이동 가능
}

function letFlyingBirdFly(flyingBird) {
  flyingBird.fly(); // 나는 새만 날 수 있다
}

const birds = [new FlyingBird(), new Ostrich()];
birds.forEach(letBirdMove); // ✅ 모두 문제 없이 동작

letFlyingBirdFly(new FlyingBird()); // ✅ 날 수 있음
// letFlyingBirdFly(new Ostrich()); // ❌ 타입 에러 또는 런타임 에러 방지 가능

```
### 인터페이스 분리 원칙 (ISP)
- 특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 나음
- 클라이언트에 필요한 인터페이스만 제공하여 불필요한 의존을 줄여야 함
- 여러 인터페이스로 분리하여 클라이언트가 필요한 기능만 사용하도록 해야 함
```typescript
// 🙅‍♀️
interface Machine {
  print();
  scan();
  fax();
}

class OldPrinter implements Machine {
  print() {}
  scan() {
    throw new Error("Unsupported");
  }
  fax() {
    throw new Error("Unsupported");
  }
}

// 🙆‍♀️
interface Printer {
  print();
}

interface Scanner {
  scan();
}

class OldPrinter implements Printer {
  print() {}
}
```
### 의존 역전 원칙 (DIP)
- 추상화된 인터페이스를 사용하고, 구체적인 구현 클래스를 의존해야 함
- 고수준 모듈이 저수준 모듈에 의존하지 않고, 모두 추상적인 인터페이스에 의존해야 함 ➡ 확장이 쉬어짐 
  - 고수준 모듈: 사용자 로직, 비즈니스 규칙, 앱의 핵심 기능을 담당하는 코드
  - 저수준 모듈: 데이터베이스, 파일 시스템, 네트워크 등 세부적인 기능을 담당하는 코드
  - 고수준 모듈이 저수준 모듈을 직접 사용하면, 세부 구현이 바뀔 때마다 고수준 로직도 수정해야 함 
- 이유: 하위 모듈 변경이 상위 모듈에 영향을 주지 않도록 하기 위함
```javascript
// 🙅‍♀️
class MySQLDatabase {
  save(data) {
    // MySQL 저장 로직
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase(); //MongoDB로 바꾸고 싶으면 UserService도 수정해야 함
  }
  // 고수준 로직이 저수준 구현에 종속되어 유연하지 않음

  saveUser(user) {
    this.db.save(user);
  }
}

// 🙆‍♀️
// 인터페이스 역할 (JS에서는 추상 클래스나 Duck Typing으로 대체)
class Database {
  save(data) {
    throw new Error("구현 필요");
  }
}

class MySQLDatabase extends Database {
  save(data) {
    console.log("MySQL에 저장:", data);
  }
}

class MongoDBDatabase extends Database {
  save(data) {
    console.log("MongoDB에 저장:", data);
  }
}

class UserService {
  constructor(database) {
    this.db = database; // 추상화에 의존 ✅
  }

  createUser(user) {
    this.db.save(user);
  }
}

// 실행 코드
const db = new MongoDBDatabase();
const service = new UserService(db);
service.createUser({ name: "Alice" });
```

