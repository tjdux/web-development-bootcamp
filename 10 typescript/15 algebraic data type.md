## 대수 타입

- 여러 개의 타입을 합성하여 새롭게 만들어낸 타입

### 합집합 타입 (union type)

```ts
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

// 🌠 교집합
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 🙅‍♀️
// Dog와 Person은 서로의 슈퍼타입, 서브타입도 아닌 교집합을 가지고 있는 타입
// union4는 합집합의 밖에 있음
// let union4: Union1 = {
//   name: "",
// };
```

### 교집합 타입 (intersection type)

```ts
let variable: number & string; // -> never

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
```
