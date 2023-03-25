import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieDetailsSimilar } from "../components/MovieDetailsSimilar";
import BorderExample from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieBackdrop";
import { get } from "../utils/httpClient";
import styles from "../components/MovieDetails.module.css"
import { BsPlayCircle } from 'react-icons/bs'
import ReactPlayer from "react-player";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId + "?language=es-MX").then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <BorderExample />;
  }

  const handlePlayClick = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=acf9cf424e9afa4c58bdbf4025e1ffae&language=es-MX");
    const data = await response.json();
    const trailerKey = data.results[0].key;
    setTrailerUrl(`https://www.youtube.com/watch?v=${trailerKey}`);
  }



  const imageUrl = getMovieImg(movie.backdrop_path, 1280);
  return (
    <>
      {movie ? (
        <>
          <div className={styles.image}>
          <div  id="player">
            <div  onClick={handlePlayClick}>
              <BsPlayCircle className={styles.boton} />
              <img src={imageUrl} alt="" />
              </div>
            

            <div className={styles.contenedor}>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
            <div className={styles.video} >
            {trailerUrl && <ReactPlayer url={trailerUrl} playing />}
            </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="bg-black">
        
        <MovieDetailsSimilar />
      </div>
    </>
  );
}
