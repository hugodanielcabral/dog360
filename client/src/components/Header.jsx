import { FcSearch, FcMenu } from 'react-icons/fc'

function Header() {
  return (
    <header className="bg-[#BF9270] text-white px-2 py-4 mb-6">
      <nav className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-semibold hidden sm:flex">DogiApp</h1>
        <div className="flex items-center gap-4 justify-around w-full sm:justify-end">
          <FcSearch size="2em" />
          <input
            type="search"
            placeholder="Pitbull, Salchicha..."
            className="p-2 rounded-md text-slate-900"
          />
          <a href="" className="hidden sm:flex">
            Sobre la App
          </a>
          <FcMenu size="2em" className="sm:hidden" />
        </div>
      </nav>
    </header>
  )
}

export default Header
