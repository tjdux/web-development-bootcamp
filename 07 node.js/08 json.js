const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam"]
}`;
console.log(car)

// 역직렬화: JSON.parse()
// 받은 JSON을 객체로 변환
const obj = JSON.parse(car);
console.log(obj)

// 객체이므로 키를 통해서 값에 접근 가능
console.log(obj.model) //IONIQ 5
console.log(obj.price); //50000000
console.log(obj.hello); //undefined

// 직렬화: JSON.strinfy()
// 객체를 JSON으로 변환 
const json = JSON.stringify(obj);
console.log(json, typeof json)
// {"model":"IONIQ 5","company":"HYUNDAI","price":50000000,"year":2023,"isElectricCar":true,"options":["side mirror","smart sensor","built-in cam"]} string

// string 이므로 키를 통한 값 접근 불가능 
console.log(json.model) // undefined
console.log(json.price); //undefined
console.log(json.hello);  // undefined

// string에 쓸 수 있는 내장 메소드 사용 가능
console.log(json.split(""));
console.log(json.toUpperCase());