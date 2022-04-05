import { combineReducers } from "redux";

import chart from "./chart/topArtistsReducer";
import chartArtists from "./chartArtist/chartArtistReducer";
import searchArtists from "./search/searchArtistsReducer";
import searchAlbums from "./search/searchAlbumsReducer";
import genres from "./genres/genresReducer";
import tracks from "./tracks/topTracksReducer";
import favorites from "./favorites/favoriteReducer";

export default combineReducers({
    chart,
    chartArtists,
    genres,
    tracks,
    favorites,
    searchArtists,
    searchAlbums
});