react styling : 스타일 적용
1. styling방식
=> 일반 CSS 사용
=> Sass : CSS 전처리기(pre-processor)를 이용하는 방식으로 확장된 CSS 문법 사용
=> CSS Module : 스타일을 작성할 때 CSS 클래스 이름이 다른 CSS 클래스 이름과 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해주는 옵션
=> styled-components : 컴포넌트 안에 스타일을 내장시키는 방식으로 동일한 스타일이 적용된 컴포넌트를 사용하는 방식 - 실제 애플리케이션 제작 작업을 할 때 이런 방식으로 만들어진 컴포넌트들을 많이 이용

2. 일반 CSS 적용
1) 개요
=> webpack의 css-loader를 이용해서 일반 CSS를 불러오는 방식
=> react 프로젝트를 생성하면 App.js가 App.css를 불러와서 적용

2)Naming
=>react 프로젝트에서는 컴포넌트-클래스이름 의 형태로 네이밍
App-header : App 컴포넌트 안에 header라는 클래스를 의미
=>BEM(Block Element Modifeier)방법 - CSS에서는 가장 많이 사용
각각의 요소는 '-' 나  '_' 로 구분
블럭요소이름_요소이름_수정자이름 의 형태로 네이밍
=>SAMCSS(Scalable and Modular Architecture for CSS) - 확장형 모듈식 구조
Base에는 아무런 접두어도 붙이지 않고 Layout 관련된 경우는 I- 이름을 정하는 방식
State의 경우는 is- 또는 s- 등을 추가
용도를 파악하기 편리
=>이외에도 OOCSS 등이 있음

3.CSS Module 사용
1)개요
=>CSS를 불러와서 사용할 때 클래스 이름을 고유한 값으로 만들어서 적용
[파일이름]_[클래스이름]_[해시값] 을 추가해서 클래스 이름을 부여
=>사용하는 방법은 css 파일의 확장자를 .module.css로 만들면 됩니다.
=>이 기능을 사용할 때는 css 파일의 클래스 이름을 일반적인 이름으로 사용하면 됩니다.
=>별도의 클래스 이름을 부여하지 못하도록 하고자 하는 경우에는 클래스 이름 앞에 :global을 추가하면 됩니다.

2)적용
=> css 파일을 생성 - CSSModule.module.css
=> css 파일의 디자인을 적용할 컴포넌트 생성 - CSSModule.jsx

4.classNames 라이브러리
1)개요
=>CSS 클래스를 조건부로 설정할 때 유용한 라이브러리로 여러 클래스를 설정할 때 편리
=>설치 - yarn add classnames(npm install classnames)
classNames('one','two'):2개 설정
classNames('one',['two','three']) : 3개 설정
classNames('one',{'two':true}) : two 적용
classNames('one',{'two':false}) : two 적용 안됨

true 나 false 위치를 변수로 설정하면 조건부 설정을 쉽게 구현하는 것이 가능합니다.

5.Sass
1)CSS Preprocessor(전처리기)
=>CSS가 동작하기 전에 사용하는 기능
=>CSS의 불편함을 해결하기 위한 확장 기능
=>문법 자체는 CSS와 유사하지만 선택작의 중첩이나 조건문, 반복문, 다양한 단위의 연산 등이 가능
=>Sass, Less, Stylus 등이 있습니다.

2)SASS
=>Syntacitically Awesome Styles Sheets
=>중복되는 코드를 줄여서 가독성 좋게 작성 가능
=>가이드:https://sass-guidelin.es/ko/
=>SCSS
CSS 구문과 호환되도록 새로운 구문을 도입해 만든 SASS의 기능을 지원하는 CSS의 super set
=>패키지 설치 : node-scss scss-loader sass
=>확장자는 scss를 사용

3)CSSModule.module

5)변수 와 믹스 인 사용
=> $변수명 : 값; 의 형태로 변수를 만들어서 다른 곳에서 @import를 이용해서 사용이 가능
=> 믹스 인은 여러 속성을 모아놓은 것
@mixin 이르(){
    속성:값
    ...
}

@include 이름();
=>변수와 믹스인은 자주 사용하는 속성이 있을 때 유용

=>애플리케이션을 개발하다보면 컴포넌트 1개와 scss파일 1개가 쌍으로 만들어지는 경우가 많은데 여러 컴포넌트를 만들다 보면 공통적으로 사용하는 scss 라이브러리들이 있는데 이러한 라이브러리들을 util.scss 에서 import 하면 다른 곳에서 별도의 import 없이 사용하는 것도 가능합니다.

6)반응형 웹 디자인(디바이스의 크기에 상관없이 동일한 콘텐츠를 사용할 수 있도록 하는 것): include media
=>색상 : open-color(색상을 자주 사용하는 색상 이름과 숫자를 이용해서 강도를 설정하는 형태)
=>icon : react-icons

=>라이브러리 설치 : yarn add include-media open-color react-icons

>컴포넌트를 만들 때 디렉터리 구조
src 디렉토리 안에 components 라는 디렉토리를 생성
이 디렉토리 안에서 컴포넌트 파일 과 디자인 파일을 생성
디렉토리 안에 컴포넌트 이름으로 디렉토리를 생성하고 컴포넌트 파일과 디자인 파일 그리고
index.js(컴포넌트를 내보내는 역할만 수행)파일을 생성

=>컴포넌트를 저장할 components 디렉토리를 생성
=>components 디렉토리에 컴포넌트를 정의할 Button.jsx 파일을 만들고 작성
=>components 디렉토리에 Button.scss 파일을

7)Material Design
=>개요
웹 과 앱을 통틀어 모든 개발 플랫폼에서 사용자 경험을 하나로 묶기 위해서(Progressive Web Design) 구글이 제시한 디자인 방식

=>사용방법
CDN 방식 = 스타일시트의 외부 링크 이용하는 것으로 네트워클 사용할 수 없는 상태가 되면 적용되지 않음

scss 파일이나 css 파일을 다운로드 받아서 적용 - 네트워크 사용 여부와 상관없이 사용할 수 있지만 앱의 크기가 커짐

CDN(Content Delivery-Distribution Network) : 서버와 사용자 사이의 물리적인 거리를 줄여서 콘텐츠 로딩에 소요되는 시간을 최소화하기 위해서 동일한 콘텐츠를 여러 네트워크에 분산 저장해서 요청을 하면 가장 가까운 Network에서 다운로드 하도록 해주는 서비스

---
css 나 js를 사용할 때 min. 이 붙는게 있고 붙지 않는 것이 있음
min. 이 붙는 것은 공백과 엔터를 전부 없애서 사이즈를 줄인것이고 min. 이 없는 것은 공백과 엔터를 이용해서 읽기 좋게 만든 것입니다.

=>실행하고 위의 div와 아래 div를 확인

=>다운로드 받아서 직접 넣고 사용
https://materalizecss.com 에서 css 나 scss를 다운로드

6.styled-components
1)개요
=> 자바스크립트 파일 안에 스타일을 선언하는 방식 -CSS in JS
=> 컴포넌트와 디자인을 분리하지 않고 컴포넌트와 디자인을 하나의 파일로 만들어서 사용하는 것으로 컴포넌트를 배치하면 자동으로 디자인이 적용
react-icons 의 각 icon을 컴포넌트를 삽입하는 형태로 추가하면 이미 설정된 style이 적용되서 출력이 됩니다.
=>이러한 라이브러리의 종류는 https://github.com/MicheleBertoli/css-in-js 에서 확인 가능

2)styled-component를 이용한 버튼 만들기
=>패키지 설치 : yarn add styled-components

=> components 디렉토리에 styledComponent.jsx 파일로 만들고 작성


---

7. 서버에서 데이터 받아오기
https://jsonplaceholder.typicode.com/users

8) 서버에서 데이터 받아오는 방법
=> ajax 이용 - load 이벤트와 error 이벤트를 처리