

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions, "actions")
   actions?.Animation.play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube_HD002_cell010.geometry}
        material={nodes.Cube_HD002_cell010.material}
        position={[-6.1, 11.85, 0.7]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell011.geometry}
        material={nodes.Cube_HD002_cell011.material}
        position={[2.08, -9.11, -7.62]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell012.geometry}
        material={nodes.Cube_HD002_cell012.material}
        position={[11.37, -1.52, 4.67]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell013.geometry}
        material={nodes.Cube_HD002_cell013.material}
        position={[3.12, 12.46, -3.41]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell014.geometry}
        material={nodes.Cube_HD002_cell014.material}
        position={[-6.36, -10.1, 2.35]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell015.geometry}
        material={nodes.Cube_HD002_cell015.material}
        position={[1.97, 10.9, 7.33]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell016.geometry}
        material={nodes.Cube_HD002_cell016.material}
        position={[1.69, -9.78, 7]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell017.geometry}
        material={nodes.Cube_HD002_cell017.material}
        position={[-10.59, 6.56, 2.48]}
      />
      <mesh
        geometry={nodes.Cube_HD002_cell018.geometry}
        material={nodes.Cube_HD002_cell018.material}
        position={[7.67, -9.54, 0.92]}
      />
      <mesh
        name="Cube_HD002_cell019"
        geometry={nodes.Cube_HD002_cell019.geometry}
        material={nodes.Cube_HD002_cell019.material}
        position={[-9.62, -7.2, -7.85]}
      />
      <mesh
        geometry={nodes.tomorrow_full_logo.geometry}
        material={materials['Material.005']}
        position={[-0.02, 0.73, 0.66]}
        scale={6.28}
      />
    </group>
  )
}

useGLTF.preload('/model.glb')
