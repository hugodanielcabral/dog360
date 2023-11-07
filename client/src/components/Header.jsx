import { Link, useNavigate } from 'react-router-dom'
import dog from '../images/dog.png'

function Header({ title }) {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false')

    navigate('/')
  }

  return (
    <header className="bg-[#BF9270] text-white px-4 py-4 mb-6">
      <nav className="flex items-center m-auto justify-evenly">
        <div>
          <Link to="/">
            <img src={dog} alt="" width={90} />
          </Link>
        </div>
        <input
          className="w-[500px] p-2 rounded-md"
          type="text"
          placeholder="Buscar..."
        />
        <div className="flex justify-end gap-4 ml-4">
          <Link to="/new">Crear perrito</Link>
          {localStorage.getItem('isLoggedIn') === 'true' ? (
            <button onClick={handleSignOut}>Sign out</button>
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
