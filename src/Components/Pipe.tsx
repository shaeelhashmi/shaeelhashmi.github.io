import { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';
import MyLine from './Line';
export default function Pipe(props: any) {
  const ref = useRef<Mesh>(null);
  const boxRefs = useRef<Array<Mesh>>([]);
  const colours=["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF"];
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 3),
    new THREE.Vector3(-7, 5, 0),
    new THREE.Vector3(-3, 7, 5),
    new THREE.Vector3(0, 5, 10),
    new THREE.Vector3(3, 0, 7),
    new THREE.Vector3(7, -5, 5),
    new THREE.Vector3(10, 0, 3),
    new THREE.Vector3(7, 5, 0),
    new THREE.Vector3(3, 7, -5),
    new THREE.Vector3(0, 5, -10),
    new THREE.Vector3(-3, 0, -7),
    new THREE.Vector3(-7, -5, -5),
  ], true);

  const { camera, scene } = useThree();
  scene.fog = new THREE.Fog(0x180023, 3, 4);
  useFrame(() => {
    const t = 0; // Start of the curve
    if (ref.current) {
      const tubeGeometry = ref.current.geometry as THREE.TubeGeometry;
      const pos = tubeGeometry.parameters.path.getPointAt(t);
      const lookAtPos = tubeGeometry.parameters.path.getPointAt((t + 0.05) % 1); // Look slightly ahead
      camera.position.copy(pos);
      camera.lookAt(lookAtPos);
    }
  });
  useFrame(() => {
    const time = Date.now()/2;
    const looptime = 20 * 1000;
    const t = (time % looptime) / looptime;
    if (ref.current) {
      const tubeGeometry = ref.current.geometry as THREE.TubeGeometry;
      const pos = tubeGeometry.parameters.path.getPointAt(t);
      const pos2 = tubeGeometry.parameters.path.getPointAt((t + 0.01) % 1);
      camera.position.copy(pos);
      camera.lookAt(pos2);
    }
  });

  useFrame(() => {
    boxRefs.current.forEach((boxRef) => {
      if (boxRef) {
        boxRef.rotation.y += 0.01;
        boxRef.rotation.x += 0.01;
      }
    });
  });

  return (
    <>
      <mesh {...props} scale={[1, 1, 1]} ref={ref}>
        <tubeGeometry args={[curve, 70, 1, 20, true]}></tubeGeometry>
        <meshStandardMaterial  color={0xfffff} side={THREE.DoubleSide}  fog  wireframe/>
        {Array.from({ length: 32 }).map((_, index) => {
          const t = index / 32;
          const point = curve.getPointAt(t);
          point.x += Math.random() - 0.3;
          point.z += Math.random() - 0.3;
          const colour = colours[Math.floor(Math.random() * colours.length)];
          return (
  
            <mesh key={index}  scale={[0.3, 0.3, 0.3]} position={point} ref={(boxRef) => { boxRefs.current[index] = boxRef!; }}>
            <MyLine start={[0, 0, 0]} end={[0.5, 0, 0]} color={colour}/>
            <MyLine start={[0.5, 0, 0]} end={[0.5, 0.5, 0]} color={colour}/>
            <MyLine start={[0.5, 0.5, 0]} end={[0, 0.5, 0]} color={colour}/>
            <MyLine start={[0, 0.5, 0]} end={[0, 0, 0]} color={colour}/>
            <MyLine start={[0, 0, 0.5]} end={[0.5, 0, 0.5]} color={colour}/>
            <MyLine start={[0.5, 0, 0.5]} end={[0.5, 0.5, 0.5]} color={colour}/>
            <MyLine start={[0.5, 0.5, 0.5]} end={[0, 0.5,0.5]} color={colour}/>
            <MyLine start={[0, 0.5, 0.5]} end={[0, 0, 0.5]} color={colour}/>
            <MyLine start={[0, 0, 0]} end={[0, 0, 0.5]} color={colour}/>
            <MyLine start={[0.5, 0, 0]} end={[0.5, 0, 0.5]} color={colour}/>
            <MyLine start={[0.5, 0.5, 0]} end={[0.5, 0.5, 0.5]} color={colour}/>
            <MyLine start={[0, 0.5, 0]} end={[0, 0.5,0.5]} color={colour}/>
      
            </mesh>
            
          );
        })}
      </mesh>
 
    </>
  );
}


