//모듈 가져오기
const http = require('http');

//서버 생성
http.createServer((request,response)=>{
    response.writeHead(200,
        {'Content-Type':'text/html;charset=utf-8'});
    response.write('<h1>처음 만든 웹 서버</h1>');
    response.end('<p>http 모듈 사용</p>')
}).listen(8000,()=>{
    console.log('8000번 포트에서 서버 대기 중');
})
