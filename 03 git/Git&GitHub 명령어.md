## 리눅스 명령어
- `pwd`
  - print working directory
  - 현재 작업하는 폴더 경로 출력
- `ls`
  - 현재 위치의 모든 파일 및 폴더 리스트를 보여줌
  - 옵션 `-a`
    - `-` 는 옵션을 넣기 전에 입력
    - `a`는 all 의 약자
    - 숨겨진 폴더, 파일 다 보여줌
- `mkdir <폴더명>`
  - 현재 경로에서 폴더 생성
- `touch <파일명>`
  - 현재 경로에서 파일 생성
- `cd <경로>`
  - 폴더 위치를 이동하기 위해 사용
  - `.`현재 폴더를 의미 / `..`는 상위 폴더 의미
- vi 에디터: `vi test.txt`
  - i: 입력 모드
  - esc + shift + ; : 명령모드
  - w + q: 저장하고 종료하기
<br/>

## Git/Github 명령어
![스크린샷 2025-05-05 220629](https://github.com/user-attachments/assets/66ad1950-5efe-4181-b9be-da710d6bcc96)
### push
- `git init`
  - 현재 폴더를 Git 저장소로 초기화
  - .git이라는 숨겨진 폴더 생성
  - 초기화한 폴더부터 관리 
- `git add <파일명>` 또는 `git add .`
  - 변경된 파일을 스테이징 영역 (Stage)에 추가
  - 아직 저장 (commit은 아님)
- `git commit -m "message"`
  - 변경된 부분 저장 (커밋)
  - working directory → `git add` → staging area → `git commit` → repository
- `git status`
  - 현재 작업 디렉토리의 상태
- `git log`
  - 커밋 히스토리를 시간 순으로 출력
- `git remote add origin <주소>`
  - 원격 저장소를 origin이라는 이름으로 등록
  - 레포지토리의 주소를 연결
- `git remote remove origin`
  - 원격 저장소(remote repository) 지우기
- `git remote -v `
  - 원격 저장소(remote repository) 목록 확인
- `git push`
  - 로컬 저장소의 커밋 내용을 원격 저장소(GitHub)로 업로드
- .gitignore: 올리면 안되는 파일에 대한 정보를 담고 있는 파일
### clone
- 로컬에 복사본 만들기
- 깃헙에 연결 ❌, 깃헙의 코드에 영향 ❌
- `git init` → `git clone <주소>`
### pull
- 깃헙에 연결되어 있음 
