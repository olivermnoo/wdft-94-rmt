import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Home() {
  const [series, setSeries] = useState([]);
  console.log("Oi");

  useEffect(() => {
    async function fetchSeries() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=9b0bf59083345bf6f6a1b1a347761971"
      );
      console.log(response);
      setSeries(response.data.results);
    }

    fetchSeries();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=1dbc566a4812e099606bf66f83159d6e"
  //     )
  //     .then((delivery) => {
  //       setMovies(delivery.data.results);
  //     });
  // }, []);

  return (
    <>
      <h1>Home</h1>

      {series.map((currentSerie) => {
        return (
          <Link to={`/tv/${currentSerie.id}`}>
            <h2>{currentSerie.name}</h2>
          </Link>
        );
      })}
    </>
  );
}

///tv/${}/season/${}
