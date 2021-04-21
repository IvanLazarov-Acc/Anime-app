import React from "react";

function AnimeItem({data}) {
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.mal_id}>
              <h2>{item.title}</h2>
              <img src={item.image_url} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AnimeItem;
