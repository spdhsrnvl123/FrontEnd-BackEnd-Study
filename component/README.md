# React
### 유저 인터페이스를 만드는데 사용할 수 있는 자바스크립트 라이브러리
-> SPA(Single Page Application)구현을 위해서 사용하는 경우가 많습니다.
이 목적으로 만들어진 라이브러리로는 angular.js 나 veu.js 도 있습니다.
=> component
특정 부분의 모양을 결정하는 선언체
템플릿 엔진은 데이터 셋 과 HTML을 가지고 HTML을 재생성해서 보여주는 용도로만 사용하지만 컴포넌트는 많은 기능을 내장한 재사용 가능한 개체입니다.

### 최대 장점
- 출력 속도가 빠름 - Virtual DOM 을 이용<br />
❗️DOM(Document Object Model)은 자바스크립트 내장 객체보다 처리 속도가 느림
- React에서는 Virtual DOM을 이용해서 출력할 내용을 메모리에 만든 후 데이터가 변경이 되면 Virtual DOM에 적용하고 실제 DOM과 비교를 한 후 변경되는 부분만 수정해서 출력하는 형태로 동작해서 빠르게 출력을 합니다.<br />
-> 이 방식은 게임 엔진이 화면 출력을 만드는 방식이다.
- 템플릿 엔진은 데이터가 변경이 되면 변경된 데이터와 HTML을 가지고 다시 화면을 만들어서 출력을 합니다.

=> MVC(Model View Controller), MVVM(Model View ViewModel), MVW(Model View Whatever), MVP(Model View Presentation) 등의 구조를 위한 프레임워크와 다른 오로지 View 만들 위한 라이브러리

### 📌 React를 사용할 때는
react 만으로는 애플리케이션을 만들 수 없기 때문에 화면을만드는 것을 제외한 기능은 직접 구현을 해야합니다. <br />
❗️React 단점

ajax 처리를 위한 axios 나 fetch API 와 같은 데이터를 가져오기 위한 라이브러리와 redux 와 같은 라이브러리들을 같이 학습하게 됩니다.

## 개발 환경 설정
1) node 설치
2) npm : node 의 패키지 관리자로 node를 설치하면 자동으로 설치가 됩니다.
3) yarn<br />
  -> npm 을 개선한 패키지 관리자
  -> npm 보다 속도가 빠르고 더 나은 캐싱 시스템을 사용
  -> inatll : npm install yarn 인데 yarn 명령을 모든 곳에서 사용할 수 있도록 하기 위해서 전역으로 설치<br />
  npm install -g yarn 또는 npm install --location = global yarn
  =>Mac이나 Linux는 관리자 모드가 아니면 global로 설치가 안되므로 Mac 이나 Linux 인 경우는 앞에 sudo를 붙이고 해주어야 합니다.
    sudo npm install --locaiton = global yarn

  -> 설치 확인 : yarn --version
4) webpack
=>프로젝트에 사용된 파일을 분석해서 웹 문서 파일로 변환해주는 도구
=>웹 브라우저는 js 와 css 그리고 html을 해석할 수 있는데 프레임워크나 라이브러를 사용하다보면 이러한 확장자 이외의 파일을 만들어서 사용하는 경우가 있는데 이 경우 webpack 이 css 나 html로 변환해 줍니다.

5) babel
=> 대다수의 브라우저들은 ES6(ECMA 2015) 버전의 자바스크립트 문법까지는 적용할 수 있는 그 이상 버전의 문법은 이해하지 못하는 경우가 있을 수 있어서 babel이 이러한 코드들을 ES6 이하의 문법으로 변환해주는 <span style = "color:red">Trans Compiler</span>

6)IDE<br />
=> Visual Studio Code 와 같은 IDE 필요<br />
여러가지 확장 프로그램 설치

7)형상 관리 도구<br />
=>Git이 대표적인 형상 관리 도구

8)디버깅을 위한 도구<br />
=> 크롬 확장 프로그램 -> React Developer Tools

9)react 프로젝트를 만들기 위한 애플리케이션 설치<br />
yarn global add create-react-app

3. React Application 생성 및 실행<br />
1)생성 create-react-app 애플리케이션이름
=> 기본 구조가 만들어져서 나옴<br />
=> entry point 는 App.js

2)실행 : yarn start<br />
=> App.js를 읽어서 실행하고 브라우저를 자동으로 실행시켜 줍니다.<br />
기본 포트는 3000번

4. 프로젝트 생성 및 실행
   1)프로젝트 생성
   yarn create-react-app 애플리케이션이름(Windows에서는 power shell 에서 yarn이 막혀 있어서 Set-ExecutionPolicy RemoteSigned 명령을 수행한 후 작업)


   npx create-react-app 애플리케이션이름
   => 만들어지는데 시간이 조금 걸림
   => 라이브러리 설치할 때도 yarn add로 안되면 npm install 로 하면 됩니다.


   2)프로젝트 실행
   yarn start
   npm start

   => 실행을 하면 localhost:3000 번의 URL을 가지고 웹 브라우저가 실행되고 화면에 react 로고가 출력됩니다.
   => 실행이 될 때 모든 파일들을 읽어서 번들러를 이용해서 실행 가능한 자바스크립트 파일을 만들어서 실행
   -이 때 webpack과 babel이 동작
   📎번들러란?

   => 소스코드를 수정하면 자동으로 번들러가 해석을 해서 화면에 적용
   
### 문법
5. JSX<br />
=> JavaScript XML의 약자로 JavaScript에 XML을 추가한 확장형 문법으로 react 프로젝트에서 사용하는 문법
=> 브라우저에서 실행할 때 Babel이 자바스크립트 코드로 변환을 해서 실행
1)장점
=> 보고 쉽고 익숙
=>코드 작성 중 오류가 있으면 Babel이 코드를 변환하는 과정에서 이를 감지
=>HTML태그와 Component를 혼용해서 개발하는 것이 가능

2)규칙
=> 주석
{/* 주석 */}
=> //나 /**/도 가능하지만 이렇게 주석을 만드는 경우 />는 다음 줄에 나와야 합니다.
=> 반드시 하나의 부모 요소로 시작해야 합니다.
루트는 반드시 하나여야 합니다.

=>태그는 반드시 닫아야 합니다.
닫는 태그를 사용하던가 아니면 빈 태그처럼 <태그 />으로 처리를 해주어야 합니다.

=>자바스크립트 내용을 출력하고자 하는 경우는 {} 안에 표현

=> if는 사용할 수 없지만 삼항 연사자 사용 가능

=> 스타일을 적용할 때는 객체 형식으로 설정
문자열로 설정하지 않음
모든 스타일 속성은 camel case를 이용
스타일에서 - 가 들어가는 경우 이름이 변경됩니다.
background-color => backgroundColor

class 속성 대신에 className 이라는 속성 이용

6. 개발을 도와주는 도구
1) 코드 작성 도중 에러를 확인할 수 있는 도구 : ESLint
  에러가 보이지 않을 때는 [View - 보기] - [Problem - 문제] 메뉴를 클릭

2)코드 포맷 설정 - prettier
=> 들여쓰기 나 문자열 상수의 작은 따옴표 나 큰 따옴표를 일정하게 또는 ; 삽입 등을 자동으로 해줌

--- 

자바스크립트는 boolean 이외의 데이터도 논리 연산(||,&&)이 가능
0이 아닌 숫자 나 null 이나 undefined가 아니면 true로 간주
연산의 결과는 boolean이 아닌니아.
연산하는 데이터의 자료형으로 리턴됩니다.

1 && 3 : 3

0 && 3 : 

condition && "참"

함수를 만드는 방법
```js
function 이름(매개변수){
  내용;
}
```

```js
let 이나 const 이름 = function(매개변수){
  내용
}

// 추천
let 이나 const 이름 = (매개변수)=>{
  내용
}
```

화살표 함수에서 매개변수가 1개이면 () 생략이 가능

(e) => { 내용; }
e => { 내용; }

화살표 함수에서 내용이 한 줄이면 {} 생략 가능
(e) => { alert(e); }

e => alert(e)

화살표 함수에서 return은 return 을 생략하면 마지막 문장의 결과가 리턴됩니다.

(a,b) => {return a+b;}

(a,b) => {a+b}
---

7. Component
1) 개념
=> 화면을 구성하는 재사용 가능한 모듈
=> View는 전체 화면을 의미하는 경우가 많고 Component는 전체 화면의 일부분을 의미합니다.
View는 전체 화면을 만드는 개념이라서 재사용성이 떨어짐<br />
=> 확장자는 이전에는 js를 많이 사용했지만 최근에는 명확하게 구분하기 위해서 jsx 나 tsx(TypeScript 적용)를 사용하는 경우가 많습니다.

2) 만드는 방식<br />
=> 클래스 형 컴포넌트 - 초창기<br />
=> 함수형 컴포넌트 - 최근

3) 클래스 형 컴포넌트
=> 생성
class 컴포넌트이름 extends Component{
  render(){
      출력할 내용 리턴
  }
}
=> 장점 
Life Cycle 을 이용하는 것이 가능 - 함수는 호출하면 안의 내용을 수행하고 호출한 곳으로 리턴
인스턴스는 <span style="color:red">한 번 만들어지면 소멸시키기 전까지 존재하고</span> 생성될 때 생성자와 같은 메서드가 호출되기 때문에 수명주기에 따른 작업이 수월합니다.

내부에 메서드 구현 가능


=> 컴포넌트를 별도의 파일로 만들고 App.js에서 사용하기
컴포넌트를 만들 파일을 만들고 작성 - MyComponent.jsx

=> App.js 수정
