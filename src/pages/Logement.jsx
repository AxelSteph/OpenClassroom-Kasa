import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logement.json";
import "../styles/Logement.css";

import Carousel from "../componants/Carousel";
import Host from "../componants/Host";
import Rating from "../componants/Rating";
import Tags from "../componants/Tags";
import Collapse from "../componants/Collapse";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <section className="logement-details">
        <div className="logement-info">
          <div className="left-container">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <Tags tags={logement.tags} className="logement-tags" />
          </div>

          <div className="right-container">
            <Host host={logement.host} className="logement-host" />
            <Rating rating={logement.rating} className="logement-rating" />
          </div>
        </div>
        <div className="logement-collapses">
          <Collapse
            title="Description"
            content={logement.description}
          />
          <Collapse
            title="Équipements"
            list={logement.equipments}
          />
        </div>
      </section>
    </div>
  );
}

export default Logement;
