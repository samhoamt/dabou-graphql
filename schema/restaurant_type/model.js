"use strict"
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const restaurantTypeSchema = new Schema({
  name: String
});

module.exports = mongoose.model('restaurantType', restaurantTypeSchema);