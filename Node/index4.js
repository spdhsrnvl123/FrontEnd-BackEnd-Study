//디렉토리 존재 여부 확인
const fs = require('fs');

fs.access(dirname,(error)=>{
    if(error){
        console.log("디렉토리 없음");
        fs.mkdir(dirname,(error)=>{
            if(error){console.log("디렉토리 만들기 실패")}
            else{console.log("디렉토리 만들기 성공")}
        })
    }else{
        console.log("디렉토리 존재");
    }
})

//오늘 날짜로 된 디렉토리가 없으면 생성
//오늘 날짜로 된 디렉토리(20221116)가 없으면 생성 만들기