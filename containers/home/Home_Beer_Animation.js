import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Environment,
  PerspectiveCamera
} from '@react-three/drei';
import Model from '../../public/Model';

const Home_Beer_Animation = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 55 }}>
         <ambientLight intensity={1.13} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 10, 10]}
        castShadow
      />
      <OrbitControls />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Home_Beer_Animation;
