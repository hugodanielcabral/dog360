import { useNavigate } from 'react-router-dom'
import { deleteDogRequest } from "../api/dogs.api"

export const DogCard = ({ dog }) => {

  const navigate = useNavigate()


  const handleDelete = async (id) => {
    try {
      await deleteDogRequest(id)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="p-2 bg-[#BF9270] rounded shadow cursor-pointer">
        <img
          className="w-full rounded"
          src={dog.imagen}
          alt={dog.nombre}
          onClick={() => navigate(`/dogs/${dog.id}`)}
        />
      <div className="flex items-center justify-center h-4 p-4">
        <h3 className="font-bold text-white ">{dog.nombre}</h3>
      </div>
      <div className="flex items-center justify-center h-4 p-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(dog.id)}
        >
          Eliminar
        </button>
        </div>
    </div>
  )
}
