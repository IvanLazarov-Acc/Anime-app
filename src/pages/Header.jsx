import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link className="link" to="/">
          <h1 className="header-text">
            Find you favourite anime and character
          </h1>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink className="nav-link" to="/animes">
                Animes
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/characters">
                Characters
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
