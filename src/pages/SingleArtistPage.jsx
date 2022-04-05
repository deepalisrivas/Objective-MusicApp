import React from "react";
import { useParams } from "react-router-dom";
import Title from "../containers/Title";

const SingleArtistPage = () => {
  const { id } = useParams();
  return (
    <div className="container-right">
      <Title id={id} />
    </div>
  );
}

export default SingleArtistPage;
