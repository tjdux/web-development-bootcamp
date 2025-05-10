// 1️⃣
for (let i = 1; i <= 10000; i++){
  if (i % 13 === 0 && i % 2 === 1){
    console.log(i)
  }
}

const num = Number(prompt("숫자"));
for (let i = 1; i <= num``; i++){
  if (i % 13 === 0 && i % 2 === 1){
    console.log(i)
  }
}

// 2️⃣
for (let i = 2; i <= 9; i++){
  console.log(`=====${i}단=====`)
  for (let j = 1; j <= 9; j++){
    console.log(`${i} * ${j} === ${i * j}`);
  }
}

// 3️⃣
let sum = 0;
for (let i = 0; i <= 100; i++){
  if (i % 2 === 0 || i % 5 === 0){
    sum += i;
  }
}

console.log(sum);