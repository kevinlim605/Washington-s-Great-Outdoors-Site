const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorySchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Directory = mongoose.model('Directory', directorySchema);

module.exports = Directory;