import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-[#BF9270] text-white px-4 py-4 mb-6">
      <nav className="flex items-center gap-4">
        <h2 className="hidden text-xl font-bold text-white sm:block">Dog360</h2>
        <input
          className="w-full p-2 rounded-md"
          type="text"
          placeholder="Buscar..."
        />
        <div className="flex gap-2">
          <button>LogIn</button>
          <button>Register</button>
          <Link to="/new">Crear perrito</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header