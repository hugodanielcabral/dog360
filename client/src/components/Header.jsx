import { Link, useLocation } from 'react-router-dom'
import { HeaderMenu } from './HeaderMenu'
import dog from '../images/dog.png'
import 'animate.css'


export const Header = () => {
  const location = useLocation()
  console.log(location.pathname);

  return (
    <header className="bg-[#BF9270] text-white px-4 py-4 mb-6">
      <nav className="flex flex-wrap items-center m-auto justify-evenly gap-y-2">
        <div className="items-center hidden sm:flex">
          <Link to="/">
            <img src={dog} alt="dog360" width={90} className='animate__animated animate__bounceInLeft'/>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="ml-4 text-3xl font-bold animate__animated animate__fadeIn">Dog360</h1>
          <p className="text-[#000000] text-lg animate__animated animate__fadeIn">Find your new best friend</p>
        </div>
        <HeaderMenu />
      </nav>
    </header>
  )
}
