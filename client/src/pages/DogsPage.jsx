import Header from '../components/Header'
import DogsRendering from '../components/DogsRendering'
import Footer from '../components/Footer'


function DogsPage() {
  
  return (
    <div className="bg-[#E3B7A0] text-white">
      <Header title="Dog360" />
      <main className="max-w-[1200px] mx-auto px-2 min-h-screen">
        <DogsRendering/>
      </main>
      <Footer />
    </div>
  )
}

export default DogsPage
