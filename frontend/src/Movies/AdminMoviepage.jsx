import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminMoviePage({ movies }) {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    setAllMovies(movies);
  }, []);
  console.log("All moveis", allMovies);

  const handleRemove = (id) => {
    console.log("current target id: ", id);
    const deleteMovie = async () => {
      console.log(`Removing movie ${id}`);
      try {
        const response = await fetch(`http://localhost:5191/movies/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          console.log(`Removing movie ${id} - success`);
          const newArrayOfMovies = allMovies.filter((movie) => movie.id !== id);
          setAllMovies(newArrayOfMovies);
        }
      } catch (er) {
        console.error(
          `OBS!!! Something went wrong tring to delete the movie ${id}: ${er}`
        );
      }
    };
    deleteMovie();
  };
  return (
    <>
      <Link to="/home">
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>
      <div className="movie-details mx-auto" style={{ width: "80vw" }}>
        {allMovies.length ? (
          allMovies.map((movie) => (
            <>
              <Card
                className="w-50 shadow-lg mx-auto mb-5"
                style={{ width: "400px", maxWidth: "100%", height: "auto" }}
              >
                <div className="poster bg-dark d-flex justify-content-center align-items-center">
                  <img
                    src={movie.image}
                    style={{
                      width: "300px",
                      height: "auto",
                      maxHeight: "500px",
                    }}
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
                </div>
                <Button
                  className="w-50 mx-auto mt-5"
                  onClick={() => handleRemove(movie.id)}
                >
                  Remove
                </Button>
              </Card>
            </>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

AdminMoviePage.propTypes = {
  movies: PropTypes.array,
};

export default AdminMoviePage;

//  "title": "string",
//   "releaseYear": 0,
//   "genre": "string",
//   "director": "string",
//   "rating": 0,
//   "description": "string",
//   "image": "string"
