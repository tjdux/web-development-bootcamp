## Map
- 모든 자료형을 키로 사용할 수 있는 객체 
- 입력된 순서대로 정렬 (순서 보장) (cf. 객체는 순서 보장 ❌)
```javascript
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(1, 'numberKey');
myMap.set(true, 'boolKey');

console.log(myMap); 
//Map(3) {'name' => 'Alice', 1 => 'numberKey', true => 'boolKey'}
console.log(myMap.get('name')); // Alice
console.log(myMap.get(1)); // numberKey
console.log(myMap.has(true)); // true
console.log(myMap.size); // 3
```
```javascript
const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for (const key of myMap.keys()){
  console.log(key); // one two three
}

for (const value of myMap.values()){
  console.log(value); // 1 2 3
}

for (const [key, value] of myMap.entries()){
  console.log(`${key}: ${value}`)
}
```
<br>

## Set
- 중복이 없는 유일한 값들의 집합
- 삽입 순서를 기억하며, 반복이 가능
```javascript
const mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // 중복 -> 무시

console.log(mySet.has('apple')); // true
console.log(mySet.size); // 2
```
```javascript
const fruits = new Set(['apple', 'banana', 'cherry']);

for (const fruit of fruits){
  console.log(fruit); // apple banana cherry
}
```
- 구조 분해 할당이 필요 없는 단순한 값 반복 시 set이 매우 유용