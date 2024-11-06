import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Sections3D } from './Sections3D';
import { Interface } from './Interface';

function Scene() {
  return (
    <div className="h-screen w-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#050816']} />
        <fog attach="fog" args={['#050816', 5, 15]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={2048}
        />
        
        <Environment preset="night" />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <ScrollControls pages={6} damping={0.1}>
          <Sections3D />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>

        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.SCREEN}
          />
          <ChromaticAberration
            offset={[0.002, 0.002]}
            blendFunction={BlendFunction.NORMAL}
            radialModulation={true}
            modulationOffset={0.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default Scene;