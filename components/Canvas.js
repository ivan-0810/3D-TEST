import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,

  } from '@react-three/drei';
const CanvasComp = ({children}) => {
    console.log(children, "children")
    return (
      <div className="CanvasComp">
       <Canvas >
          {/* <ambientLight intensity={1.13} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 10, 10]}
            castShadow
          /> */}
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
           {children}
          </Suspense>
        </Canvas>
      </div>
    );
  }
  
  export default CanvasComp;