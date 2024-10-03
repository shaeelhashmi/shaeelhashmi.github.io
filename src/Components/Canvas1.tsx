import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import Pipe from './Pipe'
export default function Canvas1() {
  return (
    <Canvas style={{ position: "absolute", top: '0' }} className='z-0 h-screen overflow-hidden'>
    <ambientLight intensity={0.5} />
    <Pipe />
    <mesh>
      <Stars />
    </mesh>
  </Canvas>
  )
}
