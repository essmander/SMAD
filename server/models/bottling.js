const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bottlingSchema = new Schema({
    bottlingId : Number,
    name: String,
    age: Number,
    alcohol: String,
    bottled: String,
    barrelInfo: String,
    bottleSize: String,
    price: Number,
    AmountOfBottles: Number,
    pictureURL: String
})

module.exports = mongoose.model('Bottling', bottlingSchema);
