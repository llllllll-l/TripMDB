import { PropTypes } from "prop-types";
import { getInitials } from "../utils/getInitials";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function Homepage({ movies, currentUser }) {
  const userInitials = getInitials(`${currentUser.username}`);
  // State to store movies
  const [filteredMovies, setFilteredMovies] = useState([]); // <-- updates

  useEffect(() => {
    setFilteredMovies(movies);
  }, []);

  const handleSearch = (term) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <div className="homepage">
        {/* Navigation */}
        <div className="navbar">
          {/* Navigation links */}
          <Navbar
            userInitials={userInitials}
            isAdmin={currentUser.role}
          ></Navbar>
        </div>

        <div className="body">
          {/* Search bar */}
          <Searchbar onSearch={handleSearch} />
        </div>

        {/* Movie feed */}
        <div className="movie-feed">
          {filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} />
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <Link to={`/movie/${movie.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Homepage.propTypes = {
  currentUser: PropTypes.object,
  movies: PropTypes.array,
};

export default Homepage;
