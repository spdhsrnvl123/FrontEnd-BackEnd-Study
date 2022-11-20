"use strict";
//ECMASCRIPT의 문법을 준수하겠다.

const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("home/index")
})

router.get("/login",(req,res)=>{
    res.render("home/login")
})

module.exports = router;