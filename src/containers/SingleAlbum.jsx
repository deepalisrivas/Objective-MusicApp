import React from "react";
import { useParams } from "react-router-dom";
import convertDurationAlbum from "../core/functions/convertDurationAlbum";
import addProperty from "../core/functions/addProperty";

import Loading from "../components/Loading/Loading";
import PlayButton from "../components/Buttons/PlayButton";
import HeartButton from "../components/Buttons/HeartButton";
import FollowButton from "../components/Buttons/FollowButton";
import { useSelector } from "react-redux";

const SingleAlbum = (props) => {
  const album = useSelector(state => state.chart.top);
  const loading = useSelector(state => state.chart.loading);

  const calculateTotalDuration = (album) => {
    let sum = 0;
    album.tracks.map((track) => {
      if (album.tracks.length > 0) {
        sum += track.duration
      } else {
        sum = track.duration;
      }
    })
    return sum;
  }

    const idAlbum = useParams();
    const selectedAlbum = album.filter(item => item.id == idAlbum.id)

    if (loading) return <Loading />;
    return (
      <div className="container-right">
        <header>
          <img src={selectedAlbum[0].url} alt={selectedAlbum[0].author} />
          <section className="info">
            <h1>{selectedAlbum[0].author}</h1>
            <FollowButton album={selectedAlbum[0]} />
            <div className="details">
              <p>{selectedAlbum[0].tracks.length} Songs</p>
              <p id="dot">&bull;</p>
              <p>{convertDurationAlbum(calculateTotalDuration(selectedAlbum[0]))}</p>
            </div>
          </section>
        </header>
        <table className="artists-track">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th id="duration-header">Duration</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedAlbum[0].tracks.map((track, index) => (
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
      </div>
    );
  }

export default SingleAlbum;
