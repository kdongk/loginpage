"use strict";

const express = require('express');
const app = express();

const home = require('./src/routes/home');

app.set('views', './src/views');
app.set('view engine', "ejs");
app.use(express.static(`${__dirname}/src/public`)); // 정적경로로 추가

app.use('/', home);    // use -> 미들 웨어 등록 메서드

module.exports = app;