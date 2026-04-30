import { Link } from "react-router-dom";
import logements from "../data/logement.json";
import "../styles/Home.css";
import Banner from "../componants/Banner";
import bannerImg from "../assets/home-banner.png";

function Home() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" img={bannerImg} />
      <section className="location-section">
        {logements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <div className="location-card">
              <img src={logement.cover} alt={logement.title} />
              <h3>{logement.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Home;
