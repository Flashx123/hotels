const mongoose = require('mongoose')

const mongoUrl = 'mongodb://localhost:27017/ContactDetails'

async function connectDB() {
    try {
      await mongoose.connect(mongoUrl); /// pasuses the execution of the connection until a promise is resolvednp
      console.log('MongoDB is connected');
    } catch (err) {
      console.error('MongoDB connection error:', err);
    }
  }

  connectDB();

  const db = mongoose.connection;

  db.on('disconnected', () => {
    console.log('MongoDB is disconnected');
  });

  module.exports = db;