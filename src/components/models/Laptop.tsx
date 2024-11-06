import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Laptop(props: any) {
  const meshRef = useRef<THREE.Mesh>();
  const { nodes, materials } = useGLTF('/models/laptop.glb');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={nodes.Laptop.geometry}
        material={materials.Laptop}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="#444444"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
    </group>
  );
}