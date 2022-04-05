import React, { Component, useState } from "react";
import "./FollowButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  actionAddFollower,
  actionAddFollowerAlbum,
  actionRemoveFollower,
  actionRemoveFollowerAlbum,
} from "../../state/favorites/favoriteAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const FollowButton = (props) => {
  const dispatch = useDispatch();
  const follower = useSelector(state => state.favorites.followingArtists);
  const followerAlbum = useSelector(state => state.favorites.followingAlbums);
  const [toggleArtist, setToggleArtist] = useState(false);
  const [toggleAlbum, setToggleAlbum] = useState(false);
  const {artist, album} = props;

console.log("followerAlbum", followerAlbum);
  const handleToogleArtist = () => {
    setToggleArtist(!toggleArtist);

    follower.find((artistSaved) => artistSaved.id === artist.id)
      ? dispatch(actionRemoveFollower(artist.id))
      : dispatch(actionAddFollower(artist));
  };

  const handleToogleAlbum = () => {
    setToggleAlbum(!toggleAlbum);

    followerAlbum.find((albumSaved) => albumSaved.id === album.id)
      ? dispatch(actionRemoveFollowerAlbum(album.id))
      : dispatch(actionAddFollowerAlbum(album));
  };

  return (
    <>
      {artist ?
        <button
          icon={faHeart}
          className={
            "Follow-Button" +
            (follower.find((artistSaved) => artistSaved.id === artist.id)
              ? " Press"
              : "")
          }
          onClick={handleToogleArtist}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>
            {follower.find((artistSaved) => artistSaved.id === artist.id)
              ? "Unfollow"
              : "Follow"}
          </span>
          <span className="Feedback">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </button> :
        <button
          icon={faHeart}
          className={
            "Follow-Button" +
            (followerAlbum.find((albumSaved) => albumSaved.id === album.id)
              ? " Press"
              : "")
          }
          onClick={handleToogleAlbum}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>
            {followerAlbum.find((albumSaved) => albumSaved.id === album.id)
              ? "Unfollow"
              : "Follow"}
          </span>
          <span className="Feedback">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </button>
      }
    </>
  );
}

export default FollowButton;
