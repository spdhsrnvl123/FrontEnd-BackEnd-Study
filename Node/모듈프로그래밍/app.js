//{}로 묶어서 내보낸 것은 이름을 맞추어서 받아야 한다.
const {odd, even} = require('./firstModule');

//하나를 내보냈을 때는 이름을 바꿔서 받을 수 있다.
const checkNumber = require('./secondModule')

console.log(checkNumber(3))

