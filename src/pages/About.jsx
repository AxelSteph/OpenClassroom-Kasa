import Banner from "../componants/Banner";
import bannerImg from "../assets/about-banner.png";
import Collapse from '../componants/Collapse';

const collapseData = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title: "Respect",
    content: "Les annonces postées sur Kasa garantissent un respect mutuel entre les utilisateurs. Les échanges et les interactions sont empreints de respect, que ce soit pour les hôtes ou les voyageurs."
  },
  {
    title: "Responsabilité",
    content: "Les annonces postées sur Kasa garantissent une responsabilité sociale. Chaque utilisateur est tenu de respecter les règles de vie en communauté et de contribuer à un environnement harmonieux."
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
];

function About() {
  return (
    <>
      <Banner img={bannerImg} />
      {collapseData.map((item, index) => (
        <Collapse key={index} title={item.title} content={item.content} />
      ))}
    </>
  );
}

export default About;