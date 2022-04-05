import React from "react";
import Loading from "../components/Loading/Loading";
import convertDurationTrack from "../core/functions/convertDurationTrack";
import PlayButton from "../components/Buttons/PlayButton";
import addProperty from "../core/functions/addProperty";
import HeartButton from "../components/Buttons/HeartButton";
import { useSelector } from "react-redux";

const Title = (props) => {
  const idGenre = props.id;
  const loading = useSelector(state => state.genres.loading);
  const genres = useSelector(state => state.genres.genres);

  const selectedGenre = genres.filter(item => item.id == idGenre);

  if (loading) return <Loading />;
  return (
    <>
      <div className="header-artist">
        <img src={selectedGenre[0].url} alt={selectedGenre[0].genre} />
        <div className="artist-info">
          <h1>{selectedGenre[0].genre}</h1>
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
          {selectedGenre[0].tracks.map((track, index) => (
            <tr key={track.id}>
              <td width="2%">{index + 1}</td>
              <td width="10%"><img src={track.image_url} alt={track.name} className="artist-image" /></td>
              <td width="40%">{track.name}</td>
              <td width="40%">
                <PlayButton url={track.url} />
                <HeartButton track={addProperty(track, track.image_url)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Title;
