import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, useScroll, MeshDistortMaterial } from '@react-three/drei';
import { Group } from 'three';
import { ProjectCard } from './ProjectCard';
import { FloatingIcons } from './FloatingIcons';

export function Sections3D() {
  const group = useRef<Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (group.current) {
      group.current.position.y = scroll.offset * -40; // Increased to accommodate more projects
      group.current.rotation.y = scroll.offset * Math.PI * 0.5;
    }
  });

  return (
    <group ref={group}>
      {/* Hero Section */}
      <group position={[0, 0, 0]}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[0, 0, -1]} scale={[8, 8, 1]}>
            <planeGeometry />
            <MeshDistortMaterial
              color="#1a1a1a"
              speed={2}
              distort={0.3}
              radius={1}
            />
          </mesh>
          <Text
            font="/inter-bold.woff"
            fontSize={1.5}
            position={[-2, 1, 0]}
            color="#ff3366"
            maxWidth={2}
            textAlign="center"
          >
            Creative
          </Text>
          <Text
            font="/inter-bold.woff"
            fontSize={1.5}
            position={[2, -1, 0]}
            color="#ff3366"
            maxWidth={2}
            textAlign="center"
          >
            Developer
          </Text>
        </Float>
        <FloatingIcons />
      </group>

      {/* About Section */}
      <group position={[0, -20, 0]}>
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
          <mesh position={[0, 0, -1]} scale={[10, 6, 1]}>
            <planeGeometry />
            <MeshDistortMaterial
              color="#1a1a1a"
              speed={1.5}
              distort={0.2}
              radius={1}
            />
          </mesh>
          <Text
            font="/inter-bold.woff"
            fontSize={1}
            position={[0, 1.5, 0]}
            color="#ffffff"
            maxWidth={4}
            textAlign="center"
          >
            About Me
          </Text>
        </Float>
      </group>

      {/* Projects Section - Row 1 */}
      <group position={[0, -40, 0]}>
        <ProjectCard 
          position={[-4, 2, 0]} 
          title="AI Chat App"
          description="Real-time AI conversations with GPT-4"
          color="#FF3366"
        />
        <ProjectCard 
          position={[0, 2, 0]} 
          title="3D Portfolio"
          description="Interactive Three.js Portfolio"
          color="#33FF99"
        />
        <ProjectCard 
          position={[4, 2, 0]} 
          title="NFT Marketplace"
          description="Web3 Digital Art Platform"
          color="#3366FF"
        />
      </group>

      {/* Projects Section - Row 2 */}
      <group position={[0, -40, 0]}>
        <ProjectCard 
          position={[-4, -2, 0]} 
          title="Music Visualizer"
          description="Real-time Audio Visualization"
          color="#FF9933"
        />
        <ProjectCard 
          position={[0, -2, 0]} 
          title="Social Platform"
          description="Next.js Social Media App"
          color="#9933FF"
        />
        <ProjectCard 
          position={[4, -2, 0]} 
          title="Game Engine"
          description="WebGL-based Game Framework"
          color="#33FFFF"
        />
      </group>

      {/* Contact Section */}
      <group position={[0, -80, 0]}>
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
          <mesh position={[0, 0, -1]} scale={[8, 4, 1]}>
            <planeGeometry />
            <MeshDistortMaterial
              color="#1a1a1a"
              speed={1.5}
              distort={0.2}
              radius={1}
            />
          </mesh>
          <Text
            font="/inter-bold.woff"
            fontSize={0.8}
            position={[0, 0, 0]}
            color="#4CAF50"
            maxWidth={4}
            textAlign="center"
          >
            Let's Connect
          </Text>
        </Float>
      </group>
    </group>
  );
}