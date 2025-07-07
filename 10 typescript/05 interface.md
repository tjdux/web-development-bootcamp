## 인터페이스

- ts에서 객체의 모양을 정의하는 도구

### 기본 인터페이스 (객체 타입 정의)

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  readonly createdAt: Date;
}

const laptop: Product = {
  id: 101,
  name: "울트라북",
  price: 1500000,
  createdAt: new Date(),
};

const keyBoard: Product = {
  id: 102,
  name: "기계식 키보드",
  price: 120000,
  description: "게이밍에 최적화된 키보드",
  createdAt: new Date(),
};
```

### 함수 타입 인터페이스

```typescript
interface SearchFunction {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunction;

mySearch = function (src: string, sub: string): boolean {
  const result = src.indexOf(sub);
  return result > -1;
};

console.log(mySearch("안녕하세요 typescript", "typescript"));

let anotherSearch: SearchFunction = function (
  text: string,
  keyword: string
): boolean {
  return text.includes(keyword);
};
console.log(anotherSearch("javascript는 재밌어!", "script"));
```

### 인덱싱 기능 인터페이스

- 배열이나 객체처럼 인덱스를 통해 접근할 수 있는 타입의 모양을 정의할 때 사용
- 인덱스 시그니처(`[index: IndexType]: valueType`)를 사용하여 정의하며, IndexType에는 string 또는 number만 할당 가능

```typescript
interface StringArray {
  [index: number]: string;
}
let myArr: StringArray;
myArr = ["Hello", "World"];
console.log(myArr[0]);

interface Dictionary {
  [key: string]: string;
}

let myDictionary: Dictionary = {
  name: "홍길동",
  city: "서울",
};
console.log(myDictionary["name"]);
myDictionary["country"] = "대한민국";
// 🙅‍♀️
// myDictionary["age"] = 30;
```

<br/>

## 인터페이스 상속

- 인터페이스는 extends 키워드를 사용하여 다른 인터페이스의 정의를 상속(확장)받을 수 있음
- 코드의 재사용성을 높이고, 관련된 인터페이스 간의 계층 구조를 명확히 하는 데 도움
- 여러 인터페이스를 동시에 상속받는 것도 가능

```typescript
interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

interface ColoredCircleWithBorder extends Circle {
  borderWidth: number;
  borderColor: string;
}

const myCircle: Circle = {
  color: "red",
  radius: 5,
};

const myComplexCircle: ColoredCircleWithBorder = {
  color: "blue",
  radius: 10,
  borderWidth: 2,
  borderColor: "black",
};
```
