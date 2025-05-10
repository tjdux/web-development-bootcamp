// 1️⃣
const arr = [];
for (let i = 1; i <= 100; i++){
  arr.push(i);
}
console.log(arr);

let sum = 0;
for (let i = 0; i < arr.length; i++){
  sum += arr[i];
}
console.log(sum);

sum = 0;
for (let num of arr){
  sum += num;
}
console.log(sum);

sum = 0;
arr.forEach(val => sum += val);
console.log(sum);

// 2️⃣
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const same = fruits1.filter(val => fruits2.includes(val));
console.log(same);

const diff = fruits1.filter(val => !fruits2.includes(val));
console.log(diff);

// 3️⃣
const day = new Date().getDay();
const res = day === 6 || day === 0 ? "주말" : "평일";
console.log(res);

// 4️⃣
console.log(Math.floor(Math.random() * 11));