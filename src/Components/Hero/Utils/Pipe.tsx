import { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';
import MyLine from './Line';
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Pipe(props: any) {
    const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  const ref = useRef<Mesh>(null);
  const boxRefs = useRef<Array<Mesh>>([]);
  const colours=isDarkMode?["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF"]:["#D60E00","#940043","#007D28","#492B00","#005757","#3D000F"] ;
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
  scene.fog = new THREE.Fog(isDarkMode?0x000000:0xf7e8fd, 3, 4);
  // Dispose of geometry and material on unmount to prevent memory leaks

  useFrame(() => {
    const time = Date.now()/2;
    const looptime =20000;
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

  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.geometry.dispose();
        if (Array.isArray(ref.current.material)) {
          ref.current.material.forEach((mat) => mat.dispose());
        } else {
          ref.current.material.dispose();
        }
      }
      boxRefs.current.forEach((boxRef) => {
        if (boxRef) {
          boxRef.geometry.dispose();
          if (Array.isArray(boxRef.material)) {
            boxRef.material.forEach((mat) => mat.dispose());
          } else {
            boxRef.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <>
      <mesh {...props} scale={[1, 1, 1]} ref={ref}>
        <tubeGeometry args={[curve, 70, window.innerWidth/1440, 20, true]} />
        <meshStandardMaterial color={ 0x7262FF } side={THREE.DoubleSide} fog wireframe />
        {Array.from({ length: 32 }).map((_, index) => {
          const t = index / 32;
          const point = curve.getPointAt(t);
          const normal = curve.getTangent(t).normalize();
          const binormal = new THREE.Vector3();
          binormal.crossVectors(normal, new THREE.Vector3(0, 1, 0)).normalize();
          const radius = window.innerWidth / 1440 ; // Adjust radius based on window size
          point.add(binormal.multiplyScalar((Math.random() - 0.5) * radius));
          const colour = colours[Math.floor(Math.random() * colours.length)];
          return (
            <mesh key={index} scale={[window.innerWidth / 4200, window.innerWidth / 4200, window.innerWidth / 4200]} position={point} ref={(boxRef) => { boxRefs.current[index] = boxRef!; }}>
              <MyLine start={[0, 0, 0]} end={[0.5, 0, 0]} color={colour} />
              <MyLine start={[0.5, 0, 0]} end={[0.5, 0.5, 0]} color={colour} />
              <MyLine start={[0.5, 0.5, 0]} end={[0, 0.5, 0]} color={colour} />
              <MyLine start={[0, 0.5, 0]} end={[0, 0, 0]} color={colour} />
              <MyLine start={[0, 0, 0.5]} end={[0.5, 0, 0.5]} color={colour} />
              <MyLine start={[0.5, 0, 0.5]} end={[0.5, 0.5, 0.5]} color={colour} />
              <MyLine start={[0.5, 0.5, 0.5]} end={[0, 0.5, 0.5]} color={colour} />
              <MyLine start={[0, 0.5, 0.5]} end={[0, 0, 0.5]} color={colour} />
              <MyLine start={[0, 0, 0]} end={[0, 0, 0.5]} color={colour} />
              <MyLine start={[0.5, 0, 0]} end={[0.5, 0, 0.5]} color={colour} />
              <MyLine start={[0.5, 0.5, 0]} end={[0.5, 0.5, 0.5]} color={colour} />
              <MyLine start={[0, 0.5, 0]} end={[0, 0.5, 0.5]} color={colour} />
            </mesh>
          );
        })}
      </mesh>
 
    </>
  );
}


