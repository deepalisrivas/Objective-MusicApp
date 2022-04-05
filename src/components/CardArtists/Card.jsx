import React from "react";
import { Link } from "react-router-dom";

const Card = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`} className="card-container">
      <img className="card-image" src={artist.url} alt={artist.author} />
      <span className="card-title">{artist.author}</span>
    </Link>
  );
};

export default Card;
