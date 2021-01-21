const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikingLocationSchema = new Schema({
    location: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    descriptor: {
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

const BikingLocation = mongoose.model('BikingLocation', bikingLocationSchema);

module.exports = BikingLocation