import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import BorderExample from "./Spinner";
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";


export function MovieDetailsSimilar({ search }) {
const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId + "/similar?language=es-MX").then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <BorderExample />;
  }

  return (
      <Row className="m-5 justify-content-center text-center">
        <div className="m-3 text-light"><h2>Peliculas Similares</h2></div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
      
  );
}