import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import StandarCard from "../components/StandardCard/StdCard";

const Genres = () => {
  const genres = useSelector(state => state.genres.genres);
  const loading = useSelector(state => state.genres.loading);

    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <h1>Genres</h1>
        <div className="genres-section">
          {genres.map((genre) => (
            <StandarCard
              genre={genre}
              key={genre.id}
            />
          ))}
        </div>
      </React.Fragment>
    );
}
export default Genres;
