import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const EventCard = ({ event }) => {
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
    <div className="card h-100 shadow-sm">
      <img 
        src={event.image} 
        className="card-img-top" 
        alt={event.name}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <div className="d-flex align-items-center mb-2">
          {renderStars(event.rating)}
          <span className="ms-2">{event.rating.toFixed(1)} ({event.reviews.length} reviews)</span>
        </div>
        <p className="card-text text-muted">
          <i className="bi bi-calendar-event me-2"></i>
          {new Date(event.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        <p className="card-text text-muted">
          <i className="bi bi-geo-alt me-2"></i>
          {event.location}
        </p>
        <p className="card-text">{event.description}</p>
      </div>
      <div className="card-footer bg-white border-top-0">
        <button 
          className="btn btn-outline-primary w-100"
          data-bs-toggle="modal" 
          data-bs-target={`#eventModal-${event.id}`}
        >
          View Details & Reviews
        </button>
      </div>
    </div>
  );
};

export default EventCard;