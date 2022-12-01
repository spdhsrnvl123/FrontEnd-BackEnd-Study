const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
});

module.exports = router;

//user.js 파일을 만들고 user가 포함된 요청을 처리하는