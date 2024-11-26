const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/books', bookRoutes);

module.exports = app;
