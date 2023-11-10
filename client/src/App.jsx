import { Route, Routes, useNavigate } from 'react-router-dom'
import { DogContextProvider } from './context/DogContext'
import DogsPage from './pages/Dogs/DogsPage'
import { DogsForm } from './pages/Dogs/DogsForm'
import { NotFound } from './pages/NotFound'
import { Registro } from './pages/Registro'
import { Login } from './pages/Login'
import { DogDetail } from './pages/Dogs/DogDetail'
import { NewTurno } from './pages/Turnos/NewTurno'
import { TurnosDetail } from './pages/Turnos/TurnosDetail'
import { PrivateRoute } from './context/PrivateRoute'

export function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  return (
    <DogContextProvider>
      <Routes>
        <Route path="/" element={isLoggedIn ? <DogsPage /> : <Login />} />
        <Route path="/new" element={<PrivateRoute element={<DogsForm />} />} />
        <Route path="/turnos" element={<NewTurno />} />
        <Route path="/mis-turnos" element={<TurnosDetail />}></Route>
        <Route path="/signup" element={<Registro />} />
        <Route path="/signin" element={<Login />} />
        {/*         <Route path="/dog/:id" element={<DogDetail />} />
         */}
        <Route path="/edit/:id" element={<DogsForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DogContextProvider>
  )
}
