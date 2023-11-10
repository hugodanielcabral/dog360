import { Link } from 'react-router-dom'
import dog from '../images/dog.png'
import 'animate.css'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => {
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
        <HeaderMenu />
      </nav>
    </header>
  )
}
