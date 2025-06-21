## branch
- `git branch [branch name]`: 새로운 브랜치 만들기
- `git checkout [branch name]`: 브랜치 이동 
- `git checkout -b [branch name]`: 새로운 브랜치 생성 후 해당 브랜치로 이동
- `git branch -d [branch name]`: 브랜치 삭제
- 병합
  - `git merge [branch1] [branch2]`: 브랜치1을 브랜치2에 병합
  - 또는 `git checkout [branch2]` → `git merge [branch1]`: 브랜치1을 브랜치2에 병합

## 브랜치 이름
- 해당 브랜치의 작업을 바로 알 수 있도록 네이밍
- 개인 별 브랜치 사용은 지양 
- 브랜치명에 이슈 번호를 함께 표시하기도 함
- 공백을 허용하지 않기 때문에 하이픈 `-`으로 연결
- 커밋 메시지에서 사용한 분류 그대로 사용
- 협업 시 팀과의 통일성 유지가 중요