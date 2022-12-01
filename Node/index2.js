//스트림을 사용하지 않고 읽어서 쓰기
const fs = require('fs');
console.log('복사하기 전 메모리 사용:'
    + process.memoryUsage().rss);

    const data1 = fs.readFileSync('./data.txt');
    fs.writeFileSync('./nostreamdata.txt',data1);

console.log('복사 한 후 메모리 사용량:'
    + process.memoryUsage().rss);