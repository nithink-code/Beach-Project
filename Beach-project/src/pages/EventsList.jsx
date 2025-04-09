import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const eventsData = [
  {
    id: 1,
    name: 'Beach Music Festival',
    category: 'Music',
    description: 'Enjoy live performances by top artists on the beach.',
    image: '/assets/music.jpg',
    location: 'Panambur Beach',
    date: '2025-04-20',
    time: '6:00 PM'
  },
  {
    id: 2,
    name: 'Street Fiesta',
    category: 'Food',
    description: 'Taste a variety of cuisines from local and national chefs.',
    image: '/assets/streetFeast.jpg',
    location: 'Tannirbhavi Beach',
    date: '2025-04-22',
    time: '12:00 PM'
  },
  {
    id: 3,
    name: 'Kite Festival',
    category: 'Kite',
    description: 'Taste a variety of cuisines from local and national chefs.',
    image: '/assets/kitefest.png',
    location: 'Tannirbhavi Beach',
    date: '2025-04-24',
    time: '4:00 PM'
  },
  {
    id: 4,
    name: 'Beach Volleyball Tournament',
    category: 'Sports',
    description: 'Participate in or watch an exciting beach volleyball competition.',
    image: '/assets/volleyball.png',
    location: 'Someshwar Beach',
    date: '2025-04-25',
    time: '10:00 AM'
  },
  {
    id: 5,
    name:'Rock @Beach',
    category: 'Music',
    description: 'Enjoy live performances by top artists on the beach.',
    image: '/assets/rockmusic.jpeg',
    location: 'Someshwar Beach',
    date: '2025-04-27',
    time: '6:00 PM'
  },
  {
    id: 6,
    name: "Foodies' Feast",
    category: 'Food',
    description: 'Taste a variety of cuisines from local and national chefs.',
    image: '/assets/foodfeast.jpeg',
    location: 'Kaup Beach',
    date: '2025-05-3',
    time: '9:00 AM'
  },
  {
    id: 7,
    name: 'PATANGA-Kite Fest',
    category: 'Kite',
    description: 'Taste a variety of cuisines from local and national chefs.',
    image: '/assets/patanga.jpg',
    location: 'Kaup Beach',
    date: '2025-05-2',
    time: '3:30 PM'
  },
  {
    id: 8,
    name: 'Triathlon',
    category: 'Sports',
    description: 'Participate in or watch an exciting beach volleyball competition.',
    image: '/assets/triathlon.png',
    location: 'Tannirbavi Beach',
    date: '2025-04-23',
    time: '10:00 AM'
  }

];

const categories = ['All', 'Music', 'Food', 'Sports','Kite'];

const EventListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents =
    selectedCategory === 'All'
      ? eventsData
      : eventsData.filter(event => event.category === selectedCategory);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formCategory">
          <Form.Label column sm={2}>Filter by Category</Form.Label>
          <Col sm={4}>
            <Form.Select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
      <Row>
        {filteredEvents.map(event => (
          <Col md={4} className="mb-4 d-flex align-items-stretch" key={event.id}>
            <Card style={{minHeight:'100%'}} className="shadow-sm w-100">
              <Card.Img variant="top" src={event.image} alt={event.name}  style={{height:'200px'}}/>
              <Card.Body className=' d-flex flex-column'>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text><strong>Location:</strong> {event.location}</Card.Text>
                <Card.Text><strong>Date:</strong> {event.date}</Card.Text>
                <Card.Text><strong>Time:</strong> {event.time}</Card.Text>
                <Button variant="primary" className='mt-auto'>Register / Buy Tickets</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventListingPage;
