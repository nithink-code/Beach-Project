import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SearchBar from './components/SearchBar'
import EventCard from './components/EventCard'
import EventDetails from './components/EventDetails' // Add this import
import './App.css'

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Sunset Beach Festival",
      date: "2023-08-15",
      location: "Malibu Beach, CA",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      description: "Annual beach festival with live music, food trucks, and water sports.",
      rating: 4.5, // Add rating field
      reviews: [ // Add reviews array
        { 
          id: 1, 
          user: "Alex Johnson", 
          rating: 5, 
          comment: "Amazing atmosphere and great music!",
          date: "2023-08-16"
        },
        { 
          id: 2, 
          user: "Sarah Miller", 
          rating: 4, 
          comment: "Loved the food options but crowded.",
          date: "2023-08-17"
        }
      ]
    },
    {
      id: 2,
      name: "Oceanfront Yoga Retreat",
      date: "2023-09-02",
      location: "Santa Monica Beach, CA",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      description: "Morning yoga sessions with ocean views and wellness workshops.",
      rating: 4.2, // Add rating field
      reviews: [ // Add reviews array
        { 
          id: 1, 
          user: "Michael Chen", 
          rating: 5, 
          comment: "Perfect way to start the day!",
          date: "2023-09-03"
        }
      ]
    },
    {
      id: 3,
      name: "Beach Volleyball Championship",
      date: "2023-08-20",
      location: "Venice Beach, CA",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1493&q=80",
      description: "Professional beach volleyball tournament with food and entertainment.",
      rating: 4.7, // Add rating field
      reviews: [] // Empty array for no reviews yet
    },
    {
      id: 4,
      name: "Coastal Business Expo",
      date: "2023-09-10",
      location: "Huntington Beach, CA",
      image: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      description: "Networking event for coastal businesses with keynote speakers.",
      rating: 4.0, // Add rating field
      reviews: [] // Empty array for no reviews yet
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Function to calculate new average rating
  const calculateNewRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  };

  // Function to handle adding new reviews
  const handleAddReview = (eventId, newReview) => {
    setEvents(prevEvents => 
      prevEvents.map(event => 
        event.id === eventId 
          ? { 
              ...event, 
              reviews: [...event.reviews, newReview],
              rating: calculateNewRating([...event.reviews, newReview])
            } 
          : event
      )
    );
  };

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="container my-5">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="row mt-4">
          <h2 className="mb-4">Featured Events</h2>
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="col-md-6 col-lg-3 mb-4">
                <EventCard event={event} />
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No events found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Add EventDetails modals */}
      {filteredEvents.map(event => (
        <EventDetails 
          key={`modal-${event.id}`} 
          event={event} 
          onAddReview={handleAddReview} 
        />
      ))}
    </div>
  );
}

export default App;