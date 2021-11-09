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
import Model_1 from '../../public/Model_1';
import Alternative from '../../public/Alternative';
import Curation from '../../public/Curation';
import Digital from '../../public/Digital';
import { useSelector, useDispatch } from 'react-redux'
import { is_Spinner_loading_false } from '../../store/spinner/action'
const Animation = () => {
  const dispatch = useDispatch()
  const [ isFinished, setIsFinished ] = useState(false);
  const spinner = useSelector(state => state.spinner);
  useEffect(() => {
   dispatch(is_Spinner_loading_false())
  }, [Model])
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
      <OrbitControls  enableZoom={false}  minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}/>
      <Suspense fallback={null}>
        <Model  position={[0, -1, 0]}/>
        <Digital position={[-5, -3, 0]} />
        <Alternative position={[0, -3, 0]} />
        <Curation position={[+5, -3, 0]} />
      </Suspense>
    </Canvas>
  </>
  );
};

export default Animation;
