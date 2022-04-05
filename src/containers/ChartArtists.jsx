import React, { useEffect, useState } from "react";
import fetchChartArtistAction from "../api/fetchChartArtist";
import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ChartArtists = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const error = useSelector(state => state.chartArtists.error);
  const artists = useSelector(state => state.chartArtists.artist);
  const loading = useSelector(state => state.chartArtists.loading);

  useEffect(() => {
    dispatch(fetchChartArtistAction())
  },[])

  const handleRight = (total) => {
    let limit = 6;
    let totalSliding = total - limit;
    if (index < totalSliding) {
      let n = index + 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-artist"
      ).style.transform = `translateX(-${n * (150 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (this.state.index > 0) {
      let n = this.state.index - 1;
      setIndex(n);
      document.getElementById(
        "carousel-top-artist"
      ).style.transform = `translateX(-${n * (150 + 40)}px)`;
    }
  }

    if (loading) return <Loading />;
    else {
      return (
        <div>
          {error && <span>{error}</span>}
          <div className="header-carrousel">
            <h1>Featured Artists</h1>
            <div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow"
                onClick={handleLeft}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow"
                onClick={() => handleRight(artists.length)}
              />
            </div>
          </div>
          <section>
            <div className="slider">
              <div className="items-slider" id="carousel-top-artist">
                {artists.map((artist) => (
                  <Card key={artist.id} artist={artist} />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
  }

export default ChartArtists;
