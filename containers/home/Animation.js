import { useEffect, useRef, useState, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Environment,
  PerspectiveCamera,
  FlyControls,
  MapControls
} from '@react-three/drei';

import Model from '../../public/Model';
import Model_1 from '../../public/Model_1';
import Alternative from '../../public/Alternative';
import Curation from '../../public/Curation';
import Digital from '../../public/Digital';
import { useSelector, useDispatch } from 'react-redux'
import { is_Spinner_loading_false } from '../../store/spinner/action'

const Animation = () => {

  // const onClick = useCallback(
  //   e => {
  //     // filter clicks from dragging
  //     if (dragDelta.current < 100) {
  //       const [x, y, z] = rotation.getValue()

  //       setRotation({
  //         rotation: [x, y + 180, z],
  //         config: config.default
  //       })
  //     }
  //   },
  //   [rotation, setRotation]
  // )
  // const [props, set] = useSpring(() => ({
  //   pos: [0, 0, 0],
  //   scale: [1, 1, 1],
  //   rotation: [0, 0, 0],
  //   config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  // }))

  // const [{ rotation }, setRotation] = useSpring(() => ({
  //   rotation: [0, 0, 0],
  //   config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  // }))

  
  return (
    <>

    <Canvas >
         <ambientLight intensity={1.13} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 10, 10]}
        castShadow
      />
     
      <Suspense fallback={null}>
  <OrbitControls />
        <Model  position={[0, -1, 0]} rotationSpeed={1} />
        {/* <Digital position={[-5, -3, 0]} />
        <Alternative position={[0, -3, 0]} />
        <Curation position={[+5, -3, 0]} /> */}
      </Suspense>
    </Canvas>
  </>
  );
};

export default Animation;
