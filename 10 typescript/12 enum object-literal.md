## enum과 object literal

### 공통점

- 모두 상수를 정의하고 그룹화하는 데 사용될 수 있음

### 차이점

#### enum

- 상수 값들의 집합을 정의하는 데 사용되는 특별한 데이터 타입
- 주로 관련된 상수들을 명확하게 그룹화하고 관리할 때 유용
- 가독성 및 명확성: 상수 값에 의미있는 이름을 부여하여 코드의 가독성을 높임
- 컴파일 시 자동 매핑: 별도의 값 할당 없이 자동으로 숫자 값으로 매핑
- 미리 정의된 상수 값만 사용할 수 있어 타입 안정성이 높음
- 변경될 일이 적은 상수들에 사용

#### 객체 리터럴

- 키-값 쌍으로 구성된 객체를 직접 생성하는 방식
- const / let 키워드를 사용하여 정의하며, 다양한 데이터 타입을 가질 수 있음
- enum보다 유연한 구조: enum과 달리 키에 다양한 타입의 값을 할당 가능 (enum은 string과 number만 가능)
- 런타임 유연성: 필요에 따라 객체의 속성을 추가, 수정, 삭제하는 등 런타임에 더 유연하게 다룰 수 있음
- 다목적 사용: 상수 그룹화 외에도 데이터 구조, 설정 객체 등 다양한 용도로 활용

### 사용 예

#### enum을 쓰면 좋은 경우

- 간단한 상수 값을 그룹화해서 관리를 할 때 적합
- 상수 값이기 때문에 **각 멤버의 값이 변하면 안된다는 조건**이 있음

#### 객체 리터럴을 쓰면 좋은 경우

- **멤버의 값이나 데이터 타입을 맘대로 변경**할 수 있을 때
- 복잡한 구조와 다양한 데이터 타입을 사용해야 할 때는 객체 리터럴을 사용

```typescript
// enum
enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}

enum OrderStatus {
  PENDING, // = 0
  PROCESSING, // = 1
  COMPLETED, // = 2
  CANCELLED, // = 3
}

function handleUserAction(role: UserRole, order: OrderStatus): void {
  if (role === UserRole.ADMIN) {
    console.log("관리자 권한으로 작업을 수행합니다.");
  } else if (role === UserRole.EDITOR) {
    console.log("편집자 권한으로 작업을 수행합니다.");
  } else {
    console.log("일반 사용자 권한으로 작업을 수행합니다.");
  }

  switch (order) {
    case OrderStatus.PENDING:
      console.log("주문이 대기 중입니다.");
      break;
    case OrderStatus.COMPLETED:
      console.log("주문이 완료되었습니다.");
      break;
    default:
      console.log("주문 상태를 확인해주세요.");
  }
}

// 객체 리터럴
const appConfig = {
  appName: "My Awesome App",
  version: "1.0.0",
  apiEndPoints: {
    users: "/api/users",
    products: "/api/products",
  },
  isActive: true,
  maxUsers: 100,
};

const userProfile = {
  id: "user-123",
  username: "TypeScript_Master",
  email: "ts.master@example.com",
  roles: ["admin", "developer"],
  settings: {
    theme: "dark",
    notification: true,
  },
  greet: function () {
    console.log(`안녕하세요. ${this.username}님!`);
  },
};
console.log(`앱 이름: ${appConfig.appName}, 버전: ${appConfig.version}`); //앱 이름: My Awesome App, 버전: 1.0.0
userProfile.greet(); // 안녕하세요. TypeScript_Master님!
```
