const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Task 1: Get all books
router.get('/', bookController.getBooks);

// Task 2: Get books by ISBN
router.get('/isbn/:isbn', bookController.getBookByISBN);

// Task 3: Get books by author
router.get('/author/:author', bookController.getBooksByAuthor);

// Task 4: Get books by title
router.get('/title/:title', bookController.getBooksByTitle);

module.exports = router;
