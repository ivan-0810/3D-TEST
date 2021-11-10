
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/alternative.glb');
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4,0)
    // group.current.position.y = (1 + Math.sin(t / 2)) / 10
  })
  return (
    <group ref={group} {...props} dispose={null} scale={[9,9,1.5]}>
      <mesh geometry={nodes.alternative.geometry} material={materials['SVGMat.005']} />
    </group>
  )
}

useGLTF.preload('/alternative.glb')
