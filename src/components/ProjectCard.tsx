import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCardProps {
  position: [number, number, number];
  title: string;
  description: string;
  color: string;
}

export function ProjectCard({ position, title, description, color }: ProjectCardProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const hovered = useRef(false);

  useFrame((state) => {
    if (mesh.current) {
      // Dynamic rotation and floating
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Hover effect
      if (mesh.current.material instanceof THREE.MeshDistortMaterial) {
        mesh.current.material.distort = hovered.current 
          ? 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.2
          : 0.2 + Math.sin(state.clock.elapsedTime) * 0.1;
        
        mesh.current.material.emissiveIntensity = hovered.current
          ? 1 + Math.sin(state.clock.elapsedTime * 4) * 0.5
          : 0.5 + Math.sin(state.clock.elapsedTime) * 0.2;
      }
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.4} 
      floatIntensity={0.4}
      floatingRange={[-0.2, 0.2]}
    >
      <group 
        position={position}
        onPointerEnter={() => (hovered.current = true)}
        onPointerLeave={() => (hovered.current = false)}
      >
        <mesh ref={mesh}>
          <boxGeometry args={[2, 3, 0.2]} />
          <MeshDistortMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            speed={5}
            distort={0.2}
            radius={1}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <Text
          font="/inter-bold.woff"
          position={[0, 0.5, 0.2]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.5}
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          font="/inter-bold.woff"
          position={[0, 0, 0.2]}
          fontSize={0.15}
          color="#cccccc"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.5}
          textAlign="center"
        >
          {description}
        </Text>
      </group>
    </Float>
  );
}