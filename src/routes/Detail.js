import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img
            src={movie.large_cover_image}
            art={movie.title}
            style={{
              float: "left",
            }}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>Year : {movie.year}</p>
            <p>Rating : {movie.rating}</p>
            <p>{movie.description_full}</p>
            <a href={movie.url}>More details...</a>

          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
