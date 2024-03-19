import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import trips from '../utils/trips';
// import trips from '../utils/movies';

function TripDetails() { //add user as prop,
    //and access trips through user
    const [trips, setTrips] = 

    // used to navigate back home
    // const navigate = useNavigate();
    // const navigateToHome = () => {
    //     navigate('/home');
    //   };
    
    return (
    <div className="movie-details">
      <div className="info">
        <h1>Trips:</h1>
        {trips.map((trip, index) => (
            <div key={index} className="trip">
                <h4>Trip {index + 1}</h4>
                <p><strong>Movie:</strong> {trip.Movie}</p>
                <p><strong>Country:</strong> {trip.Country}</p>
                <p><strong>Location:</strong> {trip.Location}</p>
            </div>
        ))}
        <button onClick={navigateToHome}>Home</button>
      </div>
    </div>
  );
}

export default TripDetails