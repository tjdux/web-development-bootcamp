## 단일 책임 원칙 (SRP)

- 클래스는 하나의 책임만 가져야 한다는 매우 기본적인 원칙
- 5개의 설계 원칙 중 가장 기본적이고 중요한 원칙
- 예를 들면, 유저 서비스라는 클래스가 있는 경우에 해당 클래스는 유저 관련된 액션만 해야하고 다른 액션을 해서는 안 됨

```typescript
class UserService {
  constructor(private db: Database) {}

  getUser(id: number): User {
    // 사용자 조회 로직
    return this.db.findUser(id);
  }

  saveUser(user: User): void {
    // 사용자 저장 로직
    this.db.saveUser(user);
  }

  // 🙅‍♀️ 클래스 분리 필요
  // sendWelcomeEmail(user: User): void {
  //   const emailService = new EmailService();
  //   emailService.sendWelcomeEmail(user);
  // }
}

// 🙆‍♀️ 로직 분리!
class EmailService {
  sendWelcomeEmail(user: User): void {
    // 이메일 전송 로직
    console.log(`Sending welcome email to ${user.email}`);
  }
}
```

<br/>

## 개방 폐쇄 원칙 (OCP)

- 클래스는 확장에 대해서는 열려 있어야 하고 수정에 대해서는 닫혀 있어야 한다는 원칙
- 클래스의 기존 코드를 변경하지 않고도 기능을 확장할 수 있어야 함
- 즉, 인터페이스나 상속을 통해서 이를 해결 할 수 있음 (인터페이스나 상속을 이용하면 개방 폐쇄 원칙을 지킬 수 있음)
- 부모 클래스의 기존 코드 변경을 하지 않고 기능을 확장 가능함

```typescript
interface Notification {
  send(message: string): void;
}

class EmailNotifier implements Notification {
  send(msg: string) {
    console.log(`이메일 발송: ${msg}`);
  }
}

class SMSNotifier implements Notification {
  send(msg: string) {
    console.log(`SMS 발송: ${msg}`);
  }
}

function notify(userMsg: string, service: Notification) {
  service.send(userMsg);
}
```

<br/>

## 리스코프 치환 원칙 (LSP)

- 서브타입은 기반이 되는 슈퍼타입을 대체할 수 있어야 한다는 원칙
- 다시 말해, 자식 클래스는 부모 클래스의 기능을 수정하지 않고도 부모 클래스와 호환되어야 함
- 논리적으로 엄격하게 관계가 정립이 되어야 함

```typescript
// 🙅‍♀️
// class Bird{
//   fly(): void{
//     console.log("펄럭펄럭")
//   }
// }

// class Penguin extends Bird{}

// 🙆‍♀️
abstract class Bird {
  abstract move(): void;
}

class FlyingBird extends Bird {
  move() {
    console.log("펄럭펄럭");
  }
}

class NonFlyingBird extends Bird {
  move() {
    console.log("뚜벅뚜벅");
  }
}

class Penguin extends NonFlyingBird {}
```

<br/>

## 인터페이스 분리 원칙 (ISP)

- 클래스는 자신이 사용하지 않는 인터페이스의 영향을 받지 않아야 한다.
- 즉, 해당 클래스에게 무의미한 메소드의 구현을 막자는 의미
- 인터페이스를 너무 크게 정의하기보단 필요한 만큼만 정의하고 클래스는 요구사항에 맞게 인터페이스를 구현하도록 유도해라!

```typescript
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class SmartPrinter implements Printer, Scanner {
  print() {}
  scan() {}
}
```

<br/>

## 의존 역전 원칙 (DIP)

- java의 spring이나 node.js의 nest.js 프레임워크와 같이 웹 서버 프레임워크 내에서 많이 나오는 원칙
- 하위 수준 모듈 (구현 클래스)보다 상위 수준 모듈(인터페이스)에 의존을 해야한다는 의미
- 구현은 하위 수준 모듈에 맞기고 상위일수록 추상적으로 표현

```typescript
interface MyStorage {
  save(data: string): void;
}

class MyLocalStorage implements MyStorage {
  save(data: string): void {
    console.log(`로컬에 저장: ${data}`);
  }
}

class MyCloudStorage implements MyStorage {
  save(data: string): void {
    console.log(`클라우드에 저장: ${data}`);
  }
}

class Database {
  constructor(private storage: MyStorage) {}

  saveData(data: string): void {
    this.storage.save(data);
  }
}

const myLocalStorage = new MyLocalStorage();
const myCloudStorage = new MyCloudStorage();
const myLocalDatabase = new Database(myLocalStorage);
const myCloudDatabase = new Database(myCloudStorage);

myLocalDatabase.saveData("로컬 데이터"); // 로컬에 저장: 로컬 데이터
myCloudDatabase.saveData("클라우드 데이터"); // 클라우드에 저장: 클라우드 데이터
```
