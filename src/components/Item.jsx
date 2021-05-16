// import React, { useState } from "react";
import React from "react";
// import ItemModal from "./ItemModal";
import "../styles/Item.css";

function AnimeItem({ data }) {
  // console.log(data);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const mouseEnterHandle = () => {
  //   return setIsModalOpen(!isModalOpen);
  // };

  // const mouseLeaveHandle = () => {
  //   return setIsModalOpen(false);
  // };

  return (
    <div className="list-container">
      <ul className="list">
        {data.map((item) => {
          return (
            <li className="list-item" key={item.mal_id}>
              <h3>{item.title}</h3>
              <img
                className="item-image"
                // onMouseEnter={mouseEnterHandle}
                // onMouseLeave={mouseLeaveHandle}
                src={item.image_url}
                alt=""
              />
              <p className="description">{item.synopsis}</p>
            </li>
          );
        })}
      </ul>
      {/* <ItemModal isOpen={isModalOpen} /> */}
    </div>
  );
}

export default AnimeItem;
