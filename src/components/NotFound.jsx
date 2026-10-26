import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
        <h1>
            404
        </h1>
        <h2>Esto no existe</h2>
        <Link to='/'>Volver a algoque si exista</Link>
        </>
    );
}