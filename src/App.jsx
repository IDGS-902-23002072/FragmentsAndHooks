import { useState } from "react";
import { useCharacters } from "./useCharacters";
import LanguageCard from "./components/LanguageCard";
import FilterBar from "./components/FilterBar";

function App() {
  const [page, setPage] = useState(1);
const [tipoActivo, setTipoActivo] = useState(() => {
  return localStorage.getItem("tipoElegido") || "Todos";
});

  const { character, totalPages, loading, error } = useCharacters(page);

  const TIPOS_UNICOS = ["Alive", "Dead", "unknown"];

  const personajesFiltrados =
    tipoActivo === "Todos"
      ? character
      : character.filter((char) => char.status === tipoActivo);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Personajes de Rick and Morty</h1>
        <p>Son los personajes de chico ricko y el morty no se que</p>
      </header>

      <FilterBar
        tipos={TIPOS_UNICOS}
        tipoActivo={tipoActivo}
        onSeleccionar={setTipoActivo}
      />

      {loading && <p className="loading">Cargando personajes...</p>}
      {error && <p className="error">Error: {error}</p>}

  <table>

  <caption>Personajes</caption>
  <thead>
    <tr>
      <th>Imagen</th>
      <th>Nombre</th>
      <th>Especie</th>
      <th>Estatus</th>
    </tr>
  </thead>
  <tbody>
        {!loading && !error && (
          personajesFiltrados.length > 0 ? (
            personajesFiltrados.map((char) => (
                <LanguageCard 
                image={char.image}
                name={char.name}
                species={char.species}
                status={char.status}
                />
            ))
          ) : (
            <p className="no-results">No hay personajes para este filtro.</p>
          )
        )}
  </tbody>
</table>
      
      <div className="pagination-controls" style={{ marginTop: "20px", textAlign: "center" }}>
        <button 
          disabled={page === 1} 
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Anterior
        </button>
        <span style={{ margin: "0 15px" }}>Página {page} de {totalPages}</span>
        <button 
          disabled={page >= totalPages} 
          onClick={() => setPage((p) => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App;