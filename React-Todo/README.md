**ToDo Application
1.프로젝트 생성 하고 필요한 라이브러리 설치
1)프로젝트 생성
yarn create react-app react_todo

2)필요한 라이브러리
=>sass-loader : scss파일을 사용하기 위해서 설치
=>sass : scss 파일을 사용하기 위해서 설치
=>classnames : css를 작성할 classname을 편리하게 작성하기 위한 라이브러리
=>react-icons : 아이콘을 사용하기 위한 라이브러리, https://react-icons.github.io/react/icons
=>open-color : 색상을 직접 값으로 설정하는 것이 아니고 색상 이름 과 정수 1개의 농도를 가지고 설정할 수 있도록 해주는 라이브러리, https://yeun.github.io/open-color/

3)index.css 수정
=> Web Application 에서 body 나 모든 box 태그에 margin 과 padding을 0로 설정하는 경우가 있는데 이유는 IE 구버전 과의 호환성 문제 때문입니다.
IE 구버전은 width 와 heigth 안에 padding 과 margin 그리고 border 의 크기가 포함되고 나머지 브라우저는 content의 크기만 포함 됩니다.

4) App.js 수정

2.UI
1)구성
=>TodoTemplate : Main
=>ToDoInsert : 데이터 삽입을 위해서 하나의 input 과 버튼을 가진 컴포넌트
=>ToDoListItem : 하나의 항목을 출력하기 위한 컴포넌트
=>ToDoList:ToDoListItem 의 목록을 출력하기 위한 컴포넌트

=>ToDoListItem 을 ToDoList에 배치하고 ToDoList 와 ToDoInsert 를 ToDoTemplate에 배치해서 ToDoTemplate을 App에 배치

=>ToDo 의 내용은 구분하기 위한 값, 내용, 실행 여부로 구성

=>모든 커모넌트 와 scss 파일은 components 디렉토리에 배치
이 부분은 컴포넌트 와 scss 파일 과 index.js 로 묶어서 별도의 디렉토리로 구성해도 됩니다.
이 경우 디렉토리의 이름은 컴포넌트의 이름 과 같아야 합니다.
이렇게 하는 것이 재사용성을 증가시킵니다.
node를 기반으로 하는 프로젝트에서 index.js 의 역할은 디렉토리 안의 모든 것들을 외부에서 사용할 수 있도록 export 하는 것입니다.
require 나 import 할 때 디렉토리 이름을 사용하면 디렉토리 안에 있는 index.js 파일에서 export 한 내용을 가져옵니다.

4)데이터 수정
=> 데이터 목록 화면에서 데이터의 체크박스를 클릭하면 checked의 상태가 변경되도록 설정
=> App.js 파일에 id를 넘겨받아서 id에 해당하는 데이터의 checked 값을 Toggle(반전)


---
최적화 작업
1)많은 양의 데이터 랜더링
=>많은 양의 데이터를 생성해서 출력하도록 App.js 수정

2)컴포넌트가 리랜더링 되는 경우
=>전달받은 props 가 변경되는 경우
=>자신의 state 가 변경되는 경우
=>상위 컴포넌트가 리랜더링 되는 경우
=>forceUpadate 함수를 호출하는 경우

3)하나의 데이터가 수정되면 전체가 리랜더링 문제를 해결
=>현재 컴포넌트가 2000개 인데 하나의 데이터에 수정이 발생하면 todos에 변경이 일어나고 todos는 App컴포넌트의 state이므로 App이 리랜더링을한텐데 이렇게 되면 화면 전체가 리랜더링되는 것과 같습니다.
=>자신의 props 가 변경될 때만 리랜더링하도록 할 수 있는데 Class Component에서는 shouldComponentUpdate 라는 수명주기 메서드를 이용하고 Function Component 에서는 React.memo를 이용하면 됩니다.
컴포넌트를 React.memo 함수로 감싸주기만 하면 됩니다.

=>ToDoListItem 컴포넌트가 자신의 props가 변경된 경우에만 리랜더링 하도록 수정

4)함수가 업데이트 되지 않도록 하기
=>useCallback을 이용해서 함수를 선언했는데 useCallback을 이용하면 두번째 매개변수인 deps 배열의 데이터에 변경이 생기면 함수를 새로 생성
실제로 todos 배열에 변경이 생긴다고 해서 함수를 새로 만들 필요는 없음
대부분의 경우 이벤트 처리 함수는 다시 만들어질 필요 없음
=>해결책
useState 의 setter에 함수형 업데이트를 사용하도록 하면 됩니다.

useReducer를 이용해서 함수를 컴포넌트 외부에 생성

5)useState 의 setter에 함수형 업데이트 사용
//함수형 업데이트
setToDos(todos => todos.concat(todo));

6)useReducer를 이용하는 방법
=>App.js를 수정 - state를 수정하는 함수를 컴포넌트 외부 내보내는 작업
함수는 변경할 state 와 action 을 매개변수로 받아서 action의 type을 가지고 분기를 만들어서 state에 작업을 수행해주면 됩니다.

컴포넌트 내부에서는 useState를 사용하지 않고 useReducer(함수이름, 초기값, 초기화하는 함수)를 이용해서 state 와 state를 수정하는 함수를 생성

컴포넌트 내부에서는 state를 수정하는 함수를 직접 생성하지 않습니다.
state가 변경되더라도 함수들을 다시 만드는 작업을 하지 않습니다.
이 작업은 컴포넌트의 개수가 많거나 state를 조작하는 함수가 많을 때 수행합니다.
함수를 만드는 작업은 그렇게 많은 자원을 소모하거나 많은 메모리를 사용하는 작업은 아닙니다.

7)화면에 보여질 내용만 랜더링
=>스마트 폰 애플리케이션에서 collectionView(Table View, Map View, Web View 등)들은 메모리 효율을 높이기 위해서 deque라는 자료구조를 이용해서 화면에 보여지는 만큼만 메모리 할당을 해서 출력을 하고 스크롤을 하면 Deque의 메모리를 재사용하는 메커니즘으로 메모리 효율을 높이게 됩니다.

=>react 에서도 외부 라이브러리를 이용하면 위와 유사하게 화면에 보여지는 만큼만 랜더링을 하고 나머지 데이터를 스크롤 할 때 렌더링을 하도록 할 수 있습니다.
이는 SPA에서 많이 중요
이게 안될 때 어쩔 수 없이 **서버 랜더링**을 사용합니다.
SPA의 단점 검색엔진이 확인을 못한다. 모든 자바스크립트를 읽어서 일반적인 페이지보다 느리다.
지연로딩
=>react-virtualized라는 라이브러리를 이용해서 지연 로딩을 구현할 수 있습니다.
하나의 항목의 너비(ToDoList.scss 의 width:512px)와 높이(513px)를 알아야 하고 목록의 높이(57px)를 알아야 합니다.

react 에서 목록을 출력할 때는 스타일에서 width 와 height 를 설정하는 것이 좋습니다.

---

=>패키지 설치
yarn add react-virturalized

---
**데이터 불변성
1.불변성
=>React 에서는 props 와 useState로 만든 데이터는 원본을 수정할 수 없습니다.
이유 : React는 Virtual DOM의 개념을 사용해서 랜더링을 구현하기 때문
React는 현재 화면의 DOM 과 Memory 상의 Virtual DOM을 비교해서 수정된 부분만 다시 랜더링 하는 구조로 랜더링 속도를 향상 시킵니다.
-> 게임의 물리 엔진도 이 원리를 이용합니다.
원본에 출력한 내용을 수정하면 안됩니다.

=> 자바스크립트는 1개의 데이터를 가진 것 과 여러 개의 데이터를 가진 것이 사용할 때 다른 원리로 동작을 합니다.

let a = 10;
let b = a;

let obj1 = {name:"adam"};
let obj2 = obj1; //obj1이 참조하고 있는 곳의 HashCode(위치)를 obj2에 대입

let obj3 = {...obj1}

let ar1 = [1,2,3]
let ar2 = ar1; //ar1이 참조하고 있는 곳의 HashCode(위치)를 ar2에 대입
let ar3 = [...ar1]

->주소라는 위치 절대로 사용하지 않기 이것은 구별하기 위한 값이다 **해쉬코드**라고 부르던가 **참조**라고 부르던가 그렇게 말하기
->callbyvalue라는 말 보지 말기

---

