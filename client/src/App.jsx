import { Route, Routes } from 'react-router-dom'
import DogsPage from './pages/DogsPage'
import { DogsForm } from './pages/DogsForm'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <Routes>
      //* DogsPage es "index"
      <Route path="/" element={<DogsPage />} />
      //* DogsForm es el formulario para crear una nueva raza
      <Route path="/new" element={<DogsForm />} />
      //* NotFound es el error 404 y por defecto cualquier página //* que no
      exista será redirigido a NotFound (por el caracter "*")
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
