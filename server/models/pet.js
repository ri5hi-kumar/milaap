const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    adopted: {
        type: Boolean,
        required: true,
    },
    applicants: {
        type: Array,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: 'male'
    },
    pictures: [
        { url: String }
    ],
    vaccinated: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        default: null
    },
}, { timestamps: true })

module.exports = mongoose.model('Pet', petSchema);