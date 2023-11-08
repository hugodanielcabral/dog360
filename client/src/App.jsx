import { Route, Routes } from 'react-router-dom'
import { DogContextProvider } from './context/DogContext'
import DogsPage from './pages/DogsPage'
import { DogsForm } from './pages/DogsForm'
import { NotFound } from './pages/NotFound'
import { Registro } from './pages/Registro'
import { Login } from './pages/Login'
import { DogDetail } from './pages/DogDetail'
import { PrivateRoute } from './components/PrivateRoute'


export const App = () => {

  return (
    <DogContextProvider>
      <Routes>
        <Route path="/" element={<DogsPage />} />
        <Route path="/new" element={<PrivateRoute element={<DogsForm />} />} />
        <Route path="/signup" element={<Registro />} />
        <Route path="/signin" element={<Login />} />
{/*         <Route path="/dog/:id" element={<DogDetail />} />
 */}        
        <Route path='/edit/:id' element={<DogsForm/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DogContextProvider>
  )
}
