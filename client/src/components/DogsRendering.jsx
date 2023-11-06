import { useState, useEffect } from "react"
import { getDogsRequest } from "../api/dogs.api.js"
import { DogCard } from "../components/DogCard.jsx"

export default function DogsRendering () {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        const loadDogs = async () => {
            const response = await getDogsRequest()
            setDogs(response.data)
            console.log(response.data)
            
        }
        loadDogs()
    }, [])
    return (
        <div>
            <h1>Dogs</h1>
            {
                dogs.map(dog => (
                    <DogCard dog={dog} key={dog.id}/>
                ))
            }
        </div>
    )
}

