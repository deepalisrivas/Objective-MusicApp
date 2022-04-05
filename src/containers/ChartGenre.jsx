import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import fetchGenre from "../api/fetchGenres";

import Loading from "../components/Loading/Loading";
import StandarCard from "../components/StandardCard/StdCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const ChartGenre = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const error = useSelector(state => state.genres.error);
  const genres = useSelector(state => state.genres.genres);
  const loading = useSelector(state => state.genres.loading);

  useEffect(() => {
    dispatch(fetchGenre())
  }, [])

  const handleRight = (total) => {
    let limit = 6;
    let totalSliding = total - limit;
    if (index < totalSliding) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-genre"
      ).style.transform = `translateX(-${n * (150 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-genre"
      ).style.transform = `translateX(-${n * (150 + 40)}px)`;
    }
  }
  if (loading) return <Loading />;
  else {
    return (
      <div>
        {error && <span>{error}</span>}
        <div className="header-carrousel">
          <h1>Moods</h1>
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="arrow"
              onClick={handleLeft}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="arrow"
              onClick={() => handleRight(genres.length)}
            />
          </div>
        </div>
        <section>
          <div className="slider">
            <div className="items-slider" id="carousel-top-genre">
              {genres.map((item) => (
                <StandarCard key={item.id} genre={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ChartGenre;
