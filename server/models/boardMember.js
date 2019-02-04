const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardMemberSchema = new Schema({
    memberId: Number,
    name: String,
    role: String,
    pictureURL: String
    
})

module.exports = mongoose.model('BoardMember', boardMemberSchema);
