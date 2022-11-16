const crypto = require("crypto");

let password = "12345";
//단방향 암호화 수행
let p1 = crypto.createHash("sha256").update(password).digest('base64');
console.log(p1);


let password2 = "12345"
let p2 = crypto.createHash("sha256").update(password2).digest('base64');
console.log(p2);

//동일한 문자열로 암호화를 동일한 결과를 생성하기 때문에 true
console.log(p1 === p2);

password3 = "123456";
p3 = crypto.createHash("sha256").update(password3).digest('base64');
//false
console.log(p2 === p3);