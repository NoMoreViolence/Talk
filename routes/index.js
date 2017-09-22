// express 모듈
const express = require('express');
const router = express.Router();
// 몽고 디비
const Client = require('mongodb').MongoClient;

// 유저 정보 디비, 블로그 포스트 디비
const User = require(__dirname + '/User.js');
const ChatData = require(__dirname + '/ChatData.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;