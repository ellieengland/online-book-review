// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, reviewController.addReview);
router.put('/', authMiddleware, reviewController.modifyReview);
router.delete('/', authMiddleware, reviewController.deleteReview);

module.exports = router;
