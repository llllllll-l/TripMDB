import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

function TripDetails({ currentUser }) {
  //add user as prop,
  //and access trips through user
  const user = currentUser;
  console.log("currentUser: ", user);
  const GET_TRIPS = `http://localhost:5191/trips/${currentUser.id}`;
  const [trips, setTrips] = useState([]);
  // used to navigate back home
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  //fetch trips
  useEffect(() => {
    console.log("fetching");
    fetch(GET_TRIPS)
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error("Error fetching trips:", error));
  }, []);

  return (
    <div className="movie-details">
      <div className="info">
        <h1>Trips:</h1>
        {trips ? (
          <>
            {/* Map all trips */}
            {trips.map((trip, index) => (
              <div key={index} className="trip">
                <h4>Trip {index + 1}</h4>
                <p>
                  <strong>Movie:</strong> {trip.movie.title}
                </p>
                <p>
                  <strong>Date:</strong> {trip.date}
                </p>
                <p>
                  <strong>Description:</strong> {trip.description}
                </p>
                <ul>
                  {/* Map all attributes of the trip */}
                  {trip.locations.map((locationObject, idx) => (
                    <li key={idx}>
                      <strong>City:</strong> {locationObject.location.city},
                      <strong> Country:</strong>{" "}
                      {locationObject.location.country},
                      <strong> Location Name:</strong>{" "}
                      {locationObject.location.locationName}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
        {/* homebutton */}
        <button onClick={navigateToHome}>Home</button>
      </div>
    </div>
  );
}

TripDetails.propTypes = {
  currentUser: PropTypes.object,
};

export default TripDetails;
