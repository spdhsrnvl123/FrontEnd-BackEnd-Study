//웹 서버를 구축을 위한 외부 모듈
const express = require('express');

//.env 파일의 내용을 읽어서 process.env에 저장해주는 모듈
const dotenv = require('dotenv');

//.env 읽어오기 //항상 선언과 생성은 맨 위에 있어야 된다.
dotenv.config();

//현재 디렉토리에 대한 절대 경로를 알아내기 위한 내장 모듈
const path = require('path');

//서버를 준비
const app = express();
app.set('port', process.env.PORT);

//로그 출력
const morgan = require("morgan");
app.use(morgan('dev'));

//post 방식의 파라미터를 읽을 수 있도록 설정
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//쿠키 사용이 가능하도록 설정
const cookieParser = require("cookie-parser");
app.use(cookieParser(process.env.COOKIE_SECRET));

/*
    //사용자의 요청 처리
    //요청처리 메서드는 get, post, put(patch), delete, options
    app.요청처리메서드(url,(req,res)=>{
        //처리

        //응답
        //서버렌더링을 하겠다는 의미 2가지
        //send(직접 출력 내용 작성)
        //sendFile(html파일경로)

        //서버렌더링을 안하겠다는 의미
        //json(JSON데이터) - 서버렌더링을 하지 않음
    })
*/

//파일의 경로는 절대 경로로 무조건 생성
//포트번호(Localhost:3000 -> ContextPath)까지 요청 처리
// const path = require("path"); // 절대 경로 생성

/*
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './index.html'))
});
*/
// 세션 만드는 부분---------------------------------------
//세션 사용을 위한 모듈을 가져오기
const session = require("express-session");

//세션을 파일에 저장하기 위한 모듈 가져오기
const FileStore = require('session-file-store')(session);

//세션 사용을 위한 미들웨어 장착
//req.session 으로 세션 객체 사용이 가능
app.use(session({
    secret : "keyboard cat",
    resave:false,
    saveUninitialized:true,
    store : new FileStore()
}))

//파일을 업로드하기 위한 디렉토리 생성
const fs = require('fs');

try{
    //디렉토리를 읽는데 디렉토리가 없으면 에외가 발생
    fs.readdirSync('uploads');
}catch(error){
    //디렉토리 생성
    fs.mkdirSync('uploads')
}

//파일 업로드 설정
const multer = require('multer');
const upload = multer({
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done){
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8')

            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname,ext) + Date.now() + ext);
        }
    }),
        limits:{fileSize:1024*1024*10}
})

//라우팅 관련 파일 가져오기
const indexRouter = require('./index');
const userRouter = require('./user');
const boardRouter = require('./board');

//url과 매핑
// app.use("/",indexRouter); //요청은 indexRouter에서 처리

//pug설정
//res.render로 출력할 때 사용할 디렉토리를 설정
app.set("views",path.join(__dirname,'views'))
//템플릿 엔진은 pug를 사용하겠다고 설정
app.set("view engine",'pug');

app.use("/",(req,res)=>{
    //템플릿 엔진으로 출력
    //views/index.html로 출력
    res.render('index',{'title':'Pug','aespa':['카리나','지젤','윈터']})
})

app.use('/user',userRouter); // /user가 앞에 있는 것은 userRouter에서 처리
app.use('/board',boardRouter);

//하나의 파일 업로드 처리
app.get('/single',(req,res)=>{
    res.sendFile(path.join(__dirname,'./single.html'))
});

//html파일의 id image single('image')가 같아야 된다.
app.post('/single',upload.single('image'),(req,res)=>{
    //title 파라미터 읽기
    //post 방식에서의 파라미터는 req.body.파라미터이름
    console.log(req.body.title);
    console.log(req.file.originalname);
    res.send('성공');
})
// -----------------------------------------------------


// -----------------------------------------------------  

//서버를 구동
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});