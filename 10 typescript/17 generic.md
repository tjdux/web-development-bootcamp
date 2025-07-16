## 제너릭 (Generic)

- 프로그래밍을 하면서 다양한 데이터를 다루게 되는데, 이 데이터들을 안정적으로 처리하기 위한 타입
- 어떤 함수나 클래스가 여러 타입을 유연하게 받아들일 수 있어야 할 때 필요
- any를 사용하면 모든 타입을 받을 수 있지만, 타입스크립트의 가장 큰 장점인 정적 타입 검사가 없어짐
- 제너릭은 타입을 매개변수처럼 사용하는 문법
- 마치 함수의 인자처럼, 나중에 타입을 넘길 수 있는 유연한 방식

```ts
// 제너릭 함수: 함수의 인수에 따라 반환값의 타입을 가변적으로 변경 가능
function identity<T>(value: T): T {
  return value;
}

let num = identity(10); // let num: number
let bool = identity(true); // let bool: boolean
let str = identity("string"); //let str: string
let arr = identity([1, 2, 3]); //let arr: number[]
let arr1 = identity<[number, number, number]>([1, 2, 3]); //let arr1: [number, number, number]
```

- `<T>`: 타입 변수 (type variable)
- `identity<number>(123)` -> `T`는 `number`
- `identity<string>("hello")` -> `T`는 `string`
- 제너릭은 유연성 (재사용성)과 타입 안정성을 모두 챙길 수 있는 도구
  <br/>

## 타입 변수 응용하기

```ts
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
```

```ts
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); //let num: number
let str = returnFirstValue(["hello", "myname"]); //let str: string
let val = returnFirstValue([1, "hello", "myname"]); //let val: number
```

```ts
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let val1 = getLength([1, 2, 3]); //3
let val2 = getLength("12345"); //5
let val3 = getLength({ length: 10 }); //10
// 🙅‍♀️
// let val4 = getLength(10);
```

<br/>

## `map`, `forEach` 메서드 구현

### `map`

```ts
function map<T, U>(arr: T[], callback: (item: T) => U) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]));
  }

  return res;
}

map(arr, (val) => val * 2); //(parameter) val: number
map(["hi", "hello"], (val) => val.toUpperCase()); //(parameter) val: string
map(["hi", "hello"], (val) => parseInt(val));
```

### `forEach`

```ts
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (val) => console.log(val.toFixed())); //(parameter) val: number
forEach(["123", "456"], (val) => val); //(parameter) val: string
```

<br/>

## 제네릭 인터페이스

```ts
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 🌠 타입 변수에 할당할 타입을 함께 명시!
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니처 + 제네릭 인터페이스
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};
```

```ts
// 💡 제네릭 인터페이스 활용 예시
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 학생만 쓸 수 있는 함수
function goToSchool(user: User<Student>) {
  user.profile; //(property) User<Student>.profile: Student

  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
  name: "박서연",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "hufs",
  },
};

goToSchool(studentUser);
// 🙅‍♀️
// goToSchool(developerUser);
```

<br/>

## 제네릭 타입 별칭

```ts
type Map<V> = {
  [key: string]: V;
};

let stringMap: Map<string> = {
  key: "hello",
};
```

<br/>

## 제네릭 클래스

```ts
class List<T> {
  constructor(public List: T[]) {}

  push(data: T) {
    this.List.push(data);
  }

  pop() {
    return this.List.pop();
  }

  print() {
    console.log(this.List);
  }
}
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); //[ 1, 2, 4 ]

const stringList = new List(["1", "2"]);
stringList.pop();
stringList.push("4");
stringList.print(); // [ '1', '4' ]
```

<br/>

## 제네릭과 프로미스

- 비동기 처리 성공 시의 결과 값의 타입을 명시

```ts
const promise = new Promise<number>((resolve, reject) => {
  setTimeOut(() => {
    resolve(20);
    //reject("실패!")
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); //(parameter) response: number
});

promise.reject((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});
```

```ts
// 프로미스를 반환하는 함수
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시물 제목",
        content: "게시물 내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
```
