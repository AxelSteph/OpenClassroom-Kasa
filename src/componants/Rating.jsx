import "../styles/Rating.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";


function Rating({ rating }) {
    return (
        <div className="logement-rating">
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={rating > index ? solidStar : regularStar}
                    className="rating-star"
                />
            ))}
        </div>
    );
}

export default Rating;