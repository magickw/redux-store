const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://peterguo:pgdEbfRDEPFzpsFD@cluster0.objtj.mongodb.net/redux-store?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/redux-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
