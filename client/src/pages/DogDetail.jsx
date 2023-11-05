export default function DogDetail() {
  return (
    <div className="max-w-md p-4 m-4 bg-white rounded-lg shadow-lg">
      <p className="mt-2 text-sm text-gray-700">{dog.descripcion}</p>
      <p className="text-sm text-gray-700">Tamaño: {dog.tamanio}</p>
      <p className="text-sm text-gray-700">
        Esperanza de vida: {dog.esperanza_de_vida} años
      </p>
      <p className="text-sm text-gray-700">Personalidad: {dog.personalidad}</p>
      <button className="p-2 mt-2 text-white bg-red-500 rounded-md">
        Borrar
      </button>
      <button className="p-2 mt-2 text-white bg-blue-500 rounded-md">
        Editar
      </button>
    </div>
  )
}
