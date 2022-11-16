
//promise 비동기 방식
const fs = require("fs").promises;

//비동기식 파일 읽기 - error 는 에러의 내용이고 data가 Buffer

fs.readFile('./test.txt')
    .then((data)=>{console.log(data.toString());})
    .catch((error)=>{console.log(error.message)})

    console.log("1")

const fs2 = require("fs");

//비동기식 파일 읽기 - error 는 에러의 내용이고 data 가 Buffer
fs2.readFile('./test.txt', (error, data) => {
    if(error){
        //에러가 발생했을 때
        console.log(error.message);
    }else{
        //에러가 발생하지 않았을 때
        console.log(data.toString());
    }
});
console.log("파일 읽기 종료?")