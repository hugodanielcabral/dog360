import { deleteDogRequest } from "../api/dogs.api"

export const DogCard = ({ dog }) => {

  const handleDelete =  async (id) => {
    try {
      await deleteDogRequest(id)
    } catch (error) {
      console.error(error)
    }
  }
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
      <button className="bg-red-500 text-white rounded-md p-2 mt-2" onClick={() => handleDelete(dog.id)}>Borrar</button>
      <button className="bg-blue-500 text-white rounded-md p-2 mt-2">Editar</button>
    </div>
  )
}
