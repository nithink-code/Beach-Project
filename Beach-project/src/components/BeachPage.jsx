// src/components/BeachPage.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const beachData = [
  {
    id: 1,
    name: 'Panambur Beach',
    location: 'Near New Mangalore Port',
    shortDescription: 'Famous for its clean shores and water sports.',
    attractions: ['Jet skiing', 'Parasailing', 'Camel rides', 'Food stalls'],
    facilities: ['Parking', 'Restrooms', 'Lifeguards'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Panambur_Beach_Mangalore.jpg', // Placeholder image
    mapUrl: 'https://maps.google.com/?q=13.0083,74.7773', // Example Google Maps URL
  },
  {
    id: 2,
    name: 'Tannirbhavi Beach',
    location: 'Ferry ride from Sultan Battery',
    shortDescription: 'Known for its unique tree park and sunset views.',
    attractions: ['Tree park', 'Sunset point', 'Boating'],
    facilities: ['Parking (near ferry)', 'Basic restrooms'],
    image: 'https://karnatakatourism.org/wp-content/uploads/2021/02/my-experience-at-tannirbhav-beach-park-karnataka.jpg', // Placeholder image
    mapUrl: 'https://maps.google.com/?q=12.9386,74.8347', // Example Google Maps URL
  },
  {
    id: 3,
    name: 'Someshwar Beach',
    location: 'South of Mangalore city',
    shortDescription: 'Features the iconic Rudreshwara Temple and rocky terrain.',
    attractions: ['Rudreshwara Temple', 'Rocky cliffs', 'Peaceful environment'],
    facilities: ['Limited parking'],
    image: 'https://www.mangalurutaxi.com/uploads/image/top-travel-packages/top-places-to-visit-in-mangalore/someshwar-temple-and-beach.jpg', // Placeholder image
    mapUrl: 'https://maps.google.com/?q=12.8478,74.8403', // Example Google Maps URL
  },
];

function BeachCard({ beach }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img src={beach.image} alt={beach.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{beach.name}</h5>
          <p className="card-text">{beach.shortDescription}</p>
          <ul className="list-unstyled mt-auto">
            <li><strong>Location:</strong> {beach.location}</li>
            <li><strong>Attractions:</strong> {beach.attractions.join(', ')}</li>
            <li><strong>Facilities:</strong> {beach.facilities.join(', ')}</li>
          </ul>
          <a href={beach.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info mt-2">
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
}

function BeachList() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Explore the Beaches of Mangalore</h2>
      <div className="row">
        {beachData.map((beach) => (
          <BeachCard key={beach.id} beach={beach} />
        ))}
      </div>
      {/* Basic Map Integration using an iframe (Consider using a proper map library) */}
      <div className="mt-4">
        <h3 className="mb-3 text-center">Beach Locations</h3>
        <div className="embed-responsive embed-responsive-16by9" style={{ height: '400px' }}>
          <iframe
            title="Mangalore Beaches Map"
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124483.7525538853!2d74.77382934179689!3d12.914298399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smangalore%20beaches!5e0!3m2!1sen!2sin!4v1712658499876!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-muted mt-2 text-center">Note: This is a general map showing the Mangalore area. Click on "View on Map" for specific beach locations.</p>
      </div>
    </div>
  );
}

function BeachPage() {
  return (
    <div>
      <BeachList />
    </div>
  );
}

export default BeachPage;