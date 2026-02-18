const mongoose = require('mongoose');
impo
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jalandharhardware_db_user:yJ27yzjSzjv9LWp0@jalandharhardware.jxag6n2.mongodb.net/?appName=JalandharHardware');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;