import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

// common
import SideBar from "../components/SideBar/Sidebar";
import SearchBar from "../containers/SearchBar";
// topics sidebar
import Home from "../pages/HomePage";
import Discover from "../pages/DiscoverPage";
// you library pages sidebar
import Albums from "../pages/AlbumsPage";
import Artists from "../pages/ArtistsPage";
import Songs from "../pages/SongsPage";
// Single Pages
import SingleArtist from "../pages/SingleArtistPage";
import SingleAlbum from "../containers/SingleAlbum";
import SingleGenre from "../pages/SingleGenre";
// Others
import Error from "../pages/Error";
import store from "../state/store";
import FavoriteMobilePage from "../pages/FavoritesMobilePage";

import "./App.css";
import AllSongsPage from "../pages/AllSongsPage";
// import SingleArtistPage from "../pages/SingleArtistPage";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <SideBar />
        <Provider store={store}>
          <SearchBar />
          <Routes>
            <Route exact="true" path="/" element={<Home />}></Route>
            <Route exact="true" path="/discover" element={<Discover />}></Route>
            <Route exact="true" path="/all-songs" element={<AllSongsPage />}></Route>

            <Route exact="true" path="/albums" element={<Albums />}></Route>
            <Route exact="true" path="/artists" element={<Artists />}></Route>
            <Route exact="true" path="/songs" element={<Songs />}></Route>

            <Route exact="true" path="/artist/:id" element={<SingleArtist />} />
            <Route exact="true" path="/album/:id" element={<SingleAlbum />} />
            <Route exact="true" path="/genre/:id" element={<SingleGenre />} />

            <Route exact="true" path="/favorites" element={<FavoriteMobilePage />} />

            <Route element={<Error />} />
          </Routes>
        </Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
