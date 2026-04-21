import { useParams } from "react-router-dom";
import logements from "../data/logement.json";
import "../styles/Logement.css";

import Host from "../componants/Host";
import Rating from "../componants/Rating";
import Tags from "../componants/Tags";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id === id);
  const name = logement.host.name.split(" ");
  const firstName = name[0];
  const lastName = name[1];

  return (
    <div>
      <img id="logement-img" src={logement.pictures[0]} />
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
      </section>
    </div>
  );
}

export default Logement;
