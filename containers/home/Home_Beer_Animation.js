import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Environment,
  PerspectiveCamera,
} from '@react-three/drei';

function Bottle(props) {
  const { bottle } = props;

  const group = useRef();
  const { nodes, materials } = useGLTF(`${bottle.url}`);

  return (
    <>
      <Environment preset="night" />
      <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.tomorrow_full_logo.geometry}
        material={materials['Material.005']}
        position={[-0.02, 0.73, 0.87]}
        scale={6.7}
      />
      <mesh geometry={nodes.Cube_HD.geometry} material={materials['Concrete 02.001']} />
    </group>
    </>
  );
}

const Scene = ({ position, bottle }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      <Bottle position={position} bottle={bottle} />
      <OrbitControls
        args={[camera, domElement]}
        enablePan={false}
        autoRotate={true}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Home_Beer_Animation = ({ bottle }) => {
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
      <Suspense fallback={null}>
        <Scene position={[0, -0.5, 0]} bottle={bottle} />
      </Suspense>
    </Canvas>
  );
};

export default Home_Beer_Animation;
