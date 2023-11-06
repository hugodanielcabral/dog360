import { Link, useNavigate } from 'react-router-dom';

function Header({ title }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false');

    navigate('/');
  };

  return (
    <header className="bg-[#BF9270] text-white px-4 py-4 mb-6">
      <nav className="flex items-center gap-4">
        <h2 className="hidden text-xl font-bold text-white sm:block">
          {title}
        </h2>
        <input
          className="w-full p-2 rounded-md sm:mx-12"
          type="text"
          placeholder="Buscar..."
        />
        <div className="flex items-center gap-4">
          <Link to="/new">Crear perrito</Link>
          {localStorage.getItem('isLoggedIn') === 'true' ? (
            <button onClick={handleSignOut}>
              Sign out
            </button>
          ) : (
            <>
              <Link to="/signin">Login</Link>
              <Link to="/signup">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
