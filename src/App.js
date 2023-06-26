import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            title: movieData.title,
            releaseDate: movieData.release_date,
            openingText: movieData.opening_crawl,
            id: movieData.episode_id,
          };
        });
        return setMovies(transformedMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
