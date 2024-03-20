import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Login/RegisterPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetails from "./Movies/MovieDetails";
import TripDetails from "./Trips/TripDetails";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [dbMovies, setDbMovies] = useState([]);

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    console.log("Checking login");
    try {
      const response = await fetch(
        "http://localhost:5191/authentication/login", //<-- need to change after the final deployment
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data);
        navigate("/home");
      }
    } catch (er) {
      console.error("OBS!!! Something went wrong trying to log in: ", er);
    }
  };

  useEffect(() => {
    console.log("Fetching moves");
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5191/movies");

        if (response.ok) {
          const data = await response.json();
          setDbMovies(data);
          console.log("Fetching moves - done");
        }
      } catch (er) {
        console.error("OBS!!! Something went wron fetching the movies: ", er);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movie/:id" element={<MovieDetails movies={dbMovies} />} />
        <Route path="/trips" element={<TripDetails currentUser={currentUser}/>} />
        <Route
          path="/home"
          element={<Homepage movies={dbMovies} currentUser={currentUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
