import React from "react";
import "../styles/App.css";
import  image from "../styles/images/torii.jpg";

 

function Home() {
  
  return (
    <div className="home-container">
      <h2>Welcome to your anime world!</h2>
      <img className="home-image" src={image} alt="Welcoming torii..." />
    </div>
  );
}

export default Home;
