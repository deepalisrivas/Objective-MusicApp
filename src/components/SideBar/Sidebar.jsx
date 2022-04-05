import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  faHome,
  faSearch,
  faBroadcastTower,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/Logo.svg";

const Sidebar = () => {
  return (
    <div className="container">
      <NavLink exact="true" to="/" className="logo">
        <img src={Logo} alt="Spotify"/>
        <span>PlayIt</span>
      </NavLink>
      <section className="sidebar-topics">
        <NavLink exact="true" to="/" className="item" activeclassname="active">
          <span>Home</span>
        </NavLink>

        <NavLink exact="true" to="/discover" className="item" activeclassname="active">
          <span>Discover</span>
        </NavLink>
      </section>

      {/* your library */}
      <section className="sidebar-library">
        <h4>Your Library</h4>
        <NavLink exact="true" to="/albums" className="item" activeclassname="active">
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <span>Albums</span>
        </NavLink>

        <NavLink exact="true" to="/artists" className="item" activeclassname="active">
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <span>Artists</span>
        </NavLink>

        <NavLink exact="true" to="/songs" className="item" activeclassname="active">
          {/* <FontAwesomeIcon className="icon" icon={faRecordVinyl} /> */}
          <span>Songs</span>
        </NavLink>
      </section>

      {/* Footer on mobile */}
      <section className="sidebar-mobile">
        <NavLink exact="true" to="/" className="item" activeclassname="active">
          <FontAwesomeIcon className="icon" icon={faHome} />
          <span>Home</span>
        </NavLink>

        <NavLink exact="true" to="/discover" className="item" activeclassname="active">
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span>Discover</span>
        </NavLink>

        <NavLink
          exact="true"
          to="/favorites"
          className="item"
          activeclassname="active"
        >
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <span>Favorites</span>
        </NavLink>

        <NavLink exact="true" to="/radio" className="item" activeclassname="active">
          <FontAwesomeIcon className="icon" icon={faBroadcastTower} />
          <span>Radio</span>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
