const mongoose = require('mongoose');
const mongodb = require('./config').mongodb;

const options = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true
};

const dbURI = `mongodb://${mongodb.hostname}:${mongodb.port}/${mongodb.db}`;

const db = mongoose.connection;

var connectDB = () => {
  mongoose.connect(dbURI, options);
};

var connect = () => {
  connectDB();

  db.once('open', () => console.log('MongoDB running')).on('error', err => console.error(err));
  db.on('connecting', () => console.log('connecting to MongoDB...'));
  db.on('connected', () => console.log('MongoDB connected!'));
  db.on('reconnected', () => console.log('MongoDB reconnected!'));
  db.on('disconnected', () => {
    console.log('MongoDB disconnected!')
    connectDB();
  });
};

module.exports = {
  connect: connect
};