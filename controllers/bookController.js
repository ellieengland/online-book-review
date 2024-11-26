const Book = require('../models/Book');

// Task 1: Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch books' });
  }
};
