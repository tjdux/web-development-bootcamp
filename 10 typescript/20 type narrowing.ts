/** 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person): void {
  value; //value: string | number
  if (typeof value === "number") {
    console.log(value.toFixed()); //value: number
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); //value: string
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
  // } else if (typeof value === "object"){
  //   console.log(value.getTime()); //null도 object 타입
  // }
}
