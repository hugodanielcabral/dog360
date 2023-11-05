import Header from '../components/Header'
import DogsRendering from '../components/DogsRendering'

function DogsPage() {
  return (
    <div>
      <Header />
      <main className="max-w-[1200px] mx-auto px-2">
        <DogsRendering />
      </main>
    </div>
  )
}

export default DogsPage
