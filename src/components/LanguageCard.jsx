import PropTypes from "prop-types";
import "../styles/LanguageCard.css";
import { Link } from "react-router-dom";

/**
 * LanguageCard
 *
 *
 * @param {object} props
 * @param {number} props.id     
 * @param {string} props.name     
 * @param {string} props.species        
 * @param {string} props.image      
 * @param {string} props.status 
 */
function LanguageCard({ id, image, name, species, status }) {
  return (
    <tr>
      <td><img src={image} alt={name} width="50" /></td>
      <td>{name}</td>
      <td>{species}</td>
      <td>{status}</td>
      <td>
        <Link to={`/character/${id}`}>
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Detalle
        </button>
      </Link>
      </td>
    </tr>
  );
}

// 1.4 — PropTypes
// React mostrará advertencias en consola si se pasa un tipo incorrecto.

LanguageCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default LanguageCard;
