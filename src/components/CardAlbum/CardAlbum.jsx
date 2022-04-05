import React from "react";
import { Link } from "react-router-dom";

const CardAlbum = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`} className="card-container">
      <img src={album.url} alt={album.name} className="card-image" />
      <p className="card-title">{album.name}</p>
      <p className="Album-released">{album.yearOfRelease}</p>
    </Link>
  );
};

export default CardAlbum;
