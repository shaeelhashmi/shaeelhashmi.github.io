import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import { Stars } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
const RotateCube = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        
        }
    });
    return (
        <mesh >
         <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0, 0]} scale={1}>
            <Stars />
            </mesh>
       <Icosahedron args={[3,5]}>
        <meshStandardMaterial color="blue" wireframe/>
        </Icosahedron>
        </mesh>
    )
}
export default function Cube() {
  return (
    <Canvas>
      <RotateCube/>
      <ambientLight intensity={0.5} color={"white"}/>
    </Canvas>
  )
}
