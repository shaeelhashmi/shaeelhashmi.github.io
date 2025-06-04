import { lazy, Suspense } from 'react'
import './App.css'
import './index.css'
import Particles from './Components/ParticleDesign'
import Home from './Components/Home'
import Loader from './Components/Loader'
const Canvas1 = lazy(() => import('./Components/Canvas1'))

export default function App() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen m-0 overflow-x-hidden text-white">
      {/* Particle background */}
      <div className="absolute inset-0 pointer-events-none  -z-50">
        <Particles />
      </div>
      {/* Main content (Home, etc.) */}
      <div className="relative z-10 w-full">
        <Home />
        {/* <Footer /> */}
      </div>
      <Suspense fallback={<Loader />}>
      <div className='fixed h-screen top-0 bottom-0 left-0 right-0 -z-20'>
        <Canvas1 />
        </div>
      </Suspense>
    </div>
  );
}
