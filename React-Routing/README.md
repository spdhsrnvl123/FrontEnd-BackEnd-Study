**React_Router
1.Routing
=> 요청 URL에 따라 분기를 해서 출력을 하는 것

2.SPA(Single Page Application)
1)Server Rendering
=>웹 브라우저가 서버에게 요청을 전송하면 서버가 HTML을 전송해서 전체를 다시 출력하는 방식
=>사용자와 인터럭션이 많은 웹 애플리케이션에서는 속도 측면에서 문제가 발생할 수 있음

2)SPA
=>첫번째 요청을 전송했을 때 만 HTML이 전송되고 그 이후부터는 요청을 하면 서버가 JSON(XML도 가능) 형태의 데이터를 전송하고 브라우저가 이 데이터를 파싱해서 랜더링 하는 구조
=>단점
- 앱의 규모가 커지면 자바스크립트 파일의 사이즈가 너무 커지게 되서 트래픽과 로딩 속도에 문제가 발생할 수 있는데 이 문제를 해결하기 위해서는 Code Splitting을 이용해서 해결
- 브라우저에서 자바스크립트 코드를 관리하는 경우 크롤러가 페이지의 정보를 제대로 받아가지 못하는 현상이 발생해서 검색 엔진에서 페이지의 검색 결과에 포함하지 못하는 경우가 발생
- 처음 자바스크립트가 실행될 때 까지 페이지가 비어 있기 때문에 빈 페이지가 보여질 수 있음 - 이런 경우를 방지하기 위해서는 첫번째 페이지는 서버에서 랜더링을 해서 보여지고 다음 페이지 부터 클라이언트 랜더링을 하는 것이 좋습니다.
- 적절한 라우팅을 이용해서 여러 컴포넌트를 하나의 페이지에 출력
- 라우팅에 많이 사용되는 라이브러리 : react-router-dom(5버전 과 6버전이 많이 다름)

4)URL에 컴포넌트 매핑
<Route path=URL element={출력하고자 하는 컴포넌트} />

4.링크
=>Link라는 컴포넌트 이용
=>Link 컴포넌트를 이용하면 페이지를 새로 불러오지 않고 그대로 유지한 상태에서 HTML5 History API를 사용해서 페이지의 URL만 갱신
실제로는 a태그로 만들어져 있는 페이지 전환을 방지하는 기능을 추가
=>사용하는 방법
<Link to = URL>내용</Link>

5.URL Parameter & Query String
1)URL Parameter
=> URL의 마지막이나 중간에 데이터를 전송하는 것
/profiles/adam -> adam 부분을 데이터처럼 변경하면서 사용할 수 있는데 URL Parameter 라고 합니다.

=> 이 경우 라우팅을 할 때 URL을 **/profiles/:이름** 의 형태로 작성해야 합니다.

2)Query String
=> URL 뒤에 ? 를 추가하고 이름 과 값을 전달할 때 사용
/profiles?name=adam&email=itstudy@kakao.com
=>근본적으로 Query String은 Client 가 Serve에게 전달하는 데이터
react 측면에서는 Query String을 읽는 것 보다는 만드는 것이 중요
만드는 것은 JavaScript 문법을 이용
Query String은 반드시 인코딩을 해서 만들어야 합니다.
=>useLocation 이라는 Hook을 이용해서 location 객체를 리턴받아서 사용
=>location 객체의 정보
pathname : query string을 제외한 경로
search : ?를 포함한 query string
hash : #문자열 형태의 값 , segmaent 라고 부르기도 하는데 하나의 페이지 내에서 이동하기 위해서 사용, 예전의 구형 브라우저에서 클라이언트 라우팅을 할 때 사용, jquery mobile 이 hash를 사용,jquery(Cross Browsing 라이브러리) mobile 이 hash를 사용

Jquery state : 페이지 이동 시 임의로 넣을 수 있는 상태 값 -❗️조사

=> react-router-dom 에서도 useSearchParams 라는 Hook으로 읽을 수 있습니다.
=> qs 라이브러리를 이용하면 query string을 객체로 변환할 수 있습니다.(qs를 많이 씀)

타입스크립트 - 마이크로소프트에서 개발

=> 브라우저의 주소 창에 : http://localhost:3000/about?name=adam&number=20

=> qs 설치

5.Sub Routing
=>Router 내부에 다시 Router를 만드는 것

=>Articles.jsx 파일을 만들어서 서브 라우팅할 내용을 작성

6.공통 레이아웃
1)만드는 방법
=>공통된 레이아웃을 위한 컴포넌트를 만들고 각 페이지 컴포넌트에서 직접 출력
=>중첩된 라우트 와 Outlet을 이용해서 구현 - 한 번만 설정하면 됩니다.

2)/, /about, /profile 에 공통된 레이아웃 적용

7.라우팅에서의 index 속성
=>index라는 props가 존재하는데 이 props 가 "/" 입니다. (보통 index를 적어준다.)

8.Router 의 부가 기능
1)useNavigate
=>Link 컴포넌트를 이용하지 않고 다른 페이지로 이동하고자 할 때 사용하는 Hook
=>Redirect 하고자 하는 경우 사용
=>useNavigate Hook이 리턴한 함수를 호출해서 처리할 수 있는데 매개변수로는 정수 나 문자열 하나 그리고 옵션을 설정합니다.
첫번째 매개변수가 숫자이면 숫자 만큼 뒤나 앞으로 이동합니다.
문자열이면 이동할 URL이 됩니다.

두번째 매개변수로 객체를 만들어서 replace 옵션에 true를 설정하면 현재 페이지에 대한 기록 남기지 않습니다.

#### Web 에서의 페이지 이동
Forwarding : 요청(request) 객체를 유지하면서 이동, 새로 고침을 하면 요청이 다시 이루어지는데 이 경우는 서버에서 처리하는 로직이 있으면 다시 로직을 수행합니다.
새로 고침을 했을 때 작업을 다시 수행하고자 하는 경우 사용 - 조회에 이용

Redirect : 요청 객체를 소멸시키면서 이동, 새로 고침을 하면 요청이 다시 이루지는 것이 아니고 현재 보여지고 있는 결과를 다시 출력합니다.
작업을 다시 수행하지 않아야 하는 경우 사용 - 삽입, 삭제, 갱신에 이용

3)NavLink
=>Link와 거의 유사한데 현재 경로 와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일을 적용 할 수 있도록 해주는 컴포넌트

4)Navigate
=>화면에 보여지는 순간 다른 페이지로 이동하고자 할 때 사용하는 컴포넌트

5)404 에러(클라이언트의 URL이 잘못된 경우)에 대한 대응
=>Route를 만들 때 path를 "*"로 설정하면 모든 경우에 반응하는데 이 컴포넌트는 Route의 맨 아래에 추가하면 앞의 path를 확인한 후 앞에 일치하는 path가 없으면 자신에게 설정된 컴포넌트를 출력

---

**Context
1.react 프로젝트에서의 데이터 공유
=>Component의 props를 이용해서 하위 Component에게 넘겨주는 구조를 이용
구조가 가단할 때는 크게 어려움이 없지만 구조가 복잡해지면 번거로운 작업이 많아집니다.
여러 곳에서 하나의 데이터를 사용하는 경우도 유사한 작업이 반복됩니다.

=>Context API를 이용하면 공유 데이터 작성이 쉬워집니다.

2.사용
1)src 디렉토리에 contexts라는 디렉토리 생성

2)데이터를 공유하기 위한 context 파일을 contexts 디렉토리에 생성하고 작성 - color.js

3)공유 데이터를 사용할 컴포넌트를 생성 - ColorBox.jsx
4)App.js를 수정
=>ColorBox를 출력하도록 설정해서 확인

---

