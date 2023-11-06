import { useEffect } from 'react'
import { DogCard } from '../components/DogCard.jsx'
import { useDogs } from '../context/DogContext.jsx'

export default function DogsRendering() {

  const { dogs, loadDogs } = useDogs()
  
  useEffect(() => {
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
