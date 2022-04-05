import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import fetchChart from "../api/fetchChart";

import Loading from "../components/Loading/Loading";
import CardAlbum from "../components/CardAlbum/CardAlbum";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ChartAlbums = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const error = useSelector(state => state.chart.error);
  const albums = useSelector(state => state.chart.top);
  const loading = useSelector(state => state.chart.loading);

  useEffect(() => {
    dispatch(fetchChart());
  },[])

  const handleRight = (total) => {
    let limit = 6;
    let totalSliding = total - limit;
    if (index < totalSliding) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${n * (150 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-albums"
      ).style.transform = `translateX(-${n * (150 + 40)}px)`;
    }
  }

    if (loading) return <Loading />;
    else {
      return (
        <div>
          {error && <span>{error}</span>}
          <div className="header-carrousel">
            <h1>Charts</h1>
            <div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow"
                onClick={handleLeft}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow"
                onClick={() => handleRight(albums.length)}
              />
            </div>
          </div>
          <section>
            <div className="slider">
              <div className="items-slider" id="carousel-top-albums">
                {albums.map((item) => (
                  <CardAlbum key={item.id} album={item} />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
  }

export default ChartAlbums;
