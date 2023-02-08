import { useParams } from "react-router-dom";
// import movies from "../../movies";

import axios from "axios";
import { useEffect, useState } from "react";

export function SeriePage() {
  const params = useParams();
  const [serie, setSerie] = useState({});

  // const movie = movies.filter((currentMovie) => {
  //   return currentMovie.id === Number(params.movieId);
  // })[0];

  useEffect(() => {
    async function fetchSerie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${params.tv_id}?api_key=9b0bf59083345bf6f6a1b1a347761971`
      );

      console.log(response);

      setSerie(response.data);
    }

    fetchSerie();
  }, []);

  return (
    <>
      <h1>{serie.name}</h1>
      <p>{serie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
        alt="Poster da série"
      />
    </>
  );
}
