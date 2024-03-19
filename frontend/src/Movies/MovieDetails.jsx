import { useState } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/movies";
import Notification from "./Notification";

function MovieDetails() {
  // add logic to set movie, from params/props
  // const [movie, setMovie] = useState({});
  console.log(movies);
  const [showNotification, setShowNotification] = useState(false);
  const movie = movies[0];

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

  return (
    <div className="movie-details">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="info">
        <h1>{movie.Title}</h1>
        <p>
          <strong>Rating: :</strong> {movie.imdbRating}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <strong>Country:</strong> {movie.Country}
        </p>
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Description:</strong> {movie.Plot}
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
  );
}

export default MovieDetails;
