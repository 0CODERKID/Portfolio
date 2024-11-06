import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingIcons() {
  const iconsRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state) => {
    time.current += state.clock.getDelta();
    if (iconsRef.current) {
      iconsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      // Create a wave effect
      iconsRef.current.children.forEach((child, i) => {
        const offset = i * Math.PI * 0.2;
        child.position.y += Math.sin(time.current * 2 + offset) * 0.002;
        child.rotation.z = Math.sin(time.current + offset) * 0.1;
      });
    }
  });

  return (
    <group ref={iconsRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icon position={[-2, -1, 0]} color="#61DAFB" scale={0.4} /> {/* React */}
        <Icon position={[2, 1, 0]} color="#F7DF1E" scale={0.3} /> {/* JavaScript */}
        <Icon position={[0, 2, 0]} color="#3178C6" scale={0.5} /> {/* TypeScript */}
        <Icon position={[1.5, -1.5, 0]} color="#38BDF8" scale={0.35} /> {/* Tailwind */}
        <Icon position={[-1.5, 1.5, 0]} color="#00DC82" scale={0.45} /> {/* Node.js */}
      </Float>
    </group>
  );
}

interface IconProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

function Icon({ position, color, scale = 0.3 }: IconProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const hovered = useRef(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Pulse effect
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = scale * 
        (1 + (hovered.current ? Math.sin(state.clock.elapsedTime * 8) * 0.1 : 0));
      
      // Rotate on hover
      if (hovered.current) {
        meshRef.current.rotation.y += 0.02;
      }
    }
  });

  return (
    <mesh 
      ref={meshRef}
      position={position}
      onPointerEnter={() => (hovered.current = true)}
      onPointerLeave={() => (hovered.current = false)}
    >
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}