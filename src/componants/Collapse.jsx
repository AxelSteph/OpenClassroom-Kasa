import { useState } from 'react';
import "../styles/Collapse.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, content, list, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${className || ''}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={faChevronUp} className={`collapse-arrow ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content && <p>{content}</p>}
          {list && (
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;