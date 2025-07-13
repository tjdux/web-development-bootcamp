## 타입 가드

- ts는 코드를 실행하기 전에 타입 오류를 잡는 강력한 기능을 제공하지만, 떄로는 런타임에 변수의 실제 타입을 확인하고 싶을 떄가 있음
- 이 때 사용하는 것이 타입 가드
- 타입 가드의 역할
  - 특정 스코프 내에서 변수의 타입을 좁히는 (narrowing) 역할
  - 해당 타입의 속성이나 메서드를 안전하게 사용할 수 있도록 도움

### `typeof`

- 원시 타입(string, number, boolean, symbol, bigint, undefined)을 체크할 때 사용

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

### `instanceof`

- 특정 클래스의 인스턴스인지 확인할 때 사용

```typescript
class Car {
  drive() {
    console.log("자동차가 운전됩니다.");
  }
}

class Bicycle {
  pedal() {
    console.log("자전거 페달을 밟습니다.");
  }
}

function moveVehicle(vehicle: Car | Bicycle) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
}
```

### `in`

- 객체에 특성 속성 (property)이 존재하는지 확인할 때 사용

```typescript
interface Dog {
  bark(): void;
  breed: string;
}

interface Cat {
  meow(): void;
  purr: boolean;
}

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
    console.log(`품종: ${animal.breed}`);
  } else {
    animal.meow();
    console.log(`골골송 여부: ${animal.purr}`);
  }
}

const myDog: Dog = { bark: () => console.log("멍멍"), breed: "🐶" };
const myCat: Cat = { meow: () => console.log("야옹"), purr: true };

makeSound(myDog);
makeSound(myCat);
```

### 사용자 정의 타입 가드

- 개발자가 직접 타입을 좁히는 함수를 정의
- 반환 타입에 parameter is Type 형태의 타입 프레디케이트 (Type Predicate)를 사용

```typescript
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

// animal is Fish => 반환값이 true라면 animal은 Fish 타입
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```
