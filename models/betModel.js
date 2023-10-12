const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
    user: { type: String, required: true},
    value: { type: Number, required: true},
    odd: { type: Number, required: true},
    data: { type: Date, default: Date.now},
});

module.exports = mongoose.model('bet', betSchema)