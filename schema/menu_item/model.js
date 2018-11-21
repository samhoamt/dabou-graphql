"use strict"
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: String,
  restaurant_id: String,
  menus: Array,
  ingredient: Array,
  spicy: Boolean,
  description: String,
  price: Number,
  promotion_price: Number,
  promotion_percentage: Number
});

module.exports = mongoose.model('menuItem', menuItemSchema);