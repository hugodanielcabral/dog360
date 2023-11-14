import { MainLayout } from '../layout/MainLayout'
import avatar from "../images/avatar.png"
import avatar2 from "../images/avatar2.jpg"

export const AboutUs = () => {
  const datos = [
    {
      id: 1,
      nombre: 'Daniel Cabral',
      legajo: 55783,
      foto: avatar2,
    },
    {
      id: 2,
      nombre: 'Maximo Dip',
      legajo: 55467,
      foto: avatar,
    },
    {
      id: 3,
      nombre: 'Nicolás Lagoria',
      legajo: 55634,
      foto: avatar,
    },
    {
      id: 4,
      nombre: 'Juan Zoloaga',
      legajo: 55690,
      foto: avatar,
    }

  ]
  return (
    <MainLayout>
      <div className="flex flex-wrap justify-center">
      {datos.map(({ id, nombre, legajo, foto }) => (
        <div key={id} className="max-w-md rounded overflow-hidden shadow-lg m-4">
          <img className="w-64 h-64 object-cover" src={foto} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-gray-700 text-xl text-center mb-2">{nombre}</div>
            <p className="text-gray-700 text-center text-base">
              Legajo: {legajo}
            </p>
          </div>
        </div>
      ))}
    </div>
    </MainLayout>
  )
}