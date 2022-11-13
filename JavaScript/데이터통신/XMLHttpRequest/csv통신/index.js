window.addEventListener("load",(e)=>{
    //필요한 DOM 찾아오기
    let csv = document.getElementById("csv");
    let content = document.getElementById("content");

    //csv 버튼을 눌렀을 때
    csv.addEventListener("click",(e)=>{
        //ajax 요청 객체 생성
        let request = new XMLHttpRequest();
        // console.log(request)

        //연결 준비 - 첫번째는 요청 방식, 두번째 URL
        request.open('GET','data.csv')
        
        //요청 - 데이터와 함께 전송해야 하는데 지금은 없음
        request.send('')

        //요청을 받기 위한 콜백 등록
        //정상 응답이 온 경우
        request.addEventListener("load",()=>{
            //XML 이외의 데이터 읽기
            // alert(request.responseText)
            let ar = request.responseText.split(",");
            //배열은 of를 이용해서 순회
            for(name of ar){
                content.innerHTML +=
                    '<p>' + name + '</p>';
            }
            
        });
        //에러가 발생했을 때 처리
        request.addEventListener("error",()=>{
            alert(request.status)
        })
    })
})