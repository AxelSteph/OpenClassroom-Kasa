import { useState } from "react";
import logements from "../data/logement.json";
import "../styles/Carousel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({ logementId }) {
  const logement = logements.find((log) => log.id === logementId);
  const pictures = logement?.pictures ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement || pictures.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="carousel">
      <img
        className="carousel-image"
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1} du logement`}
      />
      {pictures.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {pictures.length > 1 && (
        <span className="carousel-counter">
          {currentIndex + 1}/{pictures.length}
        </span>
      )}
    </div>
  );
}

export default Carousel;
