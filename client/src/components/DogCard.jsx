export const DogCard = ({ dog }) => {
  return (
    <div className="max-w-md p-4 m-4 bg-white rounded-lg shadow-lg">
      <h1 className="mb-2 text-2xl font-bold text-gray-800">
        Raza: {dog.nombre}
      </h1>
      <img
        src={dog.imagen}
        alt=""
        className="object-cover w-full h-auto rounded-md"
      />
      <p className="mt-2 text-sm text-gray-700">{dog.descripcion}</p>
      <p className="text-sm text-gray-700">Tamaño: {dog.tamanio}</p>
      <p className="text-sm text-gray-700">
        Esperanza de vida: {dog.esperanza_de_vida} años
      </p>
      <p className="text-sm text-gray-700">Personalidad: {dog.personalidad}</p>
    </div>
  )
}
