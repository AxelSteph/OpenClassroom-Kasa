import "../styles/Host.css";

function Host({ host }) {
  const name = host.name.split(" ");
  const firstName = name[0];
  const lastName = name[1];
  return (
    <div className="logement-host">
      <div className="logement-host-name">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
