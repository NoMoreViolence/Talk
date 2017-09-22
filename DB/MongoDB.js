// 몽구스 모듈
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = () => {
    function connect() {
        mongoose.connect('127.0.0.1:27017/Talk', function(err) {
            if (err) {
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    mongoose.connection.on('error', function() {
        console.log('Connection Failed!');
    });
    require(__dirname + '/User.js'); // 유저 정보 스키마
    require(__dirname + '/ChatData.js');
};