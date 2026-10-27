import { useState } from "react";
import { useCharacters } from "../useCharacters";
import LanguageCard from "./LanguageCard";
import FilterBar from "./FilterBar";

export default function CharactersView() {
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
                  key={char.id}
                  image={char.image}
                  name={char.name}
                  species={char.species}
                  status={char.status}
                  id={char.id}
                />
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <p className="no-results">No hay personajes para este filtro.</p>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

    </div>
  );
}
