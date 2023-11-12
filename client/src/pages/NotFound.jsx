import { MainLayout } from '../layout/MainLayout'
import notfound from "../images/notfound.png"


export const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-center mb-4">404 | Page Not Found</h2>
        <img src={notfound} alt="Not Found" className='mx-auto w-2/3'/>
      </div>
    </MainLayout>
  )
}
