import React  from "react";
import ReactAudioPlayer from 'react-audio-player';

const PlayButton = ({ url }) => {
  
  return (
    <>
      <ReactAudioPlayer
        controls
        src={url}
      />
    </>
  );
};

export default PlayButton;
