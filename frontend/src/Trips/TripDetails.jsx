import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { PropTypes } from "prop-types";
import Card from "react-bootstrap/Card"
import Navbar from "../Homepage/components/Navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import { getInitials } from "../utils/getInitials";
function TripDetails({ currentUser }) {
  //add user as prop,
  //and access trips through user
  const user = currentUser;
  const userInitials = getInitials(`${currentUser.username}`);
  console.log("currentUser: ", user);
  const GET_TRIPS = `http://localhost:5191/trips/${currentUser.id}`;
  const [trips, setTrips] = useState([]);

  //fetch trips
  useEffect(() => {
    console.log("fetching");
    fetch(GET_TRIPS)
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error("Error fetching trips:", error));
  }, []);

  //delete trips
  const handleDeleteTrip = (tripId) => {
    console.log("tripId",tripId);
    fetch(`http://localhost:5191/trips/${currentUser.id}/${tripId}`, {
      method: "DELETE",
    })
    .then((response) => {
      console.log("response: ", response);
      if (response.ok) {
        setTrips(trips.filter((trip) => trip.id !== tripId));
      } else {
        console.error("failed to delete trip");
      }
    })
    .catch((error) => {
      console.error("Error occured deleting the trip", error);
    });
  };

  return (
    <div className="movie-details mx-auto" style={{ width: '80vw' }}>
      <div className="info mt-5">
        <h3 className="text-center"><strong>Trips:</strong></h3>
        <div className="navbar">
          {/* Navigation links */}
          <Navbar userInitials={userInitials}></Navbar>
        </div>
        {trips ? (
          <>
            {/* Map all trips */}
            {trips.map((trip, index) => (
              <Card key={index} className="w-50 shadow-lg mx-auto mb-5">
                <Card.Header>
                  <h4>Trip {index + 1}</h4>
                </Card.Header>
                <Card.Body>
                  <p>
                    <strong>Movie:</strong> {trip.movie.title}
                  </p>
                  <p>
                    <strong>Date:</strong> {trip.date}
                  </p>
                  <p>
                    <strong>Description:</strong> {trip.description}
                  </p>
                  <p>
                    <strong>Destinations:</strong>
                  </p>
                  <ListGroup style={{ listStyle: 'none' }}>
                    {/* Map all attributes of the trip */}
                    {trip.locations.length > 0 ? trip.locations.map((locationObject, idx) => (
                      <ListGroup.Item key={idx}>
                        <ListGroup style={{ listStyle: 'none' }}>
                          <ListGroup.Item>
                            <strong>City:</strong> {locationObject.location.city},
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong> Country:</strong>{" "}
                            {locationObject.location.country},
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <strong> Location Name:</strong>{" "}
                            {locationObject.location.locationName}
                          </ListGroup.Item>
                        </ListGroup>
                      </ListGroup.Item>
                    )) : <p>No destinations for this trip</p>}
                  </ListGroup>
                  <Button onClick={() => handleDeleteTrip(trip.id)}>Delete</Button>
                </Card.Body>
              </Card>
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

TripDetails.propTypes = {
  currentUser: PropTypes.object,
};

export default TripDetails;
