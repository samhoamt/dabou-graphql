"use strict"
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  typeId: String,
  cuisineId: String,
  merchant: String,
  cityCode: String,
  address: String,
  postal: String,
  geoLocation: String,
  tm_open: {
    type: String,
    default: "11:00 AM"
  },
  tm_close: {
    type: String,
    default: "10:00 PM"
  },
  delivery_fee: {
    type: Number,
    default: 0.0
  },
  tm_register: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('restaurant', restaurantSchema);