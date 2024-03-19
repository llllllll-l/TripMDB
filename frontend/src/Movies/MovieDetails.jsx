import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Notification from "./Notification";

function MovieDetails({ movies }) {
  const [showNotification, setShowNotification] = useState(false);
  const [movie, setMovie] = useState({});

  let { id } = useParams();

  // used to navigate back home
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  // for handle trips
  const handleAddTrip = () => {
    // add logic to add trip
    setShowNotification(true);
  };

  useEffect(() => {
    const movieId = parseInt(id);
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      console.error(`Movie with id: ${id} could not be found`);
    }
  }, [id, movies]);

  return (
    <>
      <div className="movie-details">
        <div className="poster">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="info">
          <h1>{movie.title}</h1>
          <p>
            <strong>Release: </strong> {movie.release}
          </p>
          {/* //TOTO Add location as th move does not currently have a location */}
          <p>
            <strong>Rating: </strong> {movie.rating}
          </p>
          <p>
            <strong>Director: </strong> {movie.director}
          </p>

          <p>
            <strong>Year :</strong> {movie.release}
          </p>
          <p>
            <strong>Description: </strong> {movie.description}
          </p>
          <button onClick={handleAddTrip}>Add Trip</button>
          <button onClick={navigateToHome}>Home</button>
          {showNotification && (
            <Notification
              message={`Trip to location(s): ${movie.Country}, with movie-theme: ${movie.Title} was successfully added to your trips!`}
            />
          )}
        </div>
      </div>
    </>
  );
}

MovieDetails.propTypes = {
  movies: PropTypes.array,
};

export default MovieDetails;
