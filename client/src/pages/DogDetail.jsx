import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDogs } from '../context/DogContext.jsx'

export function DogDetail() {
  const { id } = useParams()
  //! dogs es un objeto con un solo valor (no se puede iterar con el map)
  const { dogs, loadDog } = useDogs()

  useEffect(() => {
    loadDog(id)
  }, [ id ])

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{dogs.nombre}</h1>
      <img src={dogs.imagen} alt={dogs.nombre} className="w-full rounded-lg" />
      <p className="text-gray-700">Descripción: {dogs.descripcion}</p>
      <p className="text-gray-700">
        Esperanza de vida: {dogs.esperanza_de_vida} años
      </p>
      <p className="text-gray-700">Tamaño: {dogs.tamanio}</p>
      <p className="text-gray-700">Personalidad: {dogs.personalidad}</p>
    </div>
  )
}
