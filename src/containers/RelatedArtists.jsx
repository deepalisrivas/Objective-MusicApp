import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";
import { useSelector } from "react-redux";

const RelatedArtists = () => {
  const [index, setIndex] = useState(0);
  const loading = useSelector(state => state.chartArtists.loading);
  const related = useSelector(state => state.chartArtists.artist);

  const handleRight = (total) => {
    let limit = Math.round(total / 2) + 5;
    if (index < limit) {
      let n = index + 1;
      setIndex(n)
      document.getElementById(
        "carousel-related"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  const handleLeft = () => {
    if (index > 0) {
      let n = index - 1;
      setIndex(n)
      document.getElementById(
        "carousel-related"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }

    const otherArtists = related.filter(item => item.id != this.props.id);
    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <div className="header-carrousel">
          <h2>You May Also Like</h2>
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="arrow"
              onClick={handleLeft}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="arrow"
              onClick={handleRight.bind(this, otherArtists.length)}
            />
          </div>
        </div>
        <section>
          <div className="slider">
            <div className="items-slider" id="carousel-related">
              {otherArtists.map((artist) => (
                <Card key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }


export default RelatedArtists;
