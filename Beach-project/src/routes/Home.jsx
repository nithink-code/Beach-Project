// Home.js
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from '../components/Navbar'; // Import the Navbar component

const Home = () => {
  const backgroundImageURL = "https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar /> {/* Include the Navbar component at the top */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          textAlign: "center",
          backgroundImage: `url(${backgroundImageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="bg-primary bg-opacity-25 position-absolute top-0 bottom-0 start-0 end-0"
          style={{
            zIndex: -1,
          }}
        ></div>

        <h1>Welcome to Mangalore Beach Festival 🎉</h1>
        <p>Discover events, register, and explore beach attractions!</p>

        <div>
          <Link to="/events">
            <Button variant="primary" className="me-2">View All Events</Button>
          </Link>
          <Link to="/Login">
            <Button variant="primary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;