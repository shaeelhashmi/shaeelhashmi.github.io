import { Canvas } from '@react-three/fiber'
import Pipe from './Pipe'
export default function Canvas1() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <Canvas style={{ position: "fixed", top: '0' }} >
      <ambientLight intensity={3} color={!isDarkMode?"white":"blue"} />
      <Pipe />
    </Canvas>
  )
}
