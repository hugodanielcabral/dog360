import { Route, Routes, useNavigate } from 'react-router-dom'
import { DogContextProvider } from './context/DogContext'
import DogsPage from './pages/DogsPage'
import { DogsForm } from './pages/DogsForm'
import { NotFound } from './pages/NotFound'
import { Registro } from './pages/Registro'
import { Login } from './pages/Login'
import { Turnos } from "./pages/Turnos"
import { PrivateRoute } from './components/PrivateRoute'
import { MisTurnos } from './pages/MisTurnos'
export const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  return (
    <DogContextProvider>
      <Routes>
        <Route
          path="/"
          element={ isLoggedIn ? <DogsPage/> : <Login/>}
        />
        <Route path="/new" element={<PrivateRoute element={<DogsForm />} />} />
        <Route path='/turnos' element={<Turnos/>}/>
        <Route path='/mis-turnos' element={<MisTurnos/>}></Route>
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
