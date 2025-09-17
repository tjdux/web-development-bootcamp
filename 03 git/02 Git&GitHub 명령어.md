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

## 버전이 되기까지의 세 개의 공간

![스크린샷 2025-05-05 220629](https://github.com/user-attachments/assets/66ad1950-5efe-4181-b9be-da710d6bcc96)

### working directory

- 코드 작업을 하는 공간
- 파일들이 생성 / 수정 / 삭제되는 공간
- 변경 사항이 생기는 공간
- working directory의 모든 변경 사항을 버전으로 만들 필요는 없음 (e.g. 테스트용, 실수, ...)
- ➡️ 변경사항들 중 다음 버전이 될 파일들을 선별해서 선별된 파일들을 버전으로 만들기!

### staging area

- **버전이 될 후보들**이 올라오는 공간
- working directory에서 선별

### repository

- 버전들이 저장되어 있는 공간
- local repository를 remote repository로 `push`하면 모든 버전들의 내역들 (지금까지의 모든 변경사항)이 저장됨  
  <br/>

## Git/Github 명령어

### push

- `git init`
  - 현재 폴더를 Git 저장소로 초기화
  - .git이라는 숨겨진 폴더 생성
  - 초기화한 폴더부터 관리
- `git add <파일명>` 또는 `git add .`
  - working directory → staging area: 변경된 파일을 스테이징 영역 (Stage)에 추가
  - 아직 저장 (commit은 아님)
- `git commit -m "commit message"`
  - staging area → repository: 변경된 부분 저장 (커밋)
  - working directory → `git add` → staging area → `git commit` → repository
  - `git commit -am "commit message"`: `add`와 `commit` 동시에 가능 (한 번이라도 commit을 한 파일에 대해서만 가능)
- `git status`
  - 현재 작업 디렉토리의 상태
  - untracked files: 버전 관리가 되어있지 않은 파일
- `git log`
  - 커밋 히스토리를 시간 순으로 출력
- `git remote add origin <주소>`
  - 원격 저장소를 origin이라는 이름으로 등록
  - 로컬 저장소에 원격 저장소를 등록
- `git remote remove origin`
  - 원격 저장소(remote repository) 지우기
- `git remote -v `
  - 원격 저장소(remote repository) 목록 확인
- `git push origin <branch>`
  - 로컬 저장소의 커밋 내용을 원격 저장소(GitHub)로 업로드
- .gitignore: 올리면 안되는 파일에 대한 정보를 담고 있는 파일

### clone

- 로컬에 복사본 만들기
- 깃헙에 연결 ❌, 깃헙의 코드에 영향 ❌
- `git clone <주소>`

### pull

- 깃헙에 연결되어 있음

### `git diff`

- 변경 내역들끼리의 비교
- `git diff <이 commit에 비해> <이 commit은 무엇이 달라졌는가?>`
- `git diff <비교 대상 branch> <기준 branch>`: branch 간 비교
- `git diff <비교대상 branch> origin/<branch 이름>`: branch와 원격 저장소의 branch와 비교
- `git diff HEAD HEAD^`: 가장 최근 commit과 그 이전 commit간의 변경 내역
- `git diff HEAD`: (커밋되지 않은) 수정된 내용과 가장 최근 commit과 비교

### 되돌리기

#### `git reset`

- 현재 브랜치의 HEAD(커밋 포인터)를 이전 커밋으로 이동시키고
- 어디까지 작업 내용을 되돌릴지 선택하는 명령어
- `HEAD`: 현재 브랜치의 가장 최근 커밋 (현재 커밋)
- `^`: 하나 전 (e.g. `HEAD^^`: 가장 최근 버전에서 두 개 전)

##### 옵션별 차이

| 명령어                    | HEAD 이동 | Staging Area 변경 | Working Directory 변경 | 설명                                                   |
| ------------------------- | --------- | ----------------- | ---------------------- | ------------------------------------------------------ |
| `git reset --soft HEAD^`  | ✅        | ❌ 유지됨         | ❌ 유지됨              | 커밋만 취소, staged 상태 그대로 유지                   |
| `git reset --mixed HEAD^` | ✅        | ✅ 초기화         | ❌ 유지됨              | 커밋과 staging만 초기화, 코드는 그대로                 |
| `git reset --hard HEAD^`  | ✅        | ✅ 초기화         | ✅ 초기화              | 커밋, staging, 코드까지 전부 초기화 (복구 어려움 주의) |

- `git reset --soft HEAD^`
  - 가장 최근 커밋을 없던 걸로 하고
  - 변경된 파일은 staging area에 그대로 남겨둠
  - 주로 커밋 메시지 실수 등을 고칠 때 유용
- `git reset --mixed HEAD^`
  - 가장 최근 커밋을 취소하고
  - staging area는 비우지만
  - 코드 자체는 남겨둠 (working directory는 그대로)
  - 실수로 `git add`한 파일을 빼고 싶을 때
- `git reset --hard HEAD^`
  - 커밋, staged, working directory까지 모두 초기화
  - 마지막 커밋 이후 작업 모두 날아감
  - 복구가 어렵기 때문에 정말 필요할 때만 사용하기

#### `git revert`

- `git revert <되돌리고 싶은 commit>`
- `git reset`과의 차이
  - `git reset`
    - 되돌린 버전 이후의 버전들이 모두 사라짐
    - 과거 자체를 바꾸는 명령어
    - `revert`보다 commit log를 깔끔하게 유지해주며 commit을 되돌리는 방법
  - `git revert`
    - 되돌린 버전 이후의 버전들은 모두 유지되고, revert되었다는 사실을 담은 commit만 새로 추가됨
    - 과거를 변경시켰다는 새로운 commit으로써 새로운 commit을 만드는 명령어
    - `reset`보다 더 안전하게 commit을 되돌리는 방법

### 브랜치 삭제

- 삭제하려는 브랜치 밖에서 진행
- `git branch -D [branchname]`: 로컬에 있는 브랜치 삭제
- `git push origin --delete [branchname]`: 원격에 있는 브랜치 삭제

### 여러 개의 local에서 하나의 브랜치에 이어서 작업하기

- 상황: a 브랜치에서 로컬1로 임의의 작업 후 add => commit => push (아직 브랜치의 작업이 종료되지 않아서) / 로컬 2에서 a 브랜치의 작업을 이어서 해야하는 경우
  - 로컬 1에서 브랜치 작업이 종료되어 pr merge 한 경우는 해당되지 않음
- 해결방법
  - 로컬2에서 원격 브랜치를 가져와 해당 브랜치로 이동
    - `git checkout -t origin [branchname]` 또는 `git switch -t origin [branchname]`
  - 추가 작업을 진행한 후에 add => commit => push해서 작업을 종료
