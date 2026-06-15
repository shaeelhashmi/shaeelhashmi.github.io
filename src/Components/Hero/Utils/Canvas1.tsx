import { Canvas } from '@react-three/fiber'
import Pipe from './Pipe'
import { useSelector } from 'react-redux';
export default function Canvas1() {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
<div className="2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[400px] w-full h-full xl:rounded-full overflow-hidden">
    <Canvas style={{ width: '100%', height: '100%'}} camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={3} color={!isDarkMode?"white":"blue"} />
      <Pipe />
     
    </Canvas>
  </div>
   
  )
}
