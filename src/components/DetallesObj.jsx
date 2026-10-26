export default function DetallesObj({ image, name, species, status }) {
    return (
        <>
 <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      alt="Tailwind CSS hero component"
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">
        {name} es de la especie {species} y está {status}
      </p>
      <button className="btn btn-primary">Volver</button>
    </div>
  </div>
</div>
        </>
    );
}