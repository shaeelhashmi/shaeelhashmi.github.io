import { lazy, Suspense } from 'react'
import './App.css'
import './index.css'
import Particles from './Components/ParticleDesign'
import Home from './Components/Home'
import Loader from './Components/Loader'
import Footer from './Components/Footer'
const Canvas1 = lazy(() => import('./Components/Canvas1'))

export default function App() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen m-0 overflow-x-hidden text-white">
         <Suspense fallback={<Loader />}>
      <div className="absolute inset-0 pointer-events-none  -z-50">
        <Particles />
      </div>

      <div className="w-full dark:text-white text-black">
        <Home />
        <Footer />
      </div>
  
      <div className='fixed h-screen top-0 bottom-0 left-0 right-0 -z-20'>
        <Canvas1 />
        </div>
      </Suspense>
    </div>
  );
}
