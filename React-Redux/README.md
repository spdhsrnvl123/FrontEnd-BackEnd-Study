**Redux
1.redux
=>상태 관리 라이브러리
=>react 에서만 사용하는 것이 아니고 node 관련된 프로젝트에서는 어디서든 사용 가능
=>Context API 나 useReducer 가 나오기 전 부터 존재
=>redux를 이용하면 상태 관련 로직을 별도의 파일로 분리해서 관리할 수 있습니다.
데이터 공유도 수월해 짐
=>프로젝트의 규모가 크거나 비동기 작업을 주로 하는 경우에 사용

2.키워드
1)Action
=>상태에 어떠한 변화가 필요하게 될 때 발생시키는 객체
=>이 객체는 type이 필수이고 나머지는 옵션
type을 가지고 동작을 구분해서 작업을 수행

{
    type:"INSERT" //INSERT 이름은 아무거나 상관 없음.
}
{
    type:"INSERT"
    text:"adam"
}
{
    type:"INSERT"
    text:{id:1, name:"adam"}
}

2)Action Creater
=>Action을 생성하는 함수
=>필수는 아님
=>직접 Action 객체를 생성해도 되지만 별도의 함수를 만들어서 사용하기도 합니다.

export function addToDo(data){
    return{
        type:"ADD_TODO",
        data
    };
};

3)Reducer
=> 상태 변화를 일으키는 함수
function 이름(state, action){
    return 변경된 state
}

만약 스테이트를 1증가시킨다면
function counter(state,action){
    switch(action.type){ //action에서 type을 찾아서 case마다 리턴하여 스테이트 값을 수정한다.
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            return state;
    }
}

4)Store
=> redux를 사용하는 애플리케이션에는 하나의 Store가 생성되는데 이 Store에는 애플리케이션의 state 와 reducer가 들어 있고 몇 개의 내장 함수를 제공
=> dispatch : 실제 액션을 발생시키는 함수
이 함수에 action 객체를 대입하면 dispatch 가 reducer를 호출해서 함수를 실행해서 상태를 변경시킴
=> subscribe : 이 함수는 함수 형태의 파라미터를 받아서 action이 dispatch 될 때 호출되서 파라미터로 받은 함수를 실행

3.규칙
1) 하나의 애플리케이션에 하나의 스토어를 갖는 것이 원칙
2) state는 읽기 전용
3) reducer는 pure function 이어야 함
=> pure function(순수 함수)
외부에서 넘겨받은 매개변수는 수정하지 않고 복제를 해서 수정한 후 return
동일한 입력이면 동일한 출력이 만들어져야 합니다.
랜덤이나 new Date 또는 네트워크에서 다운로드 받는 작업 등은 일정한 출력을 만들어내지 못하므로 reducer에서 처리하면 안되고 별도의 미들웨어를 만들어서 처리
4)설치 : yarn add redux

5.redux 생성
=> exercise.js 파일 수정

6.Redux Module
=>리덕스 모듈은 액션 타입, 액션 생성 함수, 리듀서를 포함하는 자바스크립트 파일
=>리덕스 샘플에서는 액션과 리듀서를 분리해서 정의
=>실제 개발 환경에서는 대부분 액션과 리듀서를 하나의 파일에 만드는 경우가 많음
이렇게 하나의 파일에 만드는 것을 Ducks 패턴이라고 함
=>이전의 예제를 모듈화 시킨다면 counter를 변화를 주는 부분과 text에 변화를 주는 부분 그리고 배열에 변화를 주는 부분을 별도의 파일에 작성하고 다른 파일(index.js)에서 이를 combine 한 후 export 하는 형태로 만드는 것이 일반적입니다.
액션을 구분하기 위해서 액션 이름을 만들 때 액션 이름 앞에 접두어를 사용합니다.

7.react 프로젝트에 redux 적용
1)패키지 설치 : yarn add react-redux

2)리덕스 관련 파일들을 모듈화 하기 위한 디렉토리를 생성 - modules

3)modules 디렉토리에 숫자를 증감하는 리덕스를 생성 - counter.js

4)modules 디렉토리에 todos.js 파일을 생성하고 작성

5)2개의 리듀서를 하나로 합쳐서 export 해주는 파일을 생성 - index.js
