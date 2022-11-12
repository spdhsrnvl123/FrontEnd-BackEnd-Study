window.addEventListener("load",()=>{
    
    const LoginForm = {
        loginform : document.getElementById("loginform"),
        id : document.getElementById("id"),
        password : document.getElementById("pw"),
        password2 : document.getElementById("pw2"),
        msg : document.getElementById("msg"),
        msg2 : document.getElementById("msg2"),
        msg3 : document.getElementById("msg3")
    }

    LoginForm.loginform.addEventListener("submit",
    (e) =>{
        //아이디 입력란 찾아오기

        if(LoginForm.id.value.trim().length === 0){
            LoginForm.msg.innerHTML =
                "아이디는 필수 입니다.";
                LoginForm.msg.style.color = "Red";
                //기본 이벤트를 제거해서 서버에 전송하지 않도록 하기
                e.preventDefault()
                return;
        }
        if(LoginForm.password.value.length === 0){
            LoginForm.msg2.innerHTML =
                "비밀번호는 필수 입니다.";
                LoginForm.msg2.style.color = "Red"
                e.preventDefault()
                return;
           }

        if(LoginForm.password.value !== LoginForm.password2.value){
            LoginForm.msg3.innerHTML = "비밀번호가 일치하지 않습니다."
            LoginForm.msg3.style.color = "Red"
            e.preventDefault()
            return;
        }

        let pwreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
        // 비밀번호는 소문자 대문자 숫자 특수문자가 1개씩 포함되어야 하고 8자이상 15자 이하이어야 한다.
        if(pwreg.test(LoginForm.password.value) === false){
            LoginForm.msg.innerHTML =`비밀번호는 소문자 대문자 숫자 특수문자 가 1개씩 포함되어야 하고
            8자이상 15자 이하이어야 합니다.`
            e.preventDefault();
            return;
        }
        }
    );
})



// 리턴을 넣어줘야 되는 이유 한개가 끝나면 한개가 넘어가야되기 떄문이다.
