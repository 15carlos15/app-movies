import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";
import Col from 'react-bootstrap/Col';

export function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
  return (
    <Col className="text-center fs-5 ">
      <Link to={"/movies/" + movie.id} className="text-decoration-none">
        <div className={styles.movieCard}>
        <img
          width={230}
          height={345}
          className="rounded"
          src={imageUrl}
          alt={movie.title}
        />
        </div>
        <div className="p-2 text-light">{movie.title}</div>
      </Link>
    </Col>
  );
}
