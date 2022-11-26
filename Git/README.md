# 📒 Git 명령어 및 용어정리

## 🌈 명령어
<span style="color:skyblue">**git 사용자 정보 등록 닉네임 입력**</span>
```
git config --global user.name "Leutbing"
```
<span style="color:skyblue">**이메일 입력**</span>
```
git config --global user.email spdhsrnvl123@naver.com
```
<span style="color:skyblue">**현재 위치에서 지역 저장소를 생성**</span>
- .git이라는 숨겨진 폴더가 만들어진다.
```
git init
```
<span style="color:skyblue">**변경된 파일 확인**</span>
```
git status
```
<span style="color:skyblue">**[파일명.확장자명]을 스테이지에 올림**</span>
```
git add [파일명.확장자명]
```
<span style="color:skyblue">**커밋하기**</span>
```
git commit -m "커밋 메시지"
```
<span style="color:skyblue">**생성한 커밋 보기**</span>
```
git log
```
<span style="color:skyblue">**푸시하기**</span>
```
git push [remote name] [branch name]
```
<span style="color:skyblue">**원격 저장소 추가**</span>
- 원격 저장소 추가는 git remote add <이름> <주소> 명령어로 추가할 수 있다.
```
git remote add origin https://github.com/아이디/이름.git
```
<span style="color:skyblue">**원격 저장소 확인**</span>
- git remote 명령어를 사용하면 연결된 원격 저장소를 확인할 수 있다.<br />
- 등록된 원격 저장소가 없다면 아무 값도 출력되 않는다.
```
git remote
```
<span style="color:skyblue">**원격 저장소 더 자세한 정보 확인**</span>
```
git remote show [remote name]
```
<span style="color:skyblue">**원격 저장소 이름 변경하기**</span>
```
git remote rename [existing remote name] [change remote name]
```
<span style="color:skyblue">**원격 저장소 삭제**</span>
```
git remote rm [branch name]
```
<span style="color:skyblue">**브랜치 확인**</span>
```
git branch
```
<span style="color:skyblue">**브랜치로 이동**</span>
```
git checkout [branch name]
```
<span style="color:skyblue">**브랜치 추가**</span>
```
git branch [branch name]
```
<span style="color:skyblue">**브랜치 삭제**</span>
```
git branch -d [branch name]
```
<span style="color:skyblue">**원격 저장소의 커밋을 지역 저장소로 가져옴**</span>
```
git pull [remote name][branch name]
```
<span style="color:skyblue">**원격 저장소의 커밋을 가져오기만 하고 merge하지 않는다**</span>
```
git fetch
```
<hr />

## 🚀 브랜치(Branch)
소프트웨어를 개발할 때에 개발자들은 동일한 소스코드를 함께 공유하고 다루게 된다.<br />동일한 소스코드 위에서 어떤 개발자는 버그를 수정하기도 하고 또 다른 개발자는 새로운 기능을 만들어 내기도 한다. 이와 같이 여러 사람이 동일한 소스코드를 기반으로 서로 다른 작업을 할 때에는 각각 서로 다른 버전의 코드가 만들어 질 수 밖에 없다.<br >

📖 해결방법<br />
여러 개발자들이 동시에 다양한 작업을 할 수 있게 만들어 주는 기능인 브랜치(Branch)를 사용하면 된다.

### 🪄브랜치(Branch)란
- <span style="color:red">**독립적으로 어떤 작업을 진행하기 위한 개념이다.**</span>
- <span style="color:red">**각자 독립적인 작업 영역(저장소) 안에서 마음대로 소스코드를 변경할 수 있다.**</span>
    - 분리된 작업 영역에서 변경된 내용은 나중에 원래의 버전과 비교해서 하나의 새로운 버전으로 만들어 낼 수 있다.
- 필요에 의해 만들어지는 각각의 브랜치는 다른 브랜치의 영향을 받지 않기 때문에, 여러 작업을 동시에 진행할 수 있다.

**추가적으로**<br />
만들어진 브랜치는 다른 브랜치와 병합(Merge)함으로써, 작업한 내용을 다시 새로운 하나의 브랜치로 모을 수 있다.<br />
여러 명이서 동시에 작업을 할 때에는 다른 사람의 작업에 영향을 주거나 받지 않도록, 먼저 메인 브랜치에서 자신의 작업 전용 브랜치를 만든다. 그리고 각자 작업을 진행한 후, 작업이 끝난 사람은 메인 브랜치에 자신의 브랜치의 변경 사항을 적용한다. 이렇게 함으로써 다른 사람의 작업에 영향을 받지 않고 독립적으로 특정 작업을 수행하고 그 결과를 하나로 모아 나가게 된다. 이러한 방식으로 작업할 경우 '작업 단위', 즉 브랜치로 그 작업의 기록을 중간 중간에 남기게 되므로 문제가 발생했을 경우 원인이 되는 작업을 찾아내거나 그에 따른 대책을 세우기 쉬어진다.
![](images/branch.png)

### 🪄master 브랜치
저장소를 처음 만들면, Git은 바로 'master'라는 이름의 브랜치를 만들어 둔다. 이 새로운 저장소에 새로운 파일을 추가 한다거나 추가한 파일의 내용을 변경하여 그 내용을 저장(커밋,Commit)하는 것은 모두 'master'라는 이름의 브랜치를 통해 처리할 수 있는 일이 된다.<br />
'master'가 아닌 또 다른 새로운 브랜치를 만들어서 '이제부터 이 브랜치를 사용할거야!'라고 선언(체크아웃,checkout)하지 않는 이상, 이 때의 모든 작업은 'master' 브랜치에서 이루어 진다.
![](images/masterBranch.png)

https://backlog.com/git-tutorial/kr/stepup/stepup1_1.html

<hr />

## 🪄Pull Request
내가 수정한 코드가 있으니 내 branch를 가져가 검토 후 병합 해주라고 요청하는 것이다. PR을 통해 코드 충돌을 최소화 할 수 있고 Push 권한이 없는 오픈 소스 프로젝트에 기여할 때 많이 사용한다.

![Pull Request image](https://www.testingdocs.com/wp-content/uploads/Pull-Request.png)

<hr />

## ✏️ 간단 용어 정리
### Fork : 레파지토리를 원격저장소에 복사
### Clone : 레파지토리를 로컬저장소에 복사
### 원격저장소 : 원격저장소란 인터넷이나 네트워크 어딘가에 있는 저장소이다.

<hr />

## ❗️Git Error 모음

### 📌 정방향이 불가능하므로, 중지합니다.
발생 원인 코드 : `git pull origin master`

상황 : 노트북을 맥북으로 교체하면서 깃허브에 있는 레파지토리들을 맥북에 클론하여 클론한 로컬 프로젝트를 강제로 pull을 하여 로컬저장소와 원격저장소를 이어주었다. 하지만, 로컬저장소에서 커밋하고 원격저장소에 정상적으로 push가 가능하지만 원격 저장소에서는 커밋 시 에는 로컬저장소에서 pull을 하면 에러가 발생한다.

해결방법 : 

https://velog.io/@roong-ra/Git-에러-Fatal-정방향이-불가능하므로-중지합니다

#### git rebase란?
https://seosh817.tistory.com/240

#### git pull 이란?
https://backlog.com/git-tutorial/kr/stepup/stepup3_1.html

#### git clone 후 다시 git push하기
https://oddcode.tistory.com/99

#### git 원격 master branch 강제 pull 하기
https://soulmatt.tistory.com/entry/git-원격-master-branch-강제-pull-하기
