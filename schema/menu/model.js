"use strict"
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: String,
  restaurant_id: String,
  items: Array
});

module.exports = mongoose.model('menu', menuSchema);