const mongoose = require('mongoose');
const Book = require('./models/Book');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084' },
  { title: '1984', author: 'George Orwell', isbn: '9780451524935' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565' },
  { title: 'Moby Dick', author: 'Herman Melville', isbn: '9781503280786' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '9781936594290' },
];

// Insert books into the database
Book.insertMany(books)
  .then(() => {
    console.log('Books added successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error adding books:', error);
    mongoose.connection.close();
  });
