import { data } from '../libs/perros'

const DogsRendering = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map((dog) => (
        <div
          key={dog.id}
          className="p-2 bg-[#BF9270] rounded shadow cursor-pointer"
        >
          <img
            src={dog.imagen}
            alt={`Dog ${dog.id}`}
            className="w-full h-[200px] object-cover hover:opacity-70 duration-300"
          />
          <div className="flex items-center justify-center h-4 p-4">
            <h3 className="font-bold text-white ">{dog.raza}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DogsRendering
