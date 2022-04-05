import React from "react";
import "./HintResults.css";

import { Link } from "react-router-dom";

import ItemResult from "./ItemResult";

const HintResults = ({ artistsFound, albumsFound }) => {
  return (
    <div id="hint-container">
      <div>
        <section>
          <h4 className="title-section">Artists</h4>
          {artistsFound.length > 0 ? (
            artistsFound.map((artist) => (
              <Link to={`/artist/${artist.id}`}>
                <ItemResult
                  key={artist.id}
                  text={artist.author}
                  pic={artist.url}
                />
              </Link>
            ))
          ) : (
            <div className="error">No Matches Were Found</div>
          )}
        </section>
        <section>
          <h3 className="title-section">Albums</h3>
          {albumsFound.length > 0 ? (
            albumsFound.map((album) => (
              <Link to={`/album/${album.id}`}>
                <ItemResult
                  key={album.id}
                  text={album.name}
                  pic={album.url}
                />
              </Link>
            ))
          ) : (
            <div className="error">No Matches Were Found</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HintResults;
