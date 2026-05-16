import "../styles/Host.css";

function Host({ host }) {
  return (
    <div className="logement-host">
      <div className="logement-host-name">
        <p>{host.name}</p>
      </div>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
