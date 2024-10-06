import { lazy, Suspense } from 'react'
import './App.css'
import './index.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Loader from './Components/Loader'
const Canvas1 = lazy(() => import('./Components/Canvas1'))

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden overflow-y-auto text-white ">
      <Suspense fallback={<Loader />}>
      <div className='z-20'>
        <Home />
        <Footer />
      </div>
        <Canvas1 />
      </Suspense>
    </div>
  )
}
