import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Notification from "./Notification";

function MovieDetails({ movies, currentUser }) {
  const [showNotification, setShowNotification] = useState(false);
  const [movie, setMovie] = useState({});
  const [tripDate, setTripDate] = useState("");

  let { id } = useParams();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  // for handle trips
  const handleAddTrip = async () => {
    console.log(currentUser);
    try {
      if (!tripDate || tripDate < new Date()) {
        console.error("Trip date is required.");
        setShowNotification(true);
        return;
      }
      // Need convertion since db expects DateTime
      const tripDateTime = new Date(tripDate);

      const reqBody = JSON.stringify({
        userId: currentUser.id,
        movieId: parseInt(id),
        date: tripDateTime,
        description: "string",
      });

      console.log(reqBody);
      const response = await fetch("http://localhost:5191/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBody,
      });
      if (response.ok) {
        const data = await response.json();
        console.log("success", data);
        navigate("/home");
      }
    } catch (er) {
      console.error("OBS!!! Something went wrong adding the trip...", er);
    }
    setShowNotification(true);
  };

  useEffect(() => {
    //const movieId = parseInt(id);
    const selectedMovie = movies.find((movie) => movie.id === parseInt(id));
    console.log("lalalal", selectedMovie);
    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      console.error(`Movie with id: ${id} could not be found`);
    }
  }, [id]);

  console.log("All movies: ", movie);

  return (
    <>
      <div className="movie-details">
        {movie && movie.locations ? (
          <>
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
              <h2>
                <strong>Location: </strong>
              </h2>
              {movie.locations.map((location) => (
                <div key={location.id}>
                  <p>Name: {location.location.locationName}</p>
                  <p>City: {location.location.city}</p>
                  <p>Country: {location.location.country}</p>
                  <p>Latitude: {location.location.latitude}</p>
                  <p>Longitude: {location.location.longitude}</p>
                </div>
              ))}
              <input
                type="date"
                value={tripDate}
                onChange={(e) => setTripDate(e.target.value)}
              />
              <button onClick={handleAddTrip}>Add Trip</button>
              <button onClick={navigateToHome}>Home</button>
              {showNotification && (
                <Notification message={`You need to enter a vaid date`} />
              )}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

MovieDetails.propTypes = {
  movies: PropTypes.array,
  currentUser: PropTypes.object,
};

export default MovieDetails;
