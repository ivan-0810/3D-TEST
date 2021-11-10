import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../public/Model';

const Animation = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1.13} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 10, 10]}
          castShadow
        />

        <Suspense fallback={null}>
          <OrbitControls enableZoom={false}/>
          <Model position={[0, -1, 0]} rotationSpeed={1} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Animation;
