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
    <div className="p-2 bg-[#BF9270] rounded shadow cursor-pointer">
      <img
        src={dog.imagen}
        alt={`Dog ${dog.id}`}
        className="w-full h-[200px] object-cover"
      />
      <div className="flex items-center justify-center h-4 p-4">
        <h3 className="font-bold text-white ">{dog.nombre}</h3>
      </div>
    </div>
  )
}
