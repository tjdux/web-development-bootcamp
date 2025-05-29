```javascript
async function f1() {
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

console.log("1 >>>", f1());

f1().then(function (result) {
  console.log("2 >>>", result);
})

console.log("3 >>>", f2());

f2().then(function (result) {
  console.log("4 >>>", result);
})

const f3 = async () => {
  return 3;
}


// 1 >>> Promise { 1 }
// 3 >>> Promise { <pending> }
// 2 >>> 1
// 4 >>> 1
```
```javascript
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      const fruits = ["사과", "레몬", "수박"];
      resolve(fruits);
      //reject(new Error("알 수 없는 에러"))
    }, 1000)
  })
}

// fetchFruits()
//   .then(function (f) {
//     console.log(f);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })

async function printItems(){
  try{
    const fruits = await fetchFruits();
    return fruits;
  } catch (err) {
    console.log(err)
  }
}
```
```javascript
let product;
let price;

function goMart() {
  console.log('고민');
}

function pickDrink(){
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('고민 끝');
      product = "제로콜라";
      price = 2000;
      reject();
    }, 3000)
  })
}

function pay(){
  console.log(`상품명: ${product}, 가격: ${price}`)
}

function nopay(){
  console.log('금액 부족')
}

async function exec() {
  goMart();
  try {
    await pickDrink();
    pay();
  } catch {
    nopay();
  }
}

exec()
```
```javascript
function call(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(name);
        resolve(name);
      }, 1000)
    })
}


function back() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('back');
        resolve('back');
      }, 1000);
    })
}

function hell() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('callback hell')
      }, 1000)
    })
}

call('kim')
  .then(name => {
    console.log(`${name} 반가워`);
    return back();
  })
  .then(txt => {
    console.log(`${txt}을 실행했구나`);
    return hell();
  })
  .then(msg => {
    console.log(`여기는 ${msg}`)
  })

async function exec(){
  console.log(`${await call('kim')} 반가워`);
  console.log(`${await back()}을 실행했구나`);
  console.log(`여기는 ${await hell()}`)
}

exec()
```