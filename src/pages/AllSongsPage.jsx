import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ChartTracks from "../containers/ChartTracks";

const AllSongsPage = (props) => {
  console.log("all-songs-props", props);
  const location  = useLocation();
  console.log("location", location);
  return (
    <div className="container-right">
      <ChartTracks location={location.pathname}/>
    </div>
  );
};

export default AllSongsPage;
