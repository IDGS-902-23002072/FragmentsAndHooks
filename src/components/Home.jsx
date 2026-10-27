import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container" style={{ textAlign: "center", padding: "40px" }}>
      <h1>¡Bienvenido a la Web de Rick and Morty!</h1>
      <p>Explora el universo de tus personajes favoritos de la serie.</p>
      <Link to="/characters">
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Ver Personajes
        </button>
      </Link>
    </div>
  );
}

