import React from "react";
import ChartAlbums from "../containers/ChartAlbums";
import ChartTracks from "../containers/ChartTracks";
import ChartArtists from "../containers/ChartArtists";
import ChartGenre from "../containers/ChartGenre";

const HomePage = () => {
    return (
      <div className="container-right">
        <ChartAlbums />
        <ChartGenre />
        <ChartTracks />
        <ChartArtists />
      </div>
    );
  }

export default HomePage;
