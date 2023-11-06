import { Route, Routes } from 'react-router-dom'
import { DogContextProvider } from "./context/DogContext"
import DogsPage from './pages/DogsPage'
import { DogsForm } from './pages/DogsForm'
import { NotFound } from './pages/NotFound'
import { Registro } from './pages/Registro'
import { Login } from "./pages/Login"
import { DogDetail } from './pages/DogDetail';


export const App = () => {
  return (
   <DogContextProvider>
     <Routes>
      //* DogsPage es "index"
      <Route path="/" element={<DogsPage />} />
      //* DogsForm es el formulario para crear una nueva raza
      <Route path="/new" element={<DogsForm />} />
      //* Registro
      <Route path="/signup" element={<Registro />} />
      //* Login
      <Route path="/signin" element={<Login/>}/>
      //* DogDetails
      <Route path="/dogs/:id" element={<DogDetail />} />
      //* NotFound es el error 404 y por defecto cualquier página
      //* que no exista será redirigido a NotFound (por el caracter "*")
      <Route path="*" element={<NotFound />} />
    </Routes>
   </DogContextProvider>
  )
}
