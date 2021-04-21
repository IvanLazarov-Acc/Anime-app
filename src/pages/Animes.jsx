import React, { useEffect, useState } from "react";
import AnimeItem from "./AnimeItem";
import "../styles/Animes.css";

function Animes() {
  const [anime, setAnime] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(
    "https://api.jikan.moe/v3/search/anime"
  );

  const fetchData = (query) => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`)
      .then((response) => {
        if (response.ok) {
          const result = response.json();
          return result;
        }
        throw response;
      })
      .then((result) => setData(result.results))
      .catch((error) => {
        console.error("Error fetching the data: ", error);
        setError(error);
      })
      .finally(() => {
        console.log(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const handleChange = (event) => {
    return setAnime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.length <= 2) {
      return alert("More letters needed");
    }
    setQuery(anime);
    return query;
  };

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="formHolder">
      <h1>This is the Animes page</h1>
      <form onSubmit={handleSubmit} className="animeForm">
        <input
          type="text"
          placeholder="Anime?"
          value={anime}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
      <AnimeItem data={data} />
    </div>
  );
}

export default Animes;
