import React, { Component } from "react";
import { useParams } from "react-router-dom";
import ArtistsGenre from "../containers/ArtistsByGenre";

const SingleGenrePage = () => {
  const { id } = useParams();
  return (
    <div className="container-right">
      <ArtistsGenre id={id} />
    </div>
  );
}

export default SingleGenrePage;
