const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Chatting: String, // 채팅 기록
    Number: String // 채팅 날린 사람 정보
});
module.exports = mongoose.model('Message', userSchema);