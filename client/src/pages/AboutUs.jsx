import { MainLayout } from '../layout/MainLayout'
import { datos } from '../libs/usinfo'

export const AboutUs = () => {
  return (
    <MainLayout>
      <div className="flex flex-wrap justify-center">
        {datos.map(({ id, nombre, legajo, foto }) => (
          <div
            key={id}
            className="max-w-md m-4 overflow-hidden rounded shadow-lg"
          >
            <img
              className="object-cover w-64 h-64"
              src={foto}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-center text-gray-700">
                {nombre}
              </div>
              <p className="text-base text-center text-gray-700">
                Legajo: {legajo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}
