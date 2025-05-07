// 1️⃣ if문을 이용해 사용자가 입력한 수가 짝수인지 아닌지 판단
let num = 19;
let res = num % 2 ? "홀수" : "짝수";
console.log(`1️⃣ ${res}`)

// 2️⃣ 1부터 100까지의 합
res = 0;
for (let i = 1; i <= 100; i++){
  res += i;
}
console.log(`2️⃣ ${res}`)

// 3️⃣ 반복문을 이용한 구구단
// 1단 2단 3단 
// 4단 5단 6단
// 7단 8단 9단
for (let i = 1; i <= 9; i += 3){
  for (let j = 1; j <= 9; j++){
    console.log(`${i} * ${j} = ${i * j}  ${i+1} * ${j} = ${(i+1) * j}  ${i+2} * ${j} = ${(i+2) * j}`);
  }
}

// 4️⃣10개의 점수를 랜덤으로 생성하여 점수의 평균과 최대값 그리고 최소값을 구하는 예제
let avg = 0;
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < 10; i++){
  let num = Math.floor(Math.random() * 101)
  avg += (num / 10)

  if (num < min){
    min = num;
  }

  if (num > max){
    max = num;
  }
}
console.log(`4️⃣ avg = ${avg}, min = ${min}, max = ${max}`);

// 5️⃣일차방정식의 풀이에 대한 예제.
// 남편과 아내의 나이의 합은 75살이고 나이의 곱은 1400이다.
// 아내보다 남편의 나이가 더 많다고 할 때 남편과 아내의 나이는 각 몇 살인지 찾아내는 프로그램을 작성 
// 단, 남편과 아내의 나이는 100살을 넘지 않는다.
for (let h = 0; h < 100; h++){
  for (let w = 0; w < h; w++){
    if (h + w === 75 && h * w === 1400){
      console.log(`5️⃣ 남편: ${h}, 아내: ${w}`);
    }
  }
}

// 6️⃣여자의 자동차는 시속 120Km으로 달리고 있고 남자의 자동차는 시속 180Km로 달리고 있다.
//  여자의 자동차는 현재 출발지점에서 24Km를 진행한 상태이고 남자는 출발지점에서 6Km를 진행한 상태이다.
//  남자는몇 분 뒤에 여자의 자동차를 추월하게 되는지를 알아내는 프로그램을 작성하여라
const manSpeedPerMin = 180 / 60;
const womanSpeedPerMin = 120 / 60;

let manLoc = 0;
let womanLoc = 24 - 6;
let minute = 0;

while (true){
  if (manLoc >= womanLoc){
    console.log(`6️⃣ minute: ${minute}`)
    break;
  }

  manLoc += manSpeedPerMin;
  womanLoc += womanSpeedPerMin;
  minute++
}