import React from "react";
import { Link, NavLink } from "react-router-dom";
// import ToggleButton from "../components/ToggleButton";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <Link className="link" to="/">
          <h1 className="header-text">
            Find your favourite anime and manga
          </h1>
        </Link>
        <nav>
          <ul>
            <li className="first-nav-item">
              <NavLink className="nav-link" to="/animes">
                Animes
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/characters">
                Characters
              </NavLink>
            </li>
            {/* <li className="last-nav-item">
              <ToggleButton />
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
