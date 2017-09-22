const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, trim: true }, // 중복 X, 공백 제거
    id: { type: String, unique: true, trim: true }, // 중복 X, 공백 제거
    password: { type: String, trim: true }, // 공백제거
    email: { type: String, unique: true, trim: true }, // 중복 X, 공백제거
    age: Number, // 나이
    PeopleNumber: Number, // 사람 고유 번호
});
module.exports = mongoose.model('User', userSchema);