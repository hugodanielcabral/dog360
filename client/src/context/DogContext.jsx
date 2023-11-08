import { createContext, useContext, useState } from "react";
import { getDogsRequest, getDogRequest, createDogRequest, updateDogRequest, deleteDogRequest } from "../api/dogs.api"
import { Toast } from "../libs/sweetalert.js";


export const DogContext = createContext()

export const useDogs = () => {
  const context = useContext(DogContext)

  if (!context) {
    throw new Error('useDogs must be used within a DogContextProvider')
  }

  return context
}

export const DogContextProvider = ({ children }) => {
  const [dogs, setDogs] = useState([])

  const loadDogs = async () => {
    try {
      const response = await getDogsRequest();
      setDogs(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  

  const loadDog = async (id) => {
    try {
      const response = await getDogRequest(id)
      setDogs(response.data)
    } catch (error) {
      console.error(error)
    }
  }

      const createDog = async (dog) => {
        try {
            const response = await createDogRequest(dog)
            setDogs([...dogs, response.data])
            Toast.fire({
              icon: 'success',
              title: 'Perro creado',
            })
          } catch (error) {
            console.log(error)
          }
      }

      const deleteDog = async (id) => {
        try {
          await deleteDogRequest(id)
          setDogs(dogs.filter(dog => dog.id !== id))
          Toast.fire({
            icon: 'success',
            title: 'Perro eliminado',
          })
        } catch (error) {
          console.error(error)
        }
      }

      const updateDog = async (id, dog) => {
        try {
          await updateDog(id, dog)
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <DogContext.Provider
      value={{ dogs, loadDogs, loadDog, createDog, updateDog,deleteDog }}
    >
      {children}
    </DogContext.Provider>
  )
}
