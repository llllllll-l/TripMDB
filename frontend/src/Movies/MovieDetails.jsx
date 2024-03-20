import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Notification from "./Notification";
import { Card, Button, ListGroup, Form } from "react-bootstrap";
import { getInitials } from "../utils/getInitials";
import Navbar from "../Homepage/components/Navbar";

function MovieDetails({ movies, currentUser }) {
  const [showNotification, setShowNotification] = useState(false);
  const [movie, setMovie] = useState({});
  const [tripDate, setTripDate] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const userInitials = getInitials(`${currentUser.username}`);

  let { id } = useParams();
  const navigate = useNavigate();

  // for handle trips
  const handleAddTrip = async () => {
    console.log(currentUser);
    try {
      if (!tripDate || tripDate < new Date()) {
        console.error("Trip date is required.");
        setShowNotification(true);
        return;
      }
      // Need conversion since the database expects DateTime
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
      <div className="navbar">
        {/* Navigation links */}
        <Navbar userInitials={userInitials}></Navbar>
      </div>
      <div className="movie-details mx-auto" style={{ width: '80vw' }}>
        {movie && movie.locations ? (
          <Card
            className="w-50 shadow-lg mx-auto mb-5"
            style={{ width: '400px', maxWidth: '100%', height: 'auto' }}
          >
            <div className="poster bg-dark d-flex justify-content-center align-items-center">
              <img
                src={movie.image}
                style={{ width: '300px', height: 'auto', maxHeight: '500px' }}
                className="img-fluid"
              />
            </div>
            <div className="movie-content d-flex ">

              <div className="info pr-5">
                <h1>{movie.title}</h1>
                <p>
                  <strong>Release: </strong> {movie.release}
                </p>
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
              </div>
              <div className="actions ml-auto">
                <Card style={{ width: "100%", minWidth: "300px" }} >
                  <Card.Title className="mt-4"><p className="text-center"><strong>Book this Trip!</strong></p></Card.Title>
                  <Form>
                    <Card.Body className="justify-content-center">
                      <p className="text-center">Select a date</p>
                      <div className="d-flex justify-content-center mx-auto">
                        <input
                          type="date"
                          value={tripDate}
                          onChange={(e) => setTripDate(e.target.value)}
                        />
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <div className="d-flex justify-content-center mx-auto">
                        <Button
                          onClick={handleAddTrip}>Add Trip
                        </Button>
                      </div>
                    </Card.Footer>
                  </Form>
                </Card>
              </div>
            </div>

            <Button className="w-50 mx-auto mt-5" onClick={() => setShowLocations(!showLocations)}>
              {showLocations ? 'Hide Locations' : 'Show Locations'}
            </Button>
            {showLocations && (
              <>
                <p>
                  <strong>Locations: </strong>
                </p>
                <ListGroup>
                  {movie.locations.map((location) => (
                    <ListGroup.Item key={location.id}>
                      <ListGroup>
                        <ListGroup.Item><p>Name: {location.location.locationName}</p></ListGroup.Item>

                        <ListGroup.Item><p>City: {location.location.city}</p></ListGroup.Item>
                        <ListGroup.Item><p>Country: {location.location.country}</p></ListGroup.Item>
                        <ListGroup.Item> <p>Latitude: {location.location.latitude}</p></ListGroup.Item>
                        <ListGroup.Item> <p>Longitude: {location.location.longitude}</p></ListGroup.Item>

                      </ListGroup>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </>
            )}
            <br></br>

            {showNotification && (
              <Notification message={`You need to enter a valid date`} />
            )}
          </Card>
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
