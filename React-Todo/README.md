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