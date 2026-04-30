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

  const name = logement.host.name.split(" ");
  const firstName = name[0];
  const lastName = name[1];

  return (
    <div>
      <Carousel logementId={id} />
      <section className="logement-details">
        <div className="logement-info">
          <div className="logement-title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <Host host={logement.host} className="logement-host" />
        </div>
        <div className="tags-rating-container">
          <Tags tags={logement.tags} className="logement-tags" />
          <Rating rating={logement.rating} className="logement-rating" />
        </div>
        <div className="logement-collapses">
          <Collapse
            title="Description"
            content={logement.description}
            className="logement-collapse"
          />
          <Collapse
            title="Équipements"
            list={logement.equipments}
            className="logement-collapse"
          />
        </div>
      </section>
    </div>
  );
}

export default Logement;
