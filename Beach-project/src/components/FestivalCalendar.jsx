import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import eventsData from '../data/events.json';

const FestivalCalendar = () => {
  const [events, setEvents] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const filteredEvents = events.filter(event => {
    const typeMatch = filterType === 'All' || event.type === filterType;
    const dateMatch =
      (!startDate || new Date(event.date) >= new Date(startDate)) &&
      (!endDate || new Date(event.date) <= new Date(endDate));
    return typeMatch && dateMatch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Upcoming Festivals and Events</h1>

      <div className="mb-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-3">
            <label htmlFor="filterType" className="form-label">Filter by Type:</label>
            <select
              className="form-select"
              id="filterType"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Festival">Festival</option>
              <option value="Event">Event</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="startDate" className="form-label">Start Date:</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="endDate" className="form-label">End Date:</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-outline-secondary" onClick={() => {
              setFilterType('All');
              setStartDate('');
              setEndDate('');
            }}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredEvents.map(event => (
            <div key={event.id} className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src={event.imageUrl}
                  className="card-img-top"
                  alt={event.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-subtitle mb-2 text-muted">{event.type} - {formatDate(event.date)}</p>
                  <p className="card-text">{event.description}</p>
                </div>
                <div className="card-footer bg-light border-top">
                  <small className="text-muted">Date: {formatDate(event.date)}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="lead">No events found matching your criteria.</p>
      )}
    </div>
  );
};

export default FestivalCalendar;