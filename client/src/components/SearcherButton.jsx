import { useLocation } from 'react-router-dom'

export const SearcherButton = ({ handleSearch }) => {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <button
        className="px-4 py-2 font-bold text-white duration-200 bg-purple-500 rounded hover:bg-purple-700"
        onClick={handleSearch}
      >
        Buscar
      </button>
    )
  }
  return null
}
