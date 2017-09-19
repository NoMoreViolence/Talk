const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, trim: true }, // 중복 X
    password: { type: String, trim: true }, // 공백제거
    email: { type: String, unique: true, trim: true }, // 중복 X, 공백제거
    age: Number, // 나이
    PeopleNumber: String, // 사람 고유 번호
    ChatLOG: [String] // 채팅 번호 기록
});
module.exports = mongoose.model('User', userSchema);