const mongoose = require('mongoose');
// having connection issues 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);
module.exports = mongoose.connection;
