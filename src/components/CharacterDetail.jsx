import { useParams } from "react-router-dom";
import { useCharacter } from "../useCharacters";
import { Link } from "react-router-dom";


export default function CharacterDetail() {
  const { id } = useParams();
  const { character, loading, error } = useCharacter(id);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const { image, name, species, status } = character || {};

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img alt={name} src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{name} es {species} y está {status}</p>
          <Link to="/characters">← Volver al listado</Link>
        </div>
      </div>
    </div>
  );
}