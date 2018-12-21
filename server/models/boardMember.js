const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardMemberSchema = new Schema({
    name: String,
    role: String
})

module.exports = mongoose.model('BoardMember', boardMemberSchema);
