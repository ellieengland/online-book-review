// controllers/reviewController.js
const Review = require('../models/Review');
const Book = require('../models/Book');

exports.addReview = async (req, res) => {
  const { bookId, review } = req.body;
  const newReview = new Review({ book: bookId, user: req.user.id, review });
  await newReview.save();
  res.json(newReview);
};

exports.modifyReview = async (req, res) => {
  const { reviewId, newReview } = req.body;
  const review = await Review.findOneAndUpdate(
    { _id: reviewId, user: req.user.id },
    { review: newReview },
    { new: true }
  );
  res.json(review || { message: 'Not authorized or review not found' });
};

exports.deleteReview = async (req, res) => {
  const { reviewId } = req.body;
  const result = await Review.findOneAndDelete({ _id: reviewId, user: req.user.id });
  res.json(result || { message: 'Not authorized or review not found' });
};
