//=>URL분해
const url = require('url');
const addr = "https://www.naver.com/login?id=ggangpae1";

//parse 함수: url을 분해
const p = url.parse(addr);


//pathname에는 서버 URL을 제외한 경로를 저장하고 있다
//query는 query string을 저장하고 있다.
console.log(p)

//분해된 url 복원
console.log(p.format())

//addr 에서 파라미터 부분만 가져오기
//searchParams 속성을 호출하면 파라미터 부분을 해당하는 객체를 리턴
const address = new URL("https://www.com/login?id=ggangpae1")
console.log(address.searchParams);
//id 의 값 추출하기
console.log(address.searchParams.get("id"));