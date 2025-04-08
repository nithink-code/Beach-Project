const HeroSection = () => {
  return (
    <div className="hero-section position-relative">
      <div className="hero-image"></div>
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="hero-content position-relative text-white text-center py-5">
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-4">Discover Amazing Beach Events</h1>
          <p className="lead mb-5">Find the best festivals, sports, and commercial events at beaches near you</p>
          <button className="btn btn-light btn-lg px-4 me-2">Explore Events</button>
          <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;