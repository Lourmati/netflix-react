import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const truncate = (description, n) => {
    return description?.length > n
      ? description.substring(0, n - 1) + " ..."
      : description;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name} </h1>
        <h1 className="banner_description">
          {truncate(
            movie?.overview,
            175
          )}
        </h1>
        <div className="banner_buttons">
          <button className="banner_play_button"> ► Play</button>
          <button className="banner_i_button"> ⓘ More Info</button>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
