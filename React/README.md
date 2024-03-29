# 📝React
### 유저 인터페이스를 만드는데 사용할 수 있는 자바스크립트 라이브러리
- SPA(Single Page Application)구현을 위해서 사용하는 경우가 많습니다.<br />
  이 목적으로 만들어진 라이브러리로는 angular.js 나 veu.js 도 있습니다.<br />
  
  📌SPA(Single Page Application - 전체 화면을 리랜더링하지 않고 변경된 일부분만을 리랜더링 할 수 있는 컴포넌트 기반의 애플리케이션) 구현을 위한 라이브러리
- react를 학습하기 전에 ajax 나 fetch api 또는 axios 와 같은 외부 데이터를 가져올 수 있는 부분을 학습을 해두는 것이 좋습니다.
- component<br />
특정 부분의 모양을 결정하는 선언체
템플릿 엔진은 데이터 셋 과 HTML을 가지고 HTML을 재생성해서 보여주는 용도로만 사용하지만 컴포넌트는 많은 기능을 내장한 재사용 가능한 개체입니다.
- react-native<br />
  스마트 폰 애플리케이션 개발(안드로이드 와 아이폰 개발 동시에 가능)을 위한 자바스크립트 라이브러리
- react의 출력시스템<br />
  Virtural DOM이라는 개념을 사용하는데 메모리 상에 DOM을 생성해서 현재 화면에 출력된 DOM과 비교를 한 후 변경된 부분만 리랜더링 하는 개념으로 동작합니다.


### 🔥최대 장점
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
   yarn : node.js 런타임 환경을 위해서 페이스북이 개발한 패키지 관리 시스템
          -> npm을 이용해서 별도로 설치해야 사용 가능합니다.(npm install yarn 현재 프로젝트에서 밖에 사용을 못하기 때문에 ---> npm install --location=global yarn)

   npx(npm 대신에 실행을 할 수 있도록 만든 보조 도구)
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
=>View(하나의 화면) > Component(Segment - Control을 1개 이상 모아서 만든 논리적인 화면 구성 단위) > Control(작은 부품 하나)
=> View는 전체 화면을 의미하는 경우가 많고 Component는 전체 화면의 일부분을 의미합니다.
View는 전체 화면을 만드는 개념이라서 재사용성이 떨어짐<br />
=> 확장자는 이전에는 js를 많이 사용했지만 최근에는 명확하게 구분하기 위해서 jsx 나 tsx(TypeScript 적용)를 사용하는 경우가 많습니다.

2) 만드는 방식<br />
=> 클래스 형 컴포넌트 - 초창기<br />
-> 클래스로 구성 : Compoent 라는 클래스로부터 상속을 받아서 render 라는 함수에 출력할 내용을 리턴하는 형식으로 생성, 멤버 변수 사용이나 수명 주기 메서드를 사용하는 것이 편리

class 이름 extends Component{
  render(){ return 출력할 내용 }
}
=> 함수형 컴포넌트 - 최근
=> 함수로 구성 : 출력할 내용을 리턴, 클래스로 만드는 것보다는 가볍고 속도가 빠름 최근에는 함수로 구성하는 경우가 많음.

const 이름 = ()=>{
  return (출력할 내용)
}

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

2) 확장자
=>js, jsx(HTML에 사용되는 자바스크립트와 구분하기 위해서),tsx(타입 스크립트 문법을 사용한다는것을 명시하기 위해서)등을 사용

3)만들 때 주의사항
=> 컴포넌트는 Root가 1개 이어야 합니다.
div 나 span 또는 <> 태그로 묶어서 표현합니다.

=> react에서는 데이터 원본을 직접 수정하지 않습니다.
다른 곳에서 넘겨준 데이터는 복제를 해서 수정한 후 다시 대입하는 형태를 취하게 됩니다.


4. props<br />
   => properties의 약자
   => 상위 컴포넌트(포함하고 있는 컴포넌트, 부모 컴포넌트)에서 하위 컴포넌트에게 데이터를 넘겨줄 때 사용하는 개체

   1)넘겨 줄 때
   <컴포넌트 이름 props이름 = 값...>
   => 개수 제한 없음

   2)사용
   => 클래스형 컴포넌트는 this.props.이름으로 사용
   => 함수형 컴포넌트는 모든 props를 하나로 묶어서 홤수의 매개변수로 받음
      함수의 매개변수를 이용해서 사용

   3)props 사용
   => src 디렉토리에 컴포넌트 생성 - MyComponent.jsx
   => 함수형 컴포넌트 안에서 컴포넌트.defaultProps = {props이름:값...}을 이용해서 기본값을 설정할 수 있습니다.
   데이터가 넘어오지 않는 경우 설정되는 값입니다.

6)태그 안의 내용 사용
=> props.children을 이용해서 상위 컴포넌트에서 태그 안에 삽입한 데이터를 읽어낼 수 있습니다.

8)props의 유효성 검사 기능
=> 필수 나 자료형을 설정해서 검사가 가능
=> 화면 출력에는 영향이 없고 스크립트 오류를 발생시켜 검사 창에서만 오류가 발생
=> props 값을 전달할 때 문자열이 아니면 {}로 감싸야 합니다.
기본적으로 XML에서는 태그 안의 속성은 문자열만 가능하기 때문입니다.

5. State
=> props는 상위 컴포넌트에서 하위 컴포넌트에게 데이터를 넘겨주는 개념
하위 컴포넌트는 props는 읽기 전용으로만 사용 가능

1) 개요
=> Component 내부에서 읽고 쓸 수 있는 값을 사용하고자 할 때 사용
=> 기본값을 설정할 수 있으며 setter 메서드를 이용해서 수정하는 것도 가능
=> 클래스형 컴포넌트의 경우 초깃값 설정은 constructor(props) 메서드에서 수행
this.starte = {state 이름 : 값,......}
=>값의 수정은 setState메서드를 이용
this.setState({state이름:값,....})

2) 클래스형 컴포넌트에서의 state 사용
=> StateComponent.jsx 파일을 생성하고 작성

3)생성자 외부 클래스 안에서 초기화 가능
4)State에 함수 전달
=>state도 하나의 속성이고 자바스크립트는 함수도 하나의 데이터이므로 state에 함수를 전달하는 것이 가능
=>한 곳에서만 사용하는 데이터가 있느 경우 로컬의 데이터를 업데이트 하고 업데이트가 끝나면 서버에 업로드를 하는 형태를 만들 때 유용하게 사용할 수 있습니다.
6)useState
=> 함수형 컴포넌트에서 state를 사용하기 위한 Hook
=> 이 함수를 호출하면 배열이 리턴되는데 배열의 첫번째 데이터는 현재 상태이고 두번째 데이터는 상태를 변경해주는 함수입니다.
=> 상태를 변경하는 함수를 setter라고 하고 대부분 이름은 set상태이름 의 형태로 만들고 상태이름의 첫 글자는 대문자로 합니다.
useState 에는 상태의 초기값을 매개변수로 대입합니다.
=> StateComponent를 함수형 컴포넌트로 변경

7)state사용시 주의 사항
=> state를 수정할 때는 클래스형 컴포넌트에서는 setState 그리고 함수형 컴포넌트에서는 useState함수를 이용해야 합니다.
=> 객체 나 배열을 수정할 때는 복사본을 만들고 수정해야 합니다.
const object = {'name':'adam','age':29};
//name 수정 - object의 속성을 직접 수정
object.name = '군계'ㅣ

//기존 object 의 내용을 복제해서 name을 수정
const copyObject = {...object,'name':'군계'};

const ar

let ar = [1,2,3];
//배열에 직접 추가
ar.push[4];
//배열을 복제해서 추가
let copyAr = ar.concat(4)

//배열에서 데이터를 삭제하거나 변형을 가하고자 할 때는 filter 나 map 함수 이용
filter 나 map은 작업을 수행한 후 새로운 배열을 생성

6. Event Handling
1)주의 사항
=> 이벤트 이름은 camelCase : 시작은 소문자로 하고 두번째 단어부터는 시작이 대문자
=> 자바스크립트 코드를 단순하게 작성하는 것이 아니고 함수 형태의 값을 전달
=> DOM 요소에만 이벤트를 설정 - Component 에는 이벤트 설정이 안됨
=> 이벤트 종류 : https://reactjs.org/docs/events.html

2)onChange 이벤트 - 입력 내용이 변경될 때 호출되는 이벤트
=>이벤트 처리를 위한 컴포넌트 생성 - EventPractice.jsx

3)이벤트 처리를 별도의 함수로 처리
=> 이벤트 처리하는 코드를 별도의 함수에 만들거나(모듈화) 상위 컴포넌트에서 만드 후 넘겨주는 경우(여러 컴포넌트에서 공통으로 사용하는 데이터를 조작하는 경우)가 있습니다.

4)바벨의 transform-class-properties 문법 사용
=> 클래스 안에 일반 메서드를 생성하면 바벨은 이를 인스턴스의 메서드로 자동으로 변형
=> 클래스 안에 함수를 만든 경우 this에 다시 바인딩하지 않아도 됩니다.

5)EventRouting
=>하나의 함수로 여러 DOM의 이벤트를 처리하는 것
이벤트 처리 함수의 매개변수로 Event객체가 전달되는데 이벤트 처리 함수의 매개변수의 target 속성을 호출하면 이벤트가 발생한 객체의 참조를 리턴합니다.
이벤트가 발생한 객체의 참조를 가지고 분기문을 만들어서 이벤트 처리 코드를 작성하면 하나의 함수를 가지고 여러 DOM의 이벤트 처리가 가능
name이나 id 속성 등을 적절히 이용

7.ref
=>HTML에서는 DOM 요소에 어떤 작업을 수행하고자 하는 경우 DOM 객체에 id를 부여한 후 document.getElementById 라는 함수로 DOM 객체를 찾은 후 작업을 수행
=>react는 직접 DOM을 찾아와서 사용하는 작업을 거의하지 않는데 id 대신 ref라는 개념을 가지고 DOM을 찾아서 핸들링

1)ref를 설정하는 방법
=>콜백 함수를 이용하는 방법
<태그 ref={(ref) => {this.? = ref}} />

=> createRef() 함수를 이용하는 방법
이름 = React.createRef();

<태그 ref={this.이름}>

2)css 를 설정하는 컴포넌트 생성
=>src 디렉토리에 ValidationSample.css 파일을 만들고 작성


---

**react_hooks
1.컴포넌트 반복
=> 동일한 모양의 컴포넌트를 여러 개 배치
=> 배열 형태의 데이터를 출력할 때 유용하게 사용

1)배열.map() - 변환
=>배열의 데이터를 순회하면서 매개변수로 받은 함수를 요소 단위로 수행한 후 그 결과를 모아서 다시 배열로 리턴하는 함수
=>map에 설정하는 매개변수
첫번째 callback함수

2.Life Cycle
=>인스턴스가 생성되고 소멸될 때 까지의 과정
=>생성은 생성자(Constructor)가 담당하고 소멸은 소멸자(Destructor)가 땀당합니다.
=>IoC(Inversion of Control - 제어의 역전, 클래스는 개발자가 생성하지만 인스턴스의 생성과 소멸은 개발하지 않고 다른 프레임워크 나 컨테이너 등 이 하는 형태)가 적용된 경우에는 특별한 경우가 아니면 생성자를 이용해서 인스턴스를 생성하지 않음
react 에서 컴포넌트는 IoC가 적용되는 객체
안드로이드나 react는 IoC가 적용된 객체를 Component라고 부릅니다.

6.useRef
=>ref:컴포넌트를 조작하기 위해서 붙이는 일종의 id와 같은 변수
=>useRef 로 만들어진 변수는 값이 변경된다고 해서 컴포넌트가 리랜더링 되지는 않음
=>useRef(초기값)으로 변수를 생성하고 컴포넌트 나 DOM에 설정할 때는 ref 속성에 생성된 뼌수를 대입해주면 됩니다.

7. useEffect : 컴포넌트의 수명주기와 관련된 함수
=>useEffect 함수를 이용해서 Mount 될 때 업데이트 될 때 Unmount 될 때를 처리
첫번째 매개변수는 수행할 내용을 가진 함수이고
---
## 요기서 부터 제대로 작성

### useCallback
1)개요
=> 특정 함수를 새로 만들지 않고 재사용하고자 할 때 사용
=> 컴포넌트에 구현한 함수들은 컴포넌트가 랜더링 될 때 마다 다시 생성
=> 컴포넌트가 많아지고 랜더링이 자주 발생하면 함수들을 다시 만드는 것은 비효율적이 될 수 있습니다.
=> useCallback을 이용하면 데이터가 변경된 경우에만 함수를 다시 만들도록 할 수 있습니다.
=> 첫번째 매개변수는 함수이고 두번째 매개변수는 데이터의 배열입니다.


### React.memo
1)개요
=>컴포넌트의 props 가 변경되지 않았다면 리랜더링을 방지해서 리랜더링의 성능 최적화를 해줄 수 있는 함수
=>이 함수를 이용해서 컴포넌트를 감싸주기만 하면 리랜더링이 필요한 상황에서만 리랜더링을 합니다.

