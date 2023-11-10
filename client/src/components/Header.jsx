import { Link, useNavigate } from 'react-router-dom'
import dog from '../images/dog.png'
import Swal from 'sweetalert2'
import 'animate.css';


function Header({ title }) {
const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('rol', '')
    localStorage.setItem('usuario_id', '')
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      localStorage.removeItem('isLoggedIn')
      navigate('/signin')
    })
    navigate('/')
  }

  return (
    <header className="bg-[#BF9270] text-white px-4 py-4 mb-6">
      <nav className="flex items-center m-auto justify-evenly">
        <div className='flex items-center'>
          <Link to="/">
            <img src={dog} alt="" width={90} className='animate__animated animate__bounce' />
          </Link>
            <h1 className="text-3xl font-bold ml-4 animate__animated animate__backInDown">Dog360</h1>
        </div>
        <input
          className="w-[500px] p-2 rounded-md"
          type="text"
          placeholder="Buscar..."
        />
        <div className="flex justify-end gap-4 ml-4">
          {
            localStorage.getItem('rol') === 'ADMIN' && (
              <>
               <Link to="/new" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Crear perrito</Link>
              </>
            )
          }
          {localStorage.getItem('isLoggedIn') === 'true' ? (
            <>
              <Link to={'/turnos'} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Solicitar turno</Link>
              <Link to={"/mis-turnos"} className={"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"}>Mis turnos</Link>
              <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign out</button>
            </>
          ) : (
            <>
              <Link to="/signin">Login</Link>
              <Link to="/signup">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
