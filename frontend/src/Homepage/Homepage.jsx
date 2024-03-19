import { PropTypes } from "prop-types";
import { getInitials } from "../utils/getInitials";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function Homepage({ currentUser }) {
  const userInitials = getInitials(`${currentUser.username}`);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const moviesData = [
    {
      id: 1,
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Year: "2011",
      Rated: "PG-13",
      Released: "15 Jul 2011",
      Runtime: "130 min",
      Genre: "Adventure, Family, Fantasy",
      Director: "David Yates",
      Writer: "Steve Kloves, J.K. Rowling",
      Actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
      Plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
      Language: "English, Latin",
      Country: "United Kingdom, United States",
      Awards: "Nominated for 3 Oscars. 48 wins & 95 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.1/10" },
        { Source: "Rotten Tomatoes", Value: "96%" },
        { Source: "Metacritic", Value: "85/100" },
      ],
      Metascore: "85",
      imdbRating: "8.1",
      imdbVotes: "941,773",
      imdbID: "tt1201607",
      Type: "movie",
      DVD: "20 Jul 2013",
      BoxOffice: "$381,447,587",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },

    {
      id: 2,
      Title: "Jurassic Park",
      Year: "1993",
      Rated: "PG-13",
      Released: "11 Jun 1993",
      Runtime: "127 min",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Steven Spielberg",
      Writer: "Michael Crichton, David Koepp",
      Actors: "Sam Neill, Laura Dern, Jeff Goldblum",
      Plot: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      Language: "English, Spanish",
      Country: "United States",
      Awards: "Won 3 Oscars. 44 wins & 27 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.2/10" },
        { Source: "Rotten Tomatoes", Value: "92%" },
        { Source: "Metacritic", Value: "68/100" },
      ],
      Metascore: "68",
      imdbRating: "8.2",
      imdbVotes: "1,060,897",
      imdbID: "tt0107290",
      Type: "movie",
      DVD: "18 May 2015",
      BoxOffice: "$407,185,075",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      id: 3,
      Title: "Blade Runner",
      Year: "1982",
      Rated: "R",
      Released: "25 Jun 1982",
      Runtime: "117 min",
      Genre: "Action, Drama, Sci-Fi",
      Director: "Ridley Scott",
      Writer: "Hampton Fancher, David Webb Peoples, Philip K. Dick",
      Actors: "Harrison Ford, Rutger Hauer, Sean Young",
      Plot: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
      Language:
        "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
      Country: "United States, United Kingdom",
      Awards: "Nominated for 2 Oscars. 13 wins & 22 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.1/10" },
        { Source: "Rotten Tomatoes", Value: "89%" },
        { Source: "Metacritic", Value: "84/100" },
      ],
      Metascore: "84",
      imdbRating: "8.1",
      imdbVotes: "817,983",
      imdbID: "tt0083658",
      Type: "movie",
      DVD: "09 Jun 2013",
      BoxOffice: "$32,914,489",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      id: 4,
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      Year: "2003",
      Rated: "PG-13",
      Released: "09 Jul 2003",
      Runtime: "143 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "Gore Verbinski",
      Writer: "Ted Elliott, Terry Rossio, Stuart Beattie",
      Actors: "Johnny Depp, Geoffrey Rush, Orlando Bloom",
      Plot: "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
      Language: "English",
      Country: "United States",
      Awards: "Nominated for 5 Oscars. 38 wins & 104 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.1/10" },
        { Source: "Rotten Tomatoes", Value: "80%" },
        { Source: "Metacritic", Value: "63/100" },
      ],
      Metascore: "63",
      imdbRating: "8.1",
      imdbVotes: "1,199,036",
      imdbID: "tt0325980",
      Type: "movie",
      DVD: "23 Nov 2015",
      BoxOffice: "$305,413,918",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ];

  // State to store movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const handleSearch = (term) => {
    const filtered = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <div className="homepage">
        {/* Navigation */}
        <div className="navbar">
          {/* Navigation links */}
          <Navbar userInitials={userInitials}></Navbar>
        </div>

        <div className="body">
          {/* Search bar */}
          <Searchbar onSearch={handleSearch} />
        </div>

        {/* Movie feed */}
        <div className="movie-feed">
          {filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className="movie-info">
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
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
  currentUser: PropTypes.Object,
};

export default Homepage;
