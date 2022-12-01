//다른 프로세스를 실행할 수 있는 모듈을 가져오기
const exec = require('child_process').exec;

//프로세스 준비
//windows에서는 dir 이 디렉토리의 목록을 확인하는 것이고
let process = exec('ls');

//프로세스가 정상적으로 수행되면
process.stdout.on('data',function(data){
    console.log(data.toString());
})

//수행되지 않으면
process.stderr.on('data',function(data){
    console.log(data.toString());
})