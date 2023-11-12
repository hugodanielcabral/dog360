import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Searcher } from './Searcher'

export const HeaderMenu = () => {
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
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <HiOutlineMenuAlt3 size={30} color="white" />
      </label>
      {localStorage.getItem('isLoggedIn') === 'true' ? (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 rounded-box w-52 gap-y-2 bg-[#9b775b] text-center"
        >
          {localStorage.getItem('rol') === 'ADMIN' && (
            <Link
              to="/new"
              className="px-4 py-2 font-bold text-white duration-200 bg-purple-500 rounded hover:bg-purple-700"
            >
              Crear perrito
            </Link>
          )}
          <Searcher />
          <Link
            to={'/turnos'}
            className="px-4 py-2 font-bold text-white duration-200 bg-purple-500 rounded hover:bg-purple-700"
          >
            Solicitar turno
          </Link>
          <Link
            to={'/mis-turnos'}
            className="px-4 py-2 font-bold text-white duration-200 bg-purple-500 rounded hover:bg-purple-700"
          >
            Mis turnos
          </Link>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 font-bold text-white duration-200 bg-red-500 rounded hover:bg-red-700"
          >
            Sign out
          </button>
        </ul>
      ) : (
        <div className="space-x-10">
          <Link to="/signin">Login</Link>
          <Link to="/signup">Register</Link>
        </div>
      )}
    </div>
  )
}
