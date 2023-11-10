import { Link, useNavigate } from 'react-router-dom'
import dog from '../images/dog.png'
import Swal from 'sweetalert2'
import 'animate.css'

export const Header = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('rol', '')
    localStorage.setItem('usuario_id', '')
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate('/signin')
      localStorage.removeItem('isLoggedIn')
    })
    navigate('/')
  }

  return (
    <header className="bg-[#BF9270] text-white px-4 py-4 mb-6">
      <nav className="flex flex-wrap items-center m-auto justify-evenly gap-y-2">
        <div className="items-center hidden sm:flex">
          <Link to="/">
            <img src={dog} alt="dog360" width={90} />
          </Link>
          <h1 className="ml-4 text-3xl font-bold">Dog360</h1>
        </div>
        <input
          className="w-[500px] p-2 rounded-md"
          type="text"
          placeholder="Buscar..."
        />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1 btn">
            Menu
          </label>
          {localStorage.getItem('rol') === 'ADMIN' && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex"
            >
              <Link
                to="/new"
                className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-700"
              >
                Crear perrito
              </Link>
            </ul>
          )}
          {localStorage.getItem('isLoggedIn') === 'true' ? (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 gap-y-2 bg-[#BF9270] text-center"
            >
              <Link
                to={'/turnos'}
                className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-700"
              >
                Solicitar turno
              </Link>
              <Link
                to={'/mis-turnos'}
                className={
                  'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                }
              >
                Mis turnos
              </Link>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              >
                Sign out
              </button>
            </ul>
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
