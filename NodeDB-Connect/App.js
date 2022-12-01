const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const dotenv = require('dotenv');

//설정 파일의 내용 가져오기
dotenv.config();

//서버 설정
const app = express();
app.set('port', process.env.PORT || 9000);

//로그를 매일 기록하기 위한 설정
let FileStreamRotator = require('file-stream-rotator');
let fs = require('fs');

//로그를 기록할 디렉토리 경로 생성
let logDirectory = path.join(__dirname, 'log');

//디렉토리가 없으면 생성
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

//로그 파일 옵션을 설정
let accessLogStream = FileStreamRotator.getStream({
    date_format:'YYYYMMDD',
    filename:path.join(logDirectory, 'access-%DATE%.log'),
    frequency:'daliy',
    verbose:false
});
//로그 기록 설정
app.use(morgan('combined', {stream:accessLogStream}));

//압축해서 전송하는 옵션 설정
app.use(compression());

//POST 방식의 파라미터 읽을 수 있도록 설정
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//세션을 데이터베이스에 저장하는 작업

//데이터베이스 접속 정보
let options = {
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'6813',
    database:'adams'
};
//세션을 저장하기 위한 MySQL 데이터베이스 저장소 생성
const MariaDBStore = require('express-mysql-session')(session);
//세션 설정
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:true,
    store:new MariaDBStore(options)
}));

//파일 업로드 설정
const upload = multer({
    storage:multer.diskStorage({
        destination(req, file, done){
            done(null, 'public/img');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) +
                Date.now() + ext);
        }
    }),
    limits:{fileSize: 10*1024*1024}
});

//정적 파일의 경로를 설정
app.use('/', express.static('public'));

//파일 다운로드를 위한 모듈
let util = require('util');
let mime = require('mime');

//데이터베이스 연결
let connection = mysql.createConnection(options);
connection.connect((error) => {
    if(error){
        console.log(error);
        throw error;
    }
})

//기본 요청을 처리
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

//데이터 전체 가져오기 처리
app.get('/item/all',(req,res)=>{
    //HTML 출력 : res.sendFile(파일 경로) - 서버의 데이터 출력 못함
    //서버의 데이터 출력 못함 - ajax 나 Fetch api를 이용해야 함 ✨
    //템플릿 엔진 : res.render(파일 경로,데이터)
    //템플릿 엔진에 넘겨주는 데이터는 프로그래밍 언어의 데이터✨

    //JSON 출력 : res.json(데이터)
    //json 문자열의 형태로 데이터를 제공✨
    //Front End에서 데이터를 수신해서 출력✨
    
    //2개 이상의 데이터를 조회할 때는 정렬은 필수✨
    connection.query("select * from goods order by itemid desc",
    (err,results,fields)=>{
        if(err){
            //에러가 발생한 경우
            //에러가 발생했다고 데이터를 전송하지 않으면 안됨
            res.json({'result':false})
        }else{
            //정상 응답을 한 경우
            res.json({'result':true, 'list':results});
        }
    })
})

app.get('/item/list/:page',(req,res)=>{
    /*
    //파라미터 읽기
    //파라미터를 주지 않으면 page는 undefined가 된다.
    const page = req.query.page;
    console.log(page);
    */
   /*
   // URL에 포함된 파라미터 읽기
   // 데이터를 전달해주지 않으면 아무일도 하지 않음
   const page = req.params.page;
   console.log(page);
   */
})

//데이터 일부분 가져오기
//URL은 /item/list
//파라미터는 pageno 1개 인데 없으면 1로 설정
app.get('/item/list',(req,res)=>{
    //파라미터 읽어오기
    let pageno = req.query.pageno;
    if(pageno == undefined){
        pageno = 1;
    }
    console.log(pageno);
    //브라우저에서 테스트
    //localhost:9000/item/list
    //localhost:9000/item/list?pageno=3

    //item 테이블에서 itemid를 가지고 내림차순 정렬해서
    //페이지 단위로 데이터 가져오기
    //select * from item order by itemid DESC limit 시작번호, 5
    //시작번호 = (pageno-1)*5

    connection.query("select * from goods order by itemid DESC limit ?, 5",[(parseInt(pageno)-1)*5],(err, results, fields)=>{
        if(err){
            console.log(err);
            res.json({"result":false});
        }else{
            res.json({"result":true,"list":results});
        }
    })
})

//에러 발생시 처리
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send(err.message);
});

//서버 구동
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});