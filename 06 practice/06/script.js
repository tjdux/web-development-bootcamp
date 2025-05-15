const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

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

const latestSongsList = document.querySelector(".latest-songs-list");
const songsInformationList = document.querySelector(".songs-information-list");
const highLikedSongsList = document.querySelector(".high-liked-songs-list");
const sortBtn = document.querySelector(".sort-btn");
const addBtn = document.querySelector(".add-btn");

const titleInput = document.querySelector("#title");
const artistInput = document.querySelector("#artist");
const likesInput = document.querySelector("#likes");

// 1️⃣ 최신 노래 리스트
function showLatestSongs(){
  latestSongsList.innerHTML = ``;
  renderList(latestSongsList, songList)
}

// 2️⃣ 노래 정보 리스트
function showSongsInformation(){
  songsInformationList.innerHTML = ``;
  const songData = Object.entries(songDetails).map(([title, detail]) => [title, detail.artist, detail.likes]);
  renderList(songsInformationList, songData);
}

// 3️⃣ 좋아요 6만 이상 
sortBtn.addEventListener("click", () => {
  const isDefault = sortBtn.classList.toggle("default");
  showHighLikedSongs(isDefault);
  sortBtn.textContent = isDefault ? "내림차순" : "기본 정렬";
})

function showHighLikedSongs(isDefault){
  const highLikedSongs = getHighLikedSongs();
  highLikedSongsList.innerHTML = ``;
  if (!isDefault){
    highLikedSongs.sort((a, b) => b[1]["likes"] - a[1]["likes"]);
  }
  
  const songData = highLikedSongs.map(([title, detail]) => [title, detail.artist, detail.likes])
  renderList(highLikedSongsList, songData);
}

function getHighLikedSongs(){
  return Object.entries(songDetails).filter(song => song[1]["likes"] >= 60000);
}

// 4️⃣ 노래 추가하기
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addSongInformation();
  updateAllLists();
})

function addSongInformation(){
  const title = titleInput.value.trim();
  const artist = artistInput.value.trim();
  const likes = Number(likesInput.value);

  if (!title || !artist || isNaN(likes)) return;

  songDetails[title] = {artist, likes};
  songList.push(title);
  clearInput();
}

function clearInput(){
  titleInput.value = "";
  artistInput.value = "";
  likesInput.value = "";
}

// li 추가
function createSongList(title, artist, likes){
  const li = document.createElement("li");
  if (!artist && !likes){
    li.textContent = `${title}`;
    li.classList = "list-group-item text-center"
    return li;
  }

  li.classList = 'd-flex justify-content-between align-items-center list-group-item';

  li.innerHTML = `
    <div class="ms-2 me-auto">
      <div class="fw-bold">${title}</div>
      ${artist}
    </div>
    <span class="badge text-bg-primary rounded-pill">👍${likes}</span>
  `
  return li;
}

// li container에 추가하기
function renderList(container, songData){
  songData.forEach(song => {
    const li = typeof song === "string" ? createSongList(song) 
                                          :createSongList(song[0], song[1], song[2]);
    container.appendChild(li)
  })
}

// 화면 그리기
function updateAllLists(){
  showLatestSongs();
  showSongsInformation();
  showHighLikedSongs(sortBtn.classList.contains("default"));
}

updateAllLists();