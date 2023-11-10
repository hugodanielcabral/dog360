import Header from '../components/Header'
import DogsRendering from '../components/DogsRendering'
import Footer from '../components/Footer'
import { DogsForm } from './DogsForm'

function DogsPage() {
  return (
    <div className="bg-[#E3B7A0] text-white">
      <Header title="Dog360" />
      <main className="max-w-4xl min-h-screen px-2 mx-auto ">
        <DogsRendering />
      </main>
      <Footer />
    </div>
  )
}

export default DogsPage
