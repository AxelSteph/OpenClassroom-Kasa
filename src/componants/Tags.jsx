import "../styles/Tags.css";

function Tags({ tags }) {
  return (
    <div className="logement-tags">
        {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
        ))}
    </div>
  );
}

export default Tags;