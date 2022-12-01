//스트림을 사용한 복사
const fs = require('fs');
console.log('복사하기 전 메모리 사용:'
    + process.memoryUsage().rss);

    //읽기 와 쓰기 스트림 생성
    const readStream = fs.createReadStream('./data.txt');
    const writeStream = fs.createWriteStream('./streamdata.txt');
    //읽고 쓰기
    readStream.pipe(writeStream);
    readStream.on('end',()=>{
        console.log('복사 한 후 메모리 사용량:'
        + process.memoryUsage().rss)
    })
