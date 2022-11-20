"use strict";
//ECMASCRIPT의 문법을 준수하겠다.

//모듈
const express = require("express");
const app = express()

const PORT = 3000;
//라우팅
const home = require("./routes/home/index")

// 앱 세팅
app.set("views","./views");
app.set("view engine","ejs");

app.use("/", home); // use-> 미들웨어를 등록해주는 메서드.

app.listen(PORT,()=>{
    console.log("서버 가동")
})