interface VoteOption {
  name: string; //투표 항목
  votes: number; // 득표수
}

function createVoteOption(name: string): VoteOption {
  return {
    name,
    votes: 0,
  };
}

// 투표 함수
function vote(option: VoteOption): void {
  option.votes++;
  console.log(`${option.name}에 투표 완료, 현재 득표수: ${option.votes}`);
}

// 투표수 조회하는 함수
// 입력으로 voteOption []을 받아서 리턴은 없음
// 안에서 모든 투표의 투표수를 콘솔에 출력
function getVoteResults(options: VoteOption[]): void {
  console.log("\n--- 현재 투표 현황 ---");
  options.forEach((option) => console.log(`${option.name}: ${option.votes}`));
}

// 모든 투표의 최고 투표 항목을 찾아 반환하는 함수
// 동점일 경우 첫 번째 항목을 반환
// 진행 중인 투표가 없는 경우, null 반환
// 입력으로 VoteOption[]
function getWinner(options: VoteOption[]): VoteOption | null {
  if (options.length === 0) return null;

  let winner = options[0];

  options.forEach((option) => {
    if (option.votes > winner.votes) {
      winner = option;
    }
  });

  return winner;
}

function main(): void {
  // 투표 항목 생성
  const menuOptions: VoteOption[] = [
    createVoteOption("김치찌개"),
    createVoteOption("된장찌개"),
    createVoteOption("제육볶음"),
    createVoteOption("돈까스"),
  ];

  // 투표 진행
  vote(menuOptions[0]);
  vote(menuOptions[2]);
  vote(menuOptions[0]);
  vote(menuOptions[3]);
  vote(menuOptions[2]);
  vote(menuOptions[0]);

  // 투표수 조회
  getVoteResults(menuOptions);

  // 최종 우승 항목 발표
  const winner = getWinner(menuOptions);
  if (winner) {
    console.log(`\nwinner! ${winner.name}: 총 ${winner.votes} 득표`);
  } else {
    console.log("아직 투표된 항목이 없습니다.");
  }
}

main();
