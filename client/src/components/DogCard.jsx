export const DogCard = ({ dog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4 max-w-md">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Raza: {dog.nombre}</h1>
      <img
        src={dog.imagen}
        alt=""
        className="rounded-md w-full h-auto object-cover"
      />
      <p className="text-gray-700 text-sm mt-2">{dog.descripcion}</p>
      <p className="text-gray-700 text-sm">Tamaño: {dog.tamanio}</p>
      <p className="text-gray-700 text-sm">Esperanza de vida: {dog.esperanza_de_vida} años</p>
      <p className="text-gray-700 text-sm">Personalidad: {dog.personalidad}</p>
    </div>
  );
};
