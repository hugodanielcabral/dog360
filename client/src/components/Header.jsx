import { Link } from 'react-router-dom'
import { HeaderMenu } from './HeaderMenu'
import dog from '../images/dog.png'
import 'animate.css'

export const Header = () => {
  return (
    <header className="bg-[#BF9270] text-white sm:px-0 px-4 py-4 mb-6">
      <nav className="flex items-center justify-between sm:justify-around gap-y-2">
        <div className="items-center hidden sm:flex">
          <Link to="/">
            <img
              src={dog}
              alt="dog360"
              width={90}
              className="animate__animated animate__bounceInLeft"
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to="/">
            <h1 className="text-3xl font-bold animate__animated animate__fadeIn sm:text-center">
              Dog360
            </h1>
          </Link>
          <p className="text-[#000000] text-lg animate__animated animate__fadeIn">
            Encuentra tu nuevo mejor amigo
          </p>
        </div>
        <HeaderMenu />
      </nav>
    </header>
  )
}
