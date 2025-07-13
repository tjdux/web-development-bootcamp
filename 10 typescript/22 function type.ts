// 1️⃣ 함수 타입 정의
function func(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;

// 2️⃣ 함수의 매개변수
// 선택 매개변수는 필수 매개변수 앞에 오면 안됨
function introduce(name = "박서연", age: number, height?: number) {
  console.log(`name: ${name}`);
  if (typeof height === "number") {
    console.log(`height: ${height + 10}`);
  }
}

introduce("박서", 26, 170);
// name: 박서
// height: 180
introduce("박서연", 26);
// name: 박서연

// rest parameter
function getSum(...rest: number[]) {
  return rest.reduce((sum, val) => sum + val, 0);
}

console.log(getSum(1, 2, 3)); // 6

// 3️⃣ 함수 타입 표현식 (function type expression)
type Operation = (a: number, b: number) => number;

const add1: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 4️⃣ 호출 시그니처 (call signature)
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
