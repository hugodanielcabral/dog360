import { useState, useEffect } from 'react'
import { getDogsRequest } from '../api/dogs.api.js'
import { DogCard } from '../components/DogCard.jsx'

export default function DogsRendering() {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const loadDogs = async () => {
      const response = await getDogsRequest()
      setDogs(response.data)
      console.log(response.data)
    }
    loadDogs()
  }, [])

  const renderMain = () => {

    if(dogs.length === 0) return (<p>Cargando...</p>)

    return dogs.map((dog) => (
      <DogCard dog={dog} key={dog.id} />
    ))
  }
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
     {renderMain()}
    </div>
  )
}
