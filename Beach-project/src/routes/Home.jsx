import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Mangalore Beach Festival 🎉</h1>
      <p>Discover events, register, and explore beach attractions!</p>

      {/* Button that links to the events page */}
      <Link to="/events">
        <Button variant="primary">View All Events</Button>
      </Link>
    </div>
  );
};

export default Home;
