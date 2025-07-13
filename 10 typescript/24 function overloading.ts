// 함수 오버로딩
// 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법

// 1️⃣ 함수의 버전들을 알려줘야 함 (오버로드 시그니처)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 2️⃣ 실제 구현부 (구현 시그니처)
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
