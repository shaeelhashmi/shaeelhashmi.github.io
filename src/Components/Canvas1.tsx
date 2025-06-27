import { Canvas } from '@react-three/fiber'
import Pipe from './Pipe'
import { useSelector } from 'react-redux';
export default function Canvas1() {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <Canvas style={{ position:'absolute'}} >
      <ambientLight intensity={3} color={!isDarkMode?"white":"blue"} />
      <Pipe />
    </Canvas>
  )
}
