import PropTypes from "prop-types";
import "../styles/LanguageCard.css";

/**
 * LanguageCard
 *
 *
 * @param {object} props
 * @param {string} props.name     
 * @param {string} props.species        
 * @param {string} props.image      
 * @param {string} props.status 
 */
function LanguageCard({ image, name, species, status }) {
  return (
    <tr>
      <td><img src={image} alt={name} width="50" /></td>
      <td>{name}</td>
      <td>{species}</td>
      <td>{status}</td>
    </tr>
  );
}

// 1.4 — PropTypes
// React mostrará advertencias en consola si se pasa un tipo incorrecto.

LanguageCard.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default LanguageCard;
