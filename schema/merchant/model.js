"use strict"
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { hashSync, compare } from 'bcrypt';

const merchantSchema = new Schema({
  _id: String,
  password: String,
  email: String,
  contact_number: String,
  bank_number: String,
  bank_account: String,
  currency: String,
  amount: Number,
  tm_register: {
    type: Date,
    default: Date.now
  }
});

merchantSchema.pre('save', function(next){
  this.password = hashSync(this.password.trim(), 10);
  next();
});

merchantSchema.pre('findOneAndUpdate', function(next){
  if(this._update.password){
    this._update.password = hashSync(this._update.password.trim(), 10);
  }
  
  next();
});

merchantSchema.methods.verifyPassword = function(merchant, pass, cb) {
  compare(pass, merchant.password, (err, valid) => {
    cb(err, valid);
  });
}

module.exports = mongoose.model('merchant', merchantSchema);