import React from "react";
import "../styles/AnimeItem.css";

function AnimeItem({ data }) {
  return (
    <div className="list-container">
      <ul className="anime-list">
        {data.map((item) => {
          return (
            <li className="anime-list-item" key={item.mal_id}>
              <h3>{item.title}</h3>
              <img className="anime-image" src={item.image_url} alt="" />
              <p className="description">{item.synopsis}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AnimeItem;
