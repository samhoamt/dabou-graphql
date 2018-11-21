"use strict"
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
  name: String
});

module.exports = mongoose.model('cuisine', cuisineSchema);