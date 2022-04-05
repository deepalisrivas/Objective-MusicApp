import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import HintResults from "../components/SearchResults/HintResults";
import { actionSearchArtistsSuccess } from "../state/search/searchArtistsAction";
import { actionSearchAlbumsSuccess } from "../state/search/searchAlbumsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchedArtist = useSelector(state => state.chartArtists.artist);
  const searchedAlbum = useSelector(state => state.chart.top);
  const foundAlbums = useSelector(state => state.searchAlbums.albums)
  const foundArtists = useSelector(state => state.searchArtists.artists)

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      dispatch(actionSearchArtistsSuccess(query));
      dispatch(actionSearchAlbumsSuccess(query));
    }
  }

  const handleChange = (e) => {
    let query = e.target.value;
    setQuery(query);

    if (query.length > 0) {
      dispatch(actionSearchArtistsSuccess(query));
      dispatch(actionSearchAlbumsSuccess(query));
    } else {
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    }
  }

    window.addEventListener("click", function (e) {
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    });
    const getFoundArtist = searchedArtist.filter((artist) => artist.author.toLowerCase().includes(foundArtists) || artist.author.includes(foundArtists));
    const getFoundAlbum = searchedAlbum.filter((album) => album.name.toLowerCase().includes(foundAlbums) || album.name.includes(foundAlbums));
    return (
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
          <input
            type="text"
            placeholder="Search Artist, Albums, Songs"
            onChange={handleChange}
          />
          {query ? <HintResults
            artistsFound={getFoundArtist}
            albumsFound={getFoundAlbum}
          /> : null}
        </form>
      </div>
    );
  }

export default SearchBar;
