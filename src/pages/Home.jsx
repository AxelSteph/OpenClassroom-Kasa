import { Link } from "react-router-dom";
import banner from "../assets/img-banner.png";
import logements from "../data/logement.json";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <section className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={banner} alt="Image de la bannière" />
      </section>

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
    </main>
  );
}

export default Home;
