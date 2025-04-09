const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="search-bar">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search events or beaches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" type="button">
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchBar;