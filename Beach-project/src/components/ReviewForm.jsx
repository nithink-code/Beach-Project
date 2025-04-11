import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Leave a Review</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <div className="d-flex">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="d-none"
                    />
                    <FaStar
                      className="star"
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size={30}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">Your Review</label>
            <textarea
              className="form-control"
              id="comment"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;