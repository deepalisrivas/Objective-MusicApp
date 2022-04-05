import React from "react";
import Loading from "../components/Loading/Loading";
import FollowButton from "../components/Buttons/FollowButton";
import PlayButton from "../components/Buttons/PlayButton";
import addProperty from "../core/functions/addProperty";
import HeartButton from "../components/Buttons/HeartButton";
import { useSelector } from "react-redux";

const Title = (props) => {
  const loading = useSelector(state => state.chartArtists.loading);
  const artist = useSelector(state => state.chartArtists.artist);

  const idArtist = props.id;
  const selectedArtist = artist.filter(item => item.id == idArtist)

  if (loading) return <Loading />;
  return (
    <>
      <div className="header-artist">
        <img src={selectedArtist[0].url} alt={selectedArtist[0].author} />
        <div className="artist-info">
          <h1>{selectedArtist[0].author}</h1>
          <FollowButton artist={selectedArtist[0]} />
        </div>
      </div>
      <table className="artists-track">
        <thead>
          <tr>
            <th>Popular</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedArtist[0].tracks.map((track, index) => (
            <tr key={track.id}>
              <td width="2%">{index + 1}</td>
              <td width="10%"><img src={track.image_url} alt={track.name} className="artist-image" /></td>
              <td width="40%">{track.name}</td>
              <td width="40%">
                <PlayButton url={track.url} id={track.id} />
                <HeartButton track={addProperty(track, track.image_url)} />
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


export default Title;
