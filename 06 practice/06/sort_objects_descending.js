// 객체 내림차순 정렬
const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  Drowning: { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  Whiplash: { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  HOT: { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};

const sorted = Object.entries(songDetails).sort((a, b) => b[1]["likes"] - a[1]["likes"]);
console.log(sorted);
// [
//   [ 'HOME SWEET HOME', { artist: 'G-DRAGON', likes: 211539 } ],
//   [ 'Drowning', { artist: 'WOODZ', likes: 189248 } ],
//   [ 'TOO BAD', { artist: 'G-DRAGON', likes: 146178 } ],
//   [ '나는 반딧불', { artist: '황가람', likes: 141198 } ],
//   [ 'Whiplash', { artist: 'aespa', likes: 132606 } ],
//   [ 'REBEL HEART', { artist: 'IVE (아이브)', likes: 98429 } ],
//   [ 'like JENNIE', { artist: '제니', likes: 76168 } ],
//   [ '모르시나요(PROD.로코베리)', { artist: '조째즈', likes: 70040 } ],
//   [ '너에게 닿기를', { artist: '10CM', likes: 58471 } ],
//   [ 'HOT', { artist: 'LE SSERAFIM (르세라핌)', likes: 35001 } ]
// ]