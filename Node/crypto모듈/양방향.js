//암호화 모듈 가져오기
const crypto = require("crypto");

const algorithm = "aes-256-cbc"; //알고리즘은 정해진 알고리즘이용
//Node 의 crypto 모듈에서는 key는 32자리 iv는 16자리
const key = "12345678901234567890123456789012";
const iv = "1234567890123456";

//암호화 객체 생성
let cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('01037901997', 'utf8', 'base64');
result += cipher.final('base64'); //이 부분 질문!
console.log(result);

//복호화
let decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log(result2);
