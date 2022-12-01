let today = new Date();

console.log(today);

const getFullYear = today.getFullYear();
const getMonth = today.getMonth()+1;
const getDate = today.getDate();

//합쳐서 하나의 문자열 만들기 : 하나의 문자열로 만들어서 연결
let dirname = new String(getFullYear) + getMonth + getDate;
console.log(dirname)