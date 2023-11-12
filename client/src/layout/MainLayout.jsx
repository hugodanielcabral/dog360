import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-4xl min-h-screen px-2 mx-auto ">{children}</main>
      <Footer />
    </div>
  )
}
