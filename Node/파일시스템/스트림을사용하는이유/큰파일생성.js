//용량이 큰 파일을 생성 - 실행하고 300MB 정도의 텍스트 파일이 만들어지는지 확인
const fs = require('fs');

const file = fs.createWriteStream('./data.txt');

for(let i=0; i<10000000; i++){
    file.write("용량이 큰 파일 만들기\n");
}

file.end();