import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getDogRequest } from "../api/dogs.api"

export function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState({})

  useEffect(() => {
    const loadDog = async () => {
      const response = await getDogRequest(id)
      setDog(response.data)
      console.log(response.data)
    }
    loadDog()
  }, [id]) 

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{dog.nombre}</h1>
      <img src={dog.imagen} alt={dog.nombre} className="w-full rounded-lg" />
      <p className="text-gray-700">Descripción: {dog.descripcion}</p>
      <p className="text-gray-700">Esperanza de vida: {dog.esperanza_de_vida} años</p>
      <p className="text-gray-700">Tamaño: {dog.tamanio}</p>
      <p className="text-gray-700">Personalidad: {dog.personalidad}</p>
    </div>
  )
}
