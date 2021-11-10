import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const { rotationSpeed } = props;
  const group = useRef();

  const { nodes, materials, animations } = useGLTF('/model.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Cube_HD.002_cell.010Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.011Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.012Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.013Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.014Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.015Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.016Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.017Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.018Action'].play().setLoop(10, 0);
    actions['Cube_HD.002_cell.019Action'].play().setLoop(10, 0);

    actions['Cube_HD.002_cell.010Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.011Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.012Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.013Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.014Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.015Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.016Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.017Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.018Action'].timeScale = 0.4;
    actions['Cube_HD.002_cell.019Action'].timeScale = 0.4;

    actions['Cube_HD.002_cell.010Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.011Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.012Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.013Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.014Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.015Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.016Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.017Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.018Action'].clampWhenFinished = true;
    actions['Cube_HD.002_cell.019Action'].clampWhenFinished = true;
  }, []);

  useFrame(() => (group.current.rotation.y += rotationSpeed / 200));

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Cube_HD002_cell010"
        geometry={nodes.Cube_HD002_cell010.geometry}
        material={nodes.Cube_HD002_cell010.material}
        position={[-2.57, 5.4, 0.26]}
      />
      <mesh
        name="Cube_HD002_cell011"
        geometry={nodes.Cube_HD002_cell011.geometry}
        material={nodes.Cube_HD002_cell011.material}
        position={[0.87, -3.36, -3.17]}
      />
      <mesh
        name="Cube_HD002_cell012"
        geometry={nodes.Cube_HD002_cell012.geometry}
        material={nodes.Cube_HD002_cell012.material}
        position={[4.67, -0.23, 1.87]}
      />
      <mesh
        name="Cube_HD002_cell013"
        geometry={nodes.Cube_HD002_cell013.geometry}
        material={nodes.Cube_HD002_cell013.material}
        position={[1.32, 5.58, -1.46]}
      />
      <mesh
        name="Cube_HD002_cell014"
        geometry={nodes.Cube_HD002_cell014.geometry}
        material={nodes.Cube_HD002_cell014.material}
        position={[-2.66, -3.87, 0.95]}
      />
      <mesh
        name="Cube_HD002_cell015"
        geometry={nodes.Cube_HD002_cell015.geometry}
        material={nodes.Cube_HD002_cell015.material}
        position={[0.85, 4.99, 3.06]}
      />
      <mesh
        name="Cube_HD002_cell016"
        geometry={nodes.Cube_HD002_cell016.geometry}
        material={nodes.Cube_HD002_cell016.material}
        position={[0.73, -3.73, 2.9]}
      />
      <mesh
        name="Cube_HD002_cell017"
        geometry={nodes.Cube_HD002_cell017.geometry}
        material={nodes.Cube_HD002_cell017.material}
        position={[-4.28, 3.05, 0.97]}
      />
      <mesh
        name="Cube_HD002_cell018"
        geometry={nodes.Cube_HD002_cell018.geometry}
        material={nodes.Cube_HD002_cell018.material}
        position={[3.26, -3.66, 0.35]}
      />
      <mesh
        name="Cube_HD002_cell019"
        geometry={nodes.Cube_HD002_cell019.geometry}
        material={nodes.Cube_HD002_cell019.material}
        position={[-3.41, -1.61, -3.3]}
      />
      <mesh
        geometry={nodes.tomorrow_full_logo.geometry}
        material={materials['Material.005']}
        position={[-0.02, 0.73, 0.66]}
        scale={6.28}
      />
    </group>
  );
}

useGLTF.preload('/model.glb');
