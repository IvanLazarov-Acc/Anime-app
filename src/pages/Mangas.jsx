
import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import Pagination from "../components/Pagination";
import "../styles/Mangas.css";


function Mangas() {
  const [anime, setAnime] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isValidated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("https://api.jikan.moe/v3/search/manga");
  const [currentPage, setCurrentPage] = useState(1);
  const [animesPerPage] = useState(12);

  const fetchData = (query) => {
    fetch(`https://api.jikan.moe/v3/search/manga?q=${query}`)
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
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(query);
    // console.log(data);
  }, [query]);

  const handleChange = (event) => {
    return setAnime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(anime);
    return query;
  };

  //Get current animes
  const indexOfLastAnime = currentPage * animesPerPage;
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
  const currentAnimesData = data.slice(indexOfFirstAnime, indexOfLastAnime);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="formHolder">
      {/* <h1>This is the Animes page</h1> */}
      <form onSubmit={handleSubmit} className="mangaForm">
        <input
          className="mangaFormInput"
          type="text"
          placeholder="Manga?"
          value={anime}
          onChange={handleChange}
        />
        <input
          type="submit"
          disabled={anime.length < 3}
          value="Search"
          className="submitButton"
        />
      </form>
      <Item data={currentAnimesData} />
      <Pagination
        animesPerPage={animesPerPage}
        totalAnimes={data.length}
        paginate={paginate}
      />
    </div>
  );
}


export default Mangas;
