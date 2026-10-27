import { useState } from "react";
import { useCharacters } from "./useCharacters";
import { Link, Route, Routes,NavLink } from "react-router-dom";
import NotFound from "./components/NotFound";
import CharacterDetail from "./components/CharacterDetail";
import CharactersView from "./components/CharacterView";
import Home from "./components/Home";

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
      <nav style={{ padding: "15px", background: "#f0f0f0", textAlign: "center" }}>
        <NavLink to="/" style={{ margin: "0 15px", fontWeight: "bold" }}>Inicio</NavLink>
        <NavLink to="/characters" style={{ margin: "0 15px", fontWeight: "bold" }}>Personajes</NavLink>
      </nav>
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersView />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;