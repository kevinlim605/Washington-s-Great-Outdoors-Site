const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishingLocationSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
      unique: true,
    },
    descriptor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FishingLocation = mongoose.model(
  'FishingLocation',
  fishingLocationSchema
);

module.exports = FishingLocation;
