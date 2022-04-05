import React, { Component } from "react";
import { connect } from "react-redux";

import MaleSingerBowie from "../assets/artists/male-singer_bowie.png";
import MaleSingerPrince from "../assets/artists/male-singer_prince.png";
import FemaleSingerBowie from "../assets/artists/female-singer_bowie.png";
import FemaleSingerPrince from "../assets/artists/female-singer_prince.png";

import randomNumber from "../core/functions/randomNumber";

import NotYet from "../components/Others/NotYet";
import CardAlbum from "../components/CardAlbum/CardAlbum";
import { useSelector } from "react-redux";

const YourAlbums = () => {
  const emojis = [
    MaleSingerBowie,
    FemaleSingerBowie,
    MaleSingerPrince,
    FemaleSingerPrince,
  ];
  const followingAlbums = useSelector(state => state.favorites.followingAlbums)
  const [imageSelected] = emojis[randomNumber(0, 4)];

  return (
    <React.Fragment>
      <h1>Your Albums</h1>
      <div className="featured-artists">
        {followingAlbums.length === 0 || followingAlbums === null ? (
          <NotYet
            type={"artists"}
            message={"Find your favorite artist and start following them"}
            imgSrc={imageSelected}
          />
        ) : (
          followingAlbums.map((album) => (
            <CardAlbum key={album.id} album={album} />
          ))
        )}
      </div>
    </React.Fragment>
  );
}

export default YourAlbums;
