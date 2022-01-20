const mongoose = require('mongoose');
// having connection issues 
// mongoose.connect( 'mongodb+srv://VbProglobyte:Vb784839@cluster0.5alc9.mongodb.net/books?retryWrites=true&w=majority' || 'mongodb://localhost/books', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/books',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);
module.exports = mongoose.connection;
