import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Review = ({ review }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{review.user}</h5>
          <div className="d-flex">
            {renderStars(review.rating)}
          </div>
        </div>
        <p className="card-text">{review.comment}</p>
        <small className="text-muted">Posted on {new Date().toLocaleDateString()}</small>
      </div>
    </div>
  );
};

export default Review;