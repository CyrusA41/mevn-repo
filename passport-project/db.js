const mongoose = require('mongoose');

// Replace <password> with your MongoDB Atlas password

const mongoURI = 'mongodb+srv://admin:I2DviaBkL7sr4I9S@cyrusics4u.f3ehg78.mongodb.net?retryWrites=true&w=majority`'

  const connectToMongoDB = async (uri) => {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
    }
  };

  connectToMongoDB(mongoURI)
  
module.exports = connectToMongoDB;