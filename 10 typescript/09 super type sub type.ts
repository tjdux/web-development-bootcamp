/**슈퍼 타입 / 서브 타입
 * - 서브 타입
 *    - 두 개의 타입 A와 B가 있고 B가 A의 서브타입이면 A가 필요한 곳에는 어디든 B를 안전하게 사용할 수 있다.
 * - 슈퍼 타입
 *    - 두 개의 타입 A와 B가 있고 B가 A의 슈퍼타입이면 B가 필요한 곳에는 어디든 A를 안전하게 사용할 수 있다.
 *    - any는 모든 데이터 타입의 슈퍼 타입
 *
 * 서브 타입 -> 슈퍼 타입으로 변환: upcasting (implicit)
 * 슈퍼 타입 -> 서브 타입으로 변환: downcasting (explicit)
 */

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
