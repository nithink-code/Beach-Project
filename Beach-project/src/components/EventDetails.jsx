import { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EventDetails = ({ event, onAddReview }) => {
  const [showForm, setShowForm] = useState(false);

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

  const handleAddReview = (review) => {
    onAddReview(event.id, {
      id: Date.now(),
      user: "Current User", // In a real app, this would be the logged-in user
      rating: review.rating,
      comment: review.comment
    });
    setShowForm(false);
  };

  return (
    <div className="modal fade" id={`eventModal-${event.id}`} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{event.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="img-fluid rounded mb-3"
                />
                <div className="d-flex align-items-center mb-3">
                  {renderStars(event.rating)}
                  <span className="ms-2">{event.rating.toFixed(1)} ({event.reviews.length} reviews)</span>
                </div>
                <p><i className="bi bi-calendar-event me-2"></i> 
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p><i className="bi bi-geo-alt me-2"></i> {event.location}</p>
                <p>{event.description}</p>
              </div>
              <div className="col-md-6">
                <h5>Reviews</h5>
                {event.reviews.length > 0 ? (
                  event.reviews.map(review => (
                    <Review key={review.id} review={review} />
                  ))
                ) : (
                  <p>No reviews yet. Be the first to review!</p>
                )}
                
                <button 
                  className="btn btn-primary mt-3" 
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? 'Cancel' : 'Add Review'}
                </button>
                
                {showForm && (
                  <div className="mt-3">
                    <ReviewForm onSubmit={handleAddReview} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <Link to={`/ratings`} className="btn btn-success">
              Register / Buy Tickets
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;