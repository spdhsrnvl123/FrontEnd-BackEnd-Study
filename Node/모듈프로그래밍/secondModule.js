//var모듈에서 내보낸 내용 가져오기
//받을때도 중괄호로 받는다.
const {odd,even} = require('./firstModule');

const checkOddOrEvent = (num)=>{
    if(num % 2){
        return odd;
    }else{
        return even;
    }
}
//이렇게 내보내면 가져올 때는 아무이름이나 사용해서 받으면 된다.
module.exports = checkOddOrEvent;