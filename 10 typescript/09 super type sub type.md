## 타입은 집합

- 타입: 동일한 속성, 특징을 갖는 여러 개의 값을 모아둔 집합
- e.g. number literal 타입 (서브 타입)은 넘버 타입(슈퍼 타입)의 부분 집합
- 타입 호환성: 어떤 타입을 다른 집합으로 취급해도 괜찮은지 판단하는 것
  - 넘버 리터럴 타입을 넘버 타입으로 취급하는 것은 허용
  - 넘버 타입을 넘버 리터럴 타입으로 취급하는 것은 불가능

```ts
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; //🙆‍♀️ 업캐스팅: 모든 상황에 가능
num2 = num1; //🙅‍♀️ 다운캐스팅: 대부분의 상황에 불가능
```

<br/>

## 슈퍼 타입 / 서브 타입

- 서브 타입
  - 두 개의 타입 A와 B가 있고 B가 A의 서브타입이면 A가 필요한 곳에는 어디든 B를 안전하게 사용할 수 있다.
- 슈퍼 타입
  - 두 개의 타입 A와 B가 있고 B가 A의 슈퍼타입이면 B가 필요한 곳에는 어디든 A를 안전하게 사용할 수 있다.
  - any는 모든 데이터 타입의 슈퍼 타입
- 서브 타입 -> 슈퍼 타입으로 변환: upcasting (implicit)
- 슈퍼 타입 -> 서브 타입으로 변환: downcasting (explicit)

```ts
//upcasting
class Animal {
  eat() {
    console.log("먹는다");
  }
}

class Dog extends Animal {
  name: string;
  constructor(public inputName: string) {
    super();
    this.name = inputName;
  }
}

// upcasting
let dog: Dog = new Dog("또순이");
let animal: Animal = dog;

animal.eat(); // 먹는다

// downcasting
let animal1: Animal;
animal1 = new Dog("또순이");
// let realDog: Dog = animal1; 🙅‍♀️ 안전하지 않음
// animal1.eat();

let realDog: Dog = animal1 as Dog;
animal1.eat(); //먹는다
```
