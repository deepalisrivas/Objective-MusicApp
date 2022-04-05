import React from "react";
import { Link } from "react-router-dom";

const CardGenres = ({ genre }) => {
  return (
    <Link to={`/genre/${genre.id}`} className="card-container">
        <img src={genre.url} alt={genre.genre} className="card-image"/>
        <p className="card-title">{genre.genre}</p>
    </Link>
  );
};

export default CardGenres;
