import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const BeachWebsiteChoices = () => {
  const navigate = useNavigate();

  const handleViewBeaches = () => {
    navigate('/beaches'); // This will redirect to the beaches page
  };

  const handleDiscoverFestivals = () => {
    navigate('/festivals');
  };

  const handleCheckEvents = () => {
    navigate('/events');
  };
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light py-5">
      <h1 className="text-primary mb-5 display-4 fw-bold">Mangalore Beach Explorer</h1>
      
      <div className="row g-4 justify-content-center w-100">
        {/* Choice 1: Explore Beaches */}
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center p-4 d-flex flex-column">
              <h2 className="card-title text-info mb-3">1. Explore Beaches of Mangalore</h2>
              <p className="card-text text-muted mb-4 flex-grow-1">
                Discover the most beautiful beaches in the coastal city of Mangalore
              </p>
              <button className="btn btn-primary btn-lg align-self-center px-4" 
               onClick={handleViewBeaches}>
                View Beaches
              </button>
            </div>
          </div>
        </div>
        
        {/* Choice 2: Explore Festivals */}
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center p-4 d-flex flex-column">
              <h2 className="card-title text-info mb-3">2. Explore the Festivals</h2>
              <p className="card-text text-muted mb-4 flex-grow-1">
                Experience the vibrant culture through Mangalore's unique festivals
              </p>
              <button className="btn btn-primary btn-lg align-self-center px-4"
               onClick={handleDiscoverFestivals}>
                Discover Festivals
              </button>
            </div>
          </div>
        </div>
        
        {/* Choice 3: Explore Events & Ratings */}
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center p-4 d-flex flex-column">
              <h2 className="card-title text-info mb-3">3. Explore Events & Ratings</h2>
              <p className="card-text text-muted mb-4 flex-grow-1">
                Find upcoming beach events and see ratings from fellow travelers
              </p>
              <button className="btn btn-primary btn-lg align-self-center px-4"
              onClick={handleCheckEvents}>
                Check Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachWebsiteChoices;