import React from "react";
import "./CardSong.css";
import PlayButton from "../Buttons/PlayButton";
import HeartButton from "../Buttons/HeartButton";

const CardSong = ({ song, id }) => {
  return (
    <div className="container-song">
      <div className="cover-container">
        <img src={song.image_url} alt={song.name} />
      </div>
      <div className="info-container">
        <span>{song.name}</span>
        <div className="contributors">
          <p key={song.author} className="track-artist">
            {song.author}
          </p>
        </div>
      </div>
      <PlayButton url={song.preview_url} id={id}/>
      <HeartButton track={song} />
    </div>
  );
};

export default CardSong;
