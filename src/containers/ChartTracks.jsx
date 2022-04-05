import React, { useEffect } from "react";
import fetchTracks from "../api/fetchTracks";

import Loading from "../components/Loading/Loading";
import CardSong from "../components/CardTracks/CardSong";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ChartTracks = (props) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.tracks.error);
  const tracks = useSelector(state => state.tracks.tracks);
  const loading = useSelector(state => state.tracks.loading);

  useEffect(() => {
    dispatch(fetchTracks())
  }, [])

  if (loading) return <Loading />;
  else {
    return (
      <>
        {props.location ? <div>
          {error && <span>{error}</span>}
          <h1>All Songs</h1>
          <section className="top-songs-container">
            {tracks.map((track) => (
              <CardSong key={track.id} song={track} id={track.id} />
            ))}
          </section>
        </div> :
          <div>
            {error && <span>{error}</span>}
            <div className="see-all">
              <h1>Top Songs</h1>
              <Link to="/all-songs">
                SEE ALL
              </Link>
            </div>
            <section className="top-songs-container">
              {tracks.slice(0, 6).map((track) => (
                <CardSong key={track.id} song={track} id={track.id} />
              ))}
            </section>
          </div>
        }
      </>
    );
  }
}

export default ChartTracks;
