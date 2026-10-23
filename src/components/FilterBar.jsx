import PropTypes from "prop-types";
import "../styles/FilterBar.css";

function FilterBar({ tipos, tipoActivo, onSeleccionar }) {
  const manejarSeleccion = (tipo) => {
    localStorage.setItem("tipoElegido", tipo);
    onSeleccionar(tipo);
  };

  return (
    <nav className="filter-bar" aria-label="Filtrar por tipo">
      <button
        className={`filter-btn ${tipoActivo === "Todos" ? "active" : ""}`}
        onClick={() => manejarSeleccion("Todos")}
      >
        Todos
      </button>

      {tipos.map((tipo) => (
        <button
          key={tipo}
          className={`filter-btn ${tipoActivo === tipo ? "active" : ""}`}
          onClick={() => manejarSeleccion(tipo)}
        >
          {tipo}
        </button>
      ))}
    </nav>
  );
}

FilterBar.propTypes = {
  tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
  tipoActivo: PropTypes.string.isRequired,
  onSeleccionar: PropTypes.func.isRequired,
};

export default FilterBar;