const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Chatting: [String], // 채팅 기록
    Number: Number
});
module.exports = mongoose.model('User', userSchema);